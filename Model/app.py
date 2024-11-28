from fastapi import FastAPI
from handlers.post_handler import PostHandler

app = FastAPI()
post_handler = PostHandler()

@app.get("/posts")
def get_posts():
    return post_handler.get_all_posts()

@app.post("/posts")
def create_post(title: str, content: str):
    return post_handler.create_post(title, content)
