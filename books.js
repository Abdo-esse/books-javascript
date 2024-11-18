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


let addBookbtn=document.querySelector('#btnAddBook')
let count= 4

displayBooks()
// Display books on the page
function displayBooks() {
    const bookList = document.getElementById('bookList');

    bookList.innerHTML =  ``// Clear the book list
    for (let i = 0; i < books.length; i++) {
      const bookElement = document.createElement("li");
      bookElement.className =
        "list-group-item d-flex justify-content-between align-items-center";
        
        bookElement.innerHTML += `
           <span>
                ${books[i].title}  |  <strong> ${books[i].author}</strong> 
            </span>
            <div>
                <button class="btn btn-${books[i].status === "read" ? "secondary" : "success"} btn-sm me-2" onclick="toggleStatus(${books[i].id})">
                    ${ books[i].status === "read"? "not read": "read"}
                </button>
                <button class="btn btn-danger btn-sm" onclick="deleteBook(${books[i].id})">Delete</button>
            </div>
        `
        bookList.appendChild(bookElement);
    }

   
}

// Add a new book to the list
function addBook() {
    const titleInput = document.getElementById('new-book-title');
    const authorInput = document.getElementById('new-book-author');
    const spanError=document.getElementById('error')
     count ++
     newBook={
      "id": count,
        "title":  titleInput.value,
        "author": authorInput.value,
        "status": "not read"

     }
     if (titleInput.value == '' &&titleInput.value == '' ) {
      spanError.innerHTML=` Veuillez remplire les samps`
      spanError.style.color= "red";
      
      
     }else{
      spanError.innerHTML=``
       books.push(newBook)}
   
    




    //Do not touch these
    saveBooks();
    displayBooks();

    // Clear input fields
    titleInput.value = '';
    authorInput.value = '';
}



// Delete a book from the list
function deleteBook(id) {
 let index = books.findIndex(e=>e.id ===id)
  
  
   books.splice(index, 1);
    

   //Do not touch these
   saveBooks();
   displayBooks();
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

function toggleStatus(id) {
   let finStatud
  status === "read"? "not read": "read"
}






// appel du function addBoks

addBookbtn.addEventListener('click',addBook)
