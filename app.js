function onReady() {
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoForm = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');

  addToDoForm.addEventListener('submit', () => {
    event.preventDefault();

    // get the text
    let title = newToDoText.value;

    // create a new li
    let newLi = document.createElement('li');

    // create a new input
    let checkbox = document.createElement('input');

    // set the input's type to checkbox
    checkbox.type = "checkbox";

    // create a deletebutton
    let deleteButton = document.createElement("button");
     deleteButton.textContent='Delete';

    // set the title
    newLi.textContent = title;

    // attach the checkbox to the li
    newLi.appendChild(checkbox);

    //attach the delete button to the li
    newLi.appendChild(deleteButton);

    // attach the li to the ul
    toDoList.appendChild(newLi);

    // empty the input
    newToDoText.value = '';

  });
}

window.onload = function() {
  onReady();
};
