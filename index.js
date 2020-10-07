
const form = document.getElementById("form");

let newBook;

let myLibrary = [];
const mainContainer = document.getElementById("libraryStore")

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
   myLibrary.push(newBook);
   //estos valores regresan los valores del formulario en blando cuando ya fue enviado
   title.value="";
   author.value="";
   pages.value="";
   status.value="";
   render();
}
   //Loop para agregar una tarjeta por cada libro creado

  function render(){ mainContainer.innerHTML="";
   for (let i = 0; i<myLibrary.length; i++) {
    mainContainer.appendChild(printValues(myLibrary,i));
    }
    console.log(myLibrary[0]);
  };
  

//función para checar si el libro está o no leído
function statusChecker(){
if (document.getElementById("read").checked) {
    status=true;
    return "Read";

} else if (document.getElementById("unread").checked) {
    status=false;
    return "Unread";

}
};


//función para construir el nuevo libro
function bookBuilder(title, author, pages, status){
    if(newBook= new Book(title, author, pages, statusChecker(status))){
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


//Función para imprimir los nuevos valores en una "card"

function printValues(array,i){
  const cardContainer=document.createElement("div")
  cardContainer.dataset.id==
  cardContainer.classList.add("bookDiv");
  const deleteButton=document.createElement("div")
  const iconDeleteBtn=document.createElement("i");
  iconDeleteBtn.classList.add("fas")
  iconDeleteBtn.classList.add("fa-times")
  deleteButton.classList.add("deleteBtn")
  deleteButton.addEventListener("click", ()=>{
    removeChild(cardContainer)
  })
  deleteButton.appendChild(iconDeleteBtn);
  cardContainer.appendChild(deleteButton);   
  const title=document.createElement("div")
  title.innerHTML=array[i].title;
  title.classList.add("new-title");
  cardContainer.appendChild(title);
  const author=document.createElement("div");
  author.innerHTML=array[i].author;
  author.classList.add("new-author");
  cardContainer.appendChild(author);
  const pages=document.createElement("div")
  pages.innerHTML=array[i].pages;
  pages.classList.add("new-pages");
  cardContainer.appendChild(pages);
  const status=document.createElement("div")
  status.innerHTML=array[i].status;
  status.classList.add("new-status");
  status.id = `bookStatus${i}`
  status.addEventListener("click",statusChange)
  cardContainer.appendChild(status);  
return cardContainer;
function statusChange(){
  let status=document.getElementById(`bookStatus${i}`);
  console.log(status.innerHTML)
  if (status.innerHTML=="Read") status.innerHTML = "Unread";
    else status.innerHTML = "Read";
 // Si cambias el estado del libro cuando agregar uno con el estado contrario, todos se vuelven al nuevo
    // Checar si al momento de crear un libro no estamos modificando el estado de todos los otros libros
    // Si el status tiene el valor original, no se ve afectado. Cambia sólo si se cambio el status manualmente.
}
};

function removeChild(container){
  let index= container.dataset.id;
  myLibrary.splice(index,1)
  console.log(myLibrary)
  render();
};
