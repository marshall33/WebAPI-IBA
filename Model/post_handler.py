import uuid
from handlers.data_handler import DataHandler

class PostHandler:
    def __init__(self):
        self.data_handler = DataHandler()

    def create_post(self, title, content):
        posts = self.data_handler.read_data()
        new_post = {"id": str(uuid.uuid4()), "title": title, "content": content}
        posts.append(new_post)
        self.data_handler.write_data(posts)
        return new_post

    def get_all_posts(self):
        return self.data_handler.read_data()

    def get_post_by_id(self, post_id):
        posts = self.data_handler.read_data()
        return next((post for post in posts if post["id"] == post_id), None)
