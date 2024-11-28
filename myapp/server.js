const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// In-memory "database" of posts
let posts = [
    { id: 1, title: "First Post", content: "This is the first post." },
    { id: 2, title: "Second Post", content: "This is the second post." },
];

// Get all posts
app.get('/api/posts', (req, res) => {
    res.json(posts);
});

// Create a new post
app.post('/api/posts', (req, res) => {
    const newPost = { id: posts.length + 1, title: req.body.title, content: req.body.content };
    posts.push(newPost);
    res.json(newPost);
});

// Update a post
app.put('/api/posts/:id', (req, res) => {
    const postId = parseInt(req.params.id);
    const post = posts.find(p => p.id === postId);
    if (post) {
        post.title = req.body.title || post.title;
        post.content = req.body.content || post.content;
        res.json(post);
    } else {
        res.status(404).json({ message: "Post not found" });
    }
});

// Delete a post
app.delete('/api/posts/:id', (req, res) => {
    const postId = parseInt(req.params.id);
    posts = posts.filter(p => p.id !== postId);
    res.json({ message: "Post deleted" });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
