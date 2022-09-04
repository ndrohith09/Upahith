import json
from os import sendfile
from fastapi import FastAPI , Request 
from fastapi.middleware.cors import CORSMiddleware 
import uvicorn 
import io
import numpy as np
from test import evaluate, to_image
from pydantic import BaseModel

app = FastAPI() 

origins = [
    "http://localhost",
    "http://localhost:3000",
    '*'
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class LabelMap(BaseModel): 
    labelmap: str

@app.post("/generate") 
async def generate(labelmap: LabelMap):    
    print("labelmap:", labelmap)
    # labelmap = np.asarray(json.loads(labelmap)) 
    print("labelmap:", labelmap)
    labelmap = await np.asarray(labelmap.json) 
    image = evaluate(labelmap)
    image = to_image(image)
    file_object = io.BytesIO()
    image.save(file_object, 'PNG')
    file_object.seek(0)
    return sendfile(file_object, mimetype='image/PNG')


if __name__ == "__main__":
    uvicorn.run(app, host='0.0.0.0', port=8000)