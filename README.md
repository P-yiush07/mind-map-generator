# PDF Mind Map Generator

A tool that harnesses AI to metamorphose complex PDFs into interactive, visually rich mind maps, unveiling hidden connections and key concepts at a glance.

## Table of Contents
- [About](#about)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [How It Works](#how-it-works)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgments](#acknowledgments)

## About

PDF Mind Map Generator is an innovative open-source tool that bridges the gap between traditional document formats and visual learning. By leveraging advanced AI technology, it transforms dense PDF documents into intuitive, interactive mind maps, making it easier to grasp complex information at a glance.

## Features

- AI-powered content analysis using Google's Gemini 1.5 Pro model
- Automatic generation of hierarchical mind maps from PDF content
- Interactive visualization with customizable depth
- User-friendly web interface for easy PDF upload and mind map exploration
- FastAPI backend for high-performance processing
- Responsive frontend using vis.js for mind map rendering

## Getting Started

### Prerequisites

- Python 3.8+
- Node.js and npm (for frontend development)
- Google Cloud account with Gemini API access

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/pdf-mind-map-generator.git
   cd pdf-mind-map-generator
   ```

2. Install Python dependencies:
   ```
   pip install -r requirements.txt
   ```

3. Set up your Google Cloud credentials:
   ```
   export GOOGLE_APPLICATION_CREDENTIALS="path/to/your/credentials.json"
   ```

4. Install frontend dependencies:
   ```
   cd frontend
   npm install
   ```

## Usage

1. Start the FastAPI server:
   ```
   uvicorn app:app --reload
   ```

2. Open your web browser and navigate to `http://localhost:8000`

3. Upload a PDF file and click "Generate Mind Map"

4. Explore your interactive mind map!

## How It Works

1. User uploads a PDF through the web interface
2. Backend processes the PDF and extracts text using PyPDF2
3. Extracted text is sent to Google's Gemini 1.5 Pro model for analysis
4. Gemini generates a structured mind map based on the content
5. The mind map is returned to the frontend and visualized using vis.js

## Contributing

We welcome contributions from the community! Please read our [Contributing Guide](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Google Generative AI for the Gemini 1.5 Pro model
- vis.js for the mind map visualization
- FastAPI for the efficient backend framework
- The open-source community for inspiration and support

---

Made with ❤️ by Piyush
