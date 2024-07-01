const addBook = document.getElementById('addBookBtn');
const myLibrary = [];
const form = document.querySelector('.form-container');
const formbox = document.querySelector('form');
const submit = document.getElementById('submit');
const library = document.getElementById('library');

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}
Book.prototype.toggleRead = function() {
    this.read = !this.read;
}
function addBookToLibrary() {
    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let pages = document.getElementById('pages').value;
    let read = document.getElementById('read').checked;
    let book = new Book(title, author, pages, read);
    formbox.reset(); // Reset the form fields
    form.style.display = 'none'; // Hide the form

    myLibrary.push(book);
    displayBooks();
    console.log(myLibrary);
}

function displayBooks(){
    library.innerHTML = '';
    myLibrary.forEach(book=>{
        const bookDiv = document.createElement('div');
        bookDiv.classList.add('book');
        const title = document.createElement('h3');
        const titleHeader = document.createElement('h3');
        title.textContent = book.title;
        const author = document.createElement('p');
        author.textContent = book.author;
        const pages = document.createElement('p');
        pages.textContent = book.pages;
        const read = document.createElement('button');
        read.textContent = book.read ? 'Read' : 'Not Read';
        read.addEventListener('click',()=>{
            book.toggleRead();
            read.textContent = book.read ? 'Read' : 'Not Read';
        })
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete'
        deleteBtn.addEventListener('click',()=>{
            myLibrary.pop(book);
            displayBooks();
        })
        bookDiv.appendChild(title);
        bookDiv.appendChild(author);
        bookDiv.appendChild(pages);
        bookDiv.appendChild(read);
        bookDiv.appendChild(deleteBtn);
        library.appendChild(bookDiv);
        
    })
}

addBook.addEventListener('click', () => {
form.style.display = 'flex';
})
form.addEventListener('submit', () => {
    event.preventDefault();
    addBookToLibrary();
       
});

/**
 It felt very complex from the start but divide the problem and go through stage by stage
    1.  how forms work
    2. event.preventDefault() to prevent the form from submitting
    3. create elements and append them to the DOM
    4. constructor function to create objects
    5. use prototype to add methods to objects


 */