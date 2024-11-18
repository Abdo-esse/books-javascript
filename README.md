# Book Wishlist Application

## Description
This application allows users to manage their book wishlist. Users can:
- Add books they want to read
- Mark books as "read" or "not read"
- Delete books from the list

The application initially fetches a set of books from a JSON file and supports data persistence using local storage.

## Code Structure

The main functions for the application are as follows:

1. **`loadBooks()`**  
   Fetches the initial list of books from a JSON file and displays them. If books are already saved in local storage, those are loaded instead.

2. **`displayBooks()`**  
   Displays the list of books. Each book entry includes options to toggle its "read" status and delete it.

3. **`addBook()`**  
   Adds a new book to the list based on user input (title and author).

4. **`toggleReadStatus(id)`**  
   Toggles a book’s status between "read" and "not read."

5. **`deleteBook(id)`**  
   Deletes a book from the list.

6. **`saveBooks()`**  
   Saves the current book list to local storage.

## Data Persistence

The application attempts to load saved books from local storage on page load. If no saved books are available, it fetches an initial set of books from a JSON file.

## Sample JSON File

The JSON file (`books.json`) contains the initial book list data in the following format:

```json
[
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
    }
]
```
