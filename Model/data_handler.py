import json

class DataHandler:
    def __init__(self, filepath="data/posts.json"):
        self.filepath = filepath

    def read_data(self):
        with open(self.filepath, "r") as f:
            return json.load(f)

    def write_data(self, data):
        with open(self.filepath, "w") as f:
            json.dump(data, f, indent=4)
