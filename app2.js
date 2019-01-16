function onReady() {
 let id = 0;
 const toDos = [];
 const addToDoForm = document.getElementById('addToDoForm');

 function createNewToDo() {
   const newToDoText = document.getElementById('newToDoText');
   if (!newToDoText.value) { return; }
   toDos.push({
      title: newToDoText.value,
      complete: false,
      id: id++,
    });
    newToDoText.value = '';

    renderTheUI();
  }

  function renderTheUI() {
    const toDoList = document.getElementById('toDoList');

    toDoList.textContent = '';

    toDos.forEach(function(toDo) {
      const newLi = document.createElement('li');
      const checkbox = document.createElement('input');
      checkbox.type = "checkbox";
      const deleteButton = document.createElement('button');
      deleteButton.textContent="Delete";

      newLi.textContent = toDo.title;

      toDoList.appendChild(newLi);
      newLi.appendChild(checkbox);
      newLi.appendChild(deleteButton);


      deleteButton.addEventListener("click",
      function(id){
      let result = toDos.filter(toDo => toDo.id !==id);
      return result;

      renderTheUI();
      });
    });
  }

  addToDoForm.addEventListener('submit', event => {
     event.preventDefault();
     createNewToDo();
   });

   renderTheUI();
}

window.onload = function() {
  onReady();
};
