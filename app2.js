function onReady() {
let id = 0;
let toDos = [];
let addToDoForm = document.getElementById("addToDoForm");

function createNewToDo() {
  let newToDoText = document.getElementById("newToDoText");
  if (!newToDoText.value) { return; }
  toDos.push({
     title: newToDoText.value,
     complete: false,
     id: id++,
   });
   newToDoText.value = "";

   renderTheUI();
 }

function removeToDo(id) {
   return toDos.filter(toDo => toDo.id !==id);
 }


 function renderTheUI() {
   let toDoList = document.getElementById("toDoList");

   toDoList.textContent = "";

   toDos.forEach(function(toDo) {
     let newLi = document.createElement("li");
     let checkbox = document.createElement("input");
     checkbox.type = 'checkbox';
     let deleteButton = document.createElement("button");
     deleteButton.textContent='Delete';

     newLi.textContent = toDo.title;

     toDoList.appendChild(newLi);
     newLi.appendChild(checkbox);
     newLi.appendChild(deleteButton);

     deleteButton.addEventListener("click", () => {
       event.preventDefault();
       toDos = removeToDo(toDo.id);
       renderTheUI();
     });
   });
 }

 addToDoForm.addEventListener("submit", event => {
    event.preventDefault();
    createNewToDo();
  });
  renderTheUI();
}



window.onload = function() {
 onReady();
};
