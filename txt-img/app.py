from fastapi import FastAPI 
from fastapi.middleware.cors import CORSMiddleware 
import uvicorn
from fastapi.staticfiles import StaticFiles 
from txt2img import * 
import wikipedia


app = FastAPI() 
app.mount("/static", StaticFiles(directory="static"), name="static")

origins = [
    "http://localhost",
    "http://localhost:3000",
    "*", 
] 

app.add_middleware(
    CORSMiddleware, 
    allow_origins = origins,
    allow_credentials = True, 
    allow_methods = ["*"], 
    allow_headers = ["*"],
) 

@app.get("/") 
async def home():
    return {"message": "Hello World"} 


@app.post("/text2img") 
async def text2img(text: str): 
    print("line 48" , text )    
    # lst = [] 
    # for line in text.split("."):
    #     lst.append(line)
    # print("line 52" , lst )
    # json_data = []
    # for text in lst: 
    #     img_path = find_matches(model, 
    #             image_embeddings,
    #             query=text,
    #             image_filenames=valid_df['image'].values,
    #             n=4)
    #     json_data.append(
    #         {
    #             "text": text,
    #             "img_path": img_path
    #         }
    #     )
    img_path = find_matches(model, 
            image_embeddings,
            query=text,
            image_filenames=valid_df['image'].values,
            n=4)
    return {"img" : img_path , "text" : text}
    # return json_data


@app.post("/wiki")
async def wiki(text: str): 
    summary = wikipedia.summary("Sustainablity" , sentences = 2)
    return {"wiki" : summary }

# url = https://api.unsplash.com/search/photos?query=sustainability&client_id=wXUej3KqbrmreBQ5WT6zmB9LZ5BQ0VKNCVSV-7oj3Z4
# post to this api to get images . 



if __name__ == "__main__":
    uvicorn.run(app, host='0.0.0.0', port=8000)
