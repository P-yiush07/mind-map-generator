import nltk
from nltk.tokenize import sent_tokenize, word_tokenize
from nltk.corpus import stopwords
from nltk.stem import WordNetLemmatizer
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
import numpy as np
import networkx as nx
from gensim.models import Word2Vec
import ssl
from collections import defaultdict  # Add this import
import google.generativeai as genai
import json
import os

# Download NLTK data
nltk.download('punkt')
nltk.download('stopwords')
nltk.download('wordnet')

# SSL certificate verification
try:
    _create_unverified_https_context = ssl._create_unverified_context
except AttributeError:
    pass
else:
    ssl._create_default_https_context = _create_unverified_https_context

class MindMapNode:
    def __init__(self, content):
        self.content = content
        self.children = []

def preprocess_text(text):
    sentences = sent_tokenize(text)
    stop_words = set(stopwords.words('english'))
    lemmatizer = WordNetLemmatizer()
    
    processed_sentences = []
    for sentence in sentences:
        words = word_tokenize(sentence.lower())
        words = [lemmatizer.lemmatize(word) for word in words if word.isalnum()]
        words = [word for word in words if word not in stop_words]
        processed_sentences.append(words)
    
    return processed_sentences

def extract_key_concepts(processed_sentences, num_concepts=5):
    # Create a single string for TF-IDF
    text = ' '.join([' '.join(sentence) for sentence in processed_sentences])
    
    # TF-IDF
    vectorizer = TfidfVectorizer()
    tfidf_matrix = vectorizer.fit_transform([text])
    feature_names = vectorizer.get_feature_names_out()
    tfidf_scores = dict(zip(feature_names, tfidf_matrix.toarray()[0]))
    
    # TextRank
    text_rank = nx.Graph()
    for sentence in processed_sentences:
        for i, word1 in enumerate(sentence):
            for word2 in sentence[i+1:]:
                if word1 != word2:
                    if text_rank.has_edge(word1, word2):
                        text_rank[word1][word2]['weight'] += 1
                    else:
                        text_rank.add_edge(word1, word2, weight=1)
    
    scores = nx.pagerank(text_rank)
    
    # Combine TF-IDF and TextRank scores
    combined_scores = {word: (tfidf_scores.get(word, 0) + scores.get(word, 0)) / 2 for word in set(tfidf_scores) | set(scores)}
    
    key_concepts = sorted(combined_scores.items(), key=lambda x: x[1], reverse=True)[:num_concepts]
    return [concept for concept, _ in key_concepts]

def train_word2vec(processed_sentences):
    model = Word2Vec(sentences=processed_sentences, vector_size=100, window=5, min_count=1, workers=4)
    return model

def find_related_terms(concept, word2vec_model, processed_sentences, num_terms=3):
    related_terms = []
    if concept in word2vec_model.wv:
        similar_words = word2vec_model.wv.most_similar(concept, topn=num_terms*2)
        for word, _ in similar_words:
            if any(word in sentence for sentence in processed_sentences):
                related_terms.append(word)
                if len(related_terms) == num_terms:
                    break
    
    # If we don't have enough related terms, fall back to frequency-based selection
    if len(related_terms) < num_terms:
        word_freq = defaultdict(int)
        for sentence in processed_sentences:
            if concept in sentence:
                for word in sentence:
                    if word != concept:
                        word_freq[word] += 1
        additional_terms = sorted(word_freq.items(), key=lambda x: x[1], reverse=True)[:num_terms-len(related_terms)]
        related_terms.extend([term for term, _ in additional_terms])
    
    return related_terms[:num_terms]

def build_mind_map(text, depth=2):
    processed_sentences = preprocess_text(text)
    key_concepts = extract_key_concepts(processed_sentences)
    word2vec_model = train_word2vec(processed_sentences)
    
    def create_node(concept, current_depth):
        node = MindMapNode(concept)
        if current_depth < depth:
            related_terms = find_related_terms(concept, word2vec_model, processed_sentences)
            for term in related_terms:
                node.children.append(create_node(term, current_depth + 1))
        return node

    root = MindMapNode("Main Topic")
    for concept in key_concepts:
        root.children.append(create_node(concept, 0))
    
    return root

def mind_map_to_dict(node):
    return {
        "name": node.content,
        "children": [mind_map_to_dict(child) for child in node.children]
    }

def generate_mind_map(text, depth=2):
    mind_map = build_mind_map(text, depth)
    return mind_map_to_dict(mind_map)

# Configure the Gemini API
genai.configure(api_key="AIzaSyBAksDQ78gFv_aOo7E91ReCxS9lVpdOM4M")

# Create the model
generation_config = {
  "temperature": 1,
  "top_p": 0.95,
  "top_k": 40,
  "max_output_tokens": 8192,
  "response_mime_type": "text/plain",
}

model = genai.GenerativeModel(
  model_name="gemini-1.5-pro-002",
  generation_config=generation_config,
)

def generate_mind_map(text, depth=2):
    chat_session = model.start_chat(history=[])
    
    prompt = f"""
    Create a mind map based on the following text. The mind map should have a depth of {depth} levels.
    Format the mind map as a JSON object with the following structure:
    {{
        "name": "Main Topic",
        "children": [
            {{
                "name": "Subtopic 1",
                "children": [
                    {{"name": "Sub-subtopic 1.1"}},
                    {{"name": "Sub-subtopic 1.2"}}
                ]
            }},
            {{
                "name": "Subtopic 2",
                "children": [
                    {{"name": "Sub-subtopic 2.1"}},
                    {{"name": "Sub-subtopic 2.2"}}
                ]
            }}
        ]
    }}

    Text: {text}

    Generate a mind map JSON based on the key concepts and their relationships in the text.
    """

    response = chat_session.send_message(prompt)
    mind_map_json = response.text

    # Extract the JSON part from the response
    start_index = mind_map_json.find('{')
    end_index = mind_map_json.rfind('}') + 1
    mind_map_json = mind_map_json[start_index:end_index]

    # Parse the JSON
    try:
        mind_map_data = json.loads(mind_map_json)
        return mind_map_data
    except json.JSONDecodeError:
        print("Error decoding JSON. Raw response:", mind_map_json)
        return {"name": "Error", "children": []}
