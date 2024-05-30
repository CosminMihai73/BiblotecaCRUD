const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path'); 
const Book = require('./models/Book');

const app = express();
app.use(bodyParser.json());
app.use(cors({
  origin: 'http://localhost:8080' 
}));

app.use(express.static(path.join(__dirname, 'public')));


mongoose.connect('mongodb://localhost:27017/bookstore', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));


app.get('/books', async (req, res) => {
    try {
        const books = await Book.find();
        res.json(books);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


app.post('/books', async (req, res) => {
    try {
        const newBook = new Book(req.body);
        const savedBook = await newBook.save();
        res.status(201).json(savedBook);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});


app.get('/books/:title', async (req, res) => {
    try {
        const book = await Book.findOne({ title: req.params.title });
        if (!book) {
            return res.status(404).json({ error: 'Book not found' });
        }
        res.json(book);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.put('/books/:title', async (req, res) => {
    try {
        const updatedBook = await Book.findOneAndUpdate({ title: req.params.title }, req.body, { new: true });
        if (!updatedBook) {
            return res.status(404).json({ error: 'Book not found' });
        }
        res.json(updatedBook);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});


app.delete('/books/:title', async (req, res) => {
    try {
        const deletedBook = await Book.findOneAndDelete({ title: req.params.title });
        if (!deletedBook) {
            return res.status(404).json({ error: 'Book not found' });
        }
        res.status(204).json({ message: 'Book deleted' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
