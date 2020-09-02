
const form = document.getElementById("form");

let myLibrary = [];
//función del constructor
function Book( title, author, pages, status) {
    this.title=title,
    this.author=author,
    this.pages=pages,
    this.status=status
}

//funcion para que aparezca el formulario al presionar el botón "start"
function appearForm() {
    form.classList.remove("none");
  }

//variables que guardan la información del nuevo objeto libro (los campos a llenar en el formulario)
let newTitle = document.getElementById("title");
let newAuthor = document.getElementById("author");
let newPages = document.getElementById("pages");
let newStatus = document.getElementById("status");

//funcion para tomar los datos del nuevo libro al presionar el botón "Add a book"
function test (){
    bookBuilder(newTitle.value, newAuthor.value, newPages.value, statusChecker());
}

//función para checar si el libro está o no leído
function statusChecker(){
if (document.getElementById("read").checked) {
    // Basic package is checked
    return true;

} else if (document.getElementById("unread").checked) {
    // Pro package is checked
    return false;

}
};

//función para construir el nuevo libro
function bookBuilder(title, author, pages, status){
    let newBook= new Book(title, author, pages, statusChecker(status));
    console.log(newBook);
        }


function addBookToLibrary() {
  // add stuff here
}

