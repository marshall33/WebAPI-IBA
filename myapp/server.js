const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

let items = [
    { id: 1, name: "Item 1" },
    { id: 2, name: "Item 2" },
];

app.get('/api/items', (req, res) => res.json(items));
app.post('/api/items', (req, res) => {
    const newItem = { id: items.length + 1, name: req.body.name };
    items.push(newItem);
    res.json(newItem);
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${3000}`));
