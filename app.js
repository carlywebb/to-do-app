window.onload = function() {
   onReady();
};

function onReady() {
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');
  //checkpoint added delete
  const delete = document.getElementById('delete');
  addToDoForm.addEventListener('submit', () =>{
  event.preventDefault();
  //checkpoint added delete event listener
  delete.addEventListener('submit', () => {
  event.preventDefault();

  // get the text
let title = newToDoText.value;

// create a new li
let newLi = document.createElement('li');

// create a new input
let checkbox = document.createElement('input');

// set the input's type to checkbox
checkbox.type = "checkbox";

// set the title
newLi.textContent = title;

// attach the checkbox to the li
newLi.appendChild(checkbox);

// attach the li to the ul
toDoList.appendChild(newLi);

//empty the input
newToDoText.value = '';

//??checkpoint remove the value


// ??checkpoint unattach the checkbox to the li

}}}
);
}
