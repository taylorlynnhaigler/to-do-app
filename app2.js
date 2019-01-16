function onReady() {
let id = 0;
let toDos = [];
const addToDoForm = document.getElementById("addToDoForm");

function createNewToDo() {
  const newToDoText = document.getElementById("newToDoText");
  if (!newToDoText.value) { return; }
  toDos.push({
     title: newToDoText.value,
     complete: false,
     id: id++,
   });
   newToDoText.value = "";

   renderTheUI();
 }

function removeToDo() {
   const result = toDos.filter(toDo => toDo.id !==id);
   return result;
 }


 function renderTheUI() {
   const toDoList = document.getElementById("toDoList");

   toDoList.textContent = "";

   toDos.forEach(function(toDo) {
     const newLi = document.createElement("li");
     const checkbox = document.createElement("input");
     checkbox.type = 'checkbox';
     const deleteButton = document.createElement("button");
     deleteButton.textContent='Delete';

     newLi.textContent = toDo.title;

     toDoList.appendChild(newLi);
     newLi.appendChild(checkbox);
     newLi.appendChild(deleteButton);

   });
 }

 addToDoForm.addEventListener("submit", event => {
    event.preventDefault();
    createNewToDo();
  });
  renderTheUI();
}

deleteButton.addEventListener("click", event => {
  event.preventDefault();
  toDos = removeToDo(toDo.id);
})
renderTheUI();
;

window.onload = function() {
 onReady();
};
