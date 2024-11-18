let books = [
    {
        "id": 1,
        "title": "1984",
        "author": "George Orwell",
        "status": "not read"
    },
    {
        "id": 2,
        "title": "To Kill a Mockingbird",
        "author": "Harper Lee",
        "status": "read"
    },
    {
        "id": 3,
        "title": "The Great Gatsby",
        "author": "F. Scott Fitzgerald",
        "status": "not read"
    },
    {
        "id": 4,
        "title": "",
        "author": "F. Scott Fitzgerald",
        "status": "not read"
    }
];



// Display books on the page
function displayBooks() {
    const bookList = document.getElementById('bookList');
    bookList.innerHTML = '<h1>gfgfgfgfgfhfg</h1>'; // Clear the book list
    for (let i = 0; i < books.length; i++) {
        
        
    }

   
}

// Add a new book to the list
function addBook() {
    const titleInput = document.getElementById('new-book-title');
    const authorInput = document.getElementById('new-book-author');

    
    




    //Do not touch these
    saveBooks();
    displayBooks();

    // Clear input fields
    titleInput.value = '';
    authorInput.value = '';
}



// Delete a book from the list
function deleteBook(id) {
   
    
}

// Save books to local storage
function saveBooks() {
    localStorage.setItem('books', JSON.stringify(books));
}

// Load books from local storage or JSON file on page load
window.onload = () => {
    const savedBooks = localStorage.getItem('books');
    if (savedBooks) {
        books = JSON.parse(savedBooks);
        displayBooks();
    }
};
