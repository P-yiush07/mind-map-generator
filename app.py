from fastapi import FastAPI, File, UploadFile, HTTPException
from fastapi.responses import JSONResponse, HTMLResponse
from fastapi.staticfiles import StaticFiles
import os
from pdf_processor import process_pdf
from mind_map_generator import generate_mind_map

app = FastAPI()

# Mount a static files directory
app.mount("/static", StaticFiles(directory="static"), name="static")

@app.get("/", response_class=HTMLResponse)
async def read_root():
    with open("static/index.html", "r") as f:
        return f.read()
 
@app.post("/upload")
async def upload_file(file: UploadFile = File(...), depth: int = 2):
    if not file.filename.lower().endswith('.pdf'):
        raise HTTPException(status_code=400, detail="Only PDF files are allowed")
    
    # Save the uploaded file
    file_path = f"uploads/{file.filename}"
    with open(file_path, "wb") as buffer:
        buffer.write(await file.read())
    
    # Process PDF and generate mind map
    text = process_pdf(file_path)
    mind_map_data = generate_mind_map(text, depth)
    
    # Clean up the uploaded file
    os.remove(file_path)
    
    return JSONResponse(content=mind_map_data)

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
