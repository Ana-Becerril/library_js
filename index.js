
const form = document.getElementById("form");

let newBook;

let myLibrary = [];
//función del constructor y marcación de error para cuando no hay input
function Book( title, author, pages, status) {
    this.title=title;
    this.author=author;
    this.pages=pages;
    this.status=status;
    
    if (!title) throw new Error('Please give the book a title.');
  if (!author) throw new Error('Please give the book an author.');
  if (!pages) throw new Error('Please give the book a page count.');
  if (!status) throw new Error('Please tell us if you have read this book?');
}

//funcion para que aparezca el formulario al presionar el botón "start"
function appearForm() {
    form.classList.remove("none");
  }

//variables que hacen referencia a la información del nuevo objeto libro (los campos a llenar en el formulario)
let newTitle = document.getElementById("title");
let newAuthor = document.getElementById("author");
let newPages = document.getElementById("pages");
let newStatus = document.getElementById("status");

//funcion que construye un libro a partir de los valores proporcionados, desaparece el formulario e imprime los nuevos valores en una tarjeta
function test (){
   bookBuilder(newTitle.value, newAuthor.value, newPages.value, statusChecker());
   modal.style.display = "none";
   printValues();
}

//función para checar si el libro está o no leído
function statusChecker(){
if (document.getElementById("read").checked) {
    return true;

} else if (document.getElementById("unread").checked) {
    return false;

}
};


//función para construir el nuevo libro
function bookBuilder(title, author, pages, status){
    if(newBook= new Book(title, author, pages, statusChecker(status))){
      console.log(newBook);
      myLibrary.push(newBook);
          return true;
    };
}
console.log(myLibrary)

// Get the modal
var modal = document.getElementById("myModal");
const modalContent = document.getElementById("modalContent")

// Get the button that opens the modal
var btn = document.getElementById("button");
var btnAdd=document.getElementById("add-button")

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "flex";
  modalContent.classList.add("bounce-in-fwd")
  
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


function printValues(){
var card=document.getElementById("card").innerHTML=newBook.title+newBook.author;

};


