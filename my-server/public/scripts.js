document.addEventListener('DOMContentLoaded', function() {
    const loadBooksButton = document.getElementById('load-books-btn');
    loadBooksButton.addEventListener('click', fetchBooks);

    const createBookButton = document.getElementById('create-book-btn');
    const updateBookButton = document.getElementById('update-book-btn');
    const deleteBookButton = document.getElementById('delete-book-btn');

    createBookButton.addEventListener('click', createBook);
    updateBookButton.addEventListener('click', updateBook);
    deleteBookButton.addEventListener('click', deleteBook);
});

function fetchBooks() {
    fetch('http://localhost:5000/books')
    .then(response => response.json())
    .then(books => displayBooks(books))
    .catch(error => console.error('Error:', error));
}

function displayBooks(books) {
    const booksList = document.getElementById('books-list');
    booksList.innerHTML = '';  
    books.forEach(book => {
        const li = document.createElement('li');
        li.textContent = `Title: ${book.title}, Author: ${book.author}, Year: ${book.year}, Description: ${book.description}, Date Added: ${new Date(book.dateAdded).toLocaleDateString()}, Review: ${book.review}`;
        booksList.appendChild(li);
    });
}

function createBook() {
    const newBook = {
        title: document.getElementById('title').value,
        author: document.getElementById('author').value,
        year: parseInt(document.getElementById('year').value),
        description: document.getElementById('description').value,
        dateAdded: new Date(),
        review: document.getElementById('review').value
    };

    fetch('http://localhost:5000/books', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newBook)
    })
    .then(response => response.json())
    .then(book => {
        console.log('Book created:', book);
        fetchBooks();
    })
    .catch(error => console.error('Error:', error));
}

function updateBook() {
    const bookTitle = document.getElementById('update-title').value;
    const updatedBook = {
        title: document.getElementById('update-title').value,
        author: document.getElementById('update-author').value,
        year: parseInt(document.getElementById('update-year').value),
        description: document.getElementById('update-description').value,
        review: document.getElementById('update-review').value
    };

    fetch(`http://localhost:5000/books/${bookTitle}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedBook)
    })
    .then(response => response.json())
    .then(book => {
        console.log('Book updated:', book);
        fetchBooks();
    })
    .catch(error => console.error('Error:', error));
}

function deleteBook() {
    const bookTitle = document.getElementById('delete-title').value;

    fetch(`http://localhost:5000/books/${bookTitle}`, {
        method: 'DELETE'
    })
    .then(() => {
        console.log('Book deleted');
        fetchBooks();
    })
    .catch(error => console.error('Error:', error));
}