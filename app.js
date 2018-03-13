
function onReady() {

  // create a id variable and set it to 0
  let id = 0;

   const toDos = [];
   const addToDoForm = document.getElementById('addToDoForm');

function createNewToDo() {
   const newToDoText = document.getElementById('newToDoText');
   if (!newToDoText.value) { return; }
   toDos.push({
     title: newToDoText.value,
     complete: false,
     // add third property "id" which will store value of id variable
     id: id,
     //  increment the "id" variable??
     id = id+1;
   });

  newToDoText.value = '';

  renderTheUI();
  // create delete button, append it to "newLi" and register event listener

  // when delete is clicked, remove the to-do from the ToDos array using the .filter() array method
  //comparing todo.id with the id of each item in the to-do list.
}
  addToDoForm.addEventListener('submit', event => {
  event.preventDefault();
  createNewToDo();
});
  renderTheUI();
    const toDoList = document.getElementById('toDoList');

  toDoList.textContent = '';

  toDos.forEach(function(toDo) {
    const newLi = document.createElement('li');
    const checkbox = document.createElement('input');
  checkbox.type = "checkbox";
  newLi.textContent = toDo.title;

  toDoList.appendChild(newLi);
  newLi.appendChild(checkbox);
    });

}

window.onload = function() {
   onReady();
};
