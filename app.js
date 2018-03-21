function onReady() {
  const toDos = [];
  const addToDoForm = document.getElementById('addToDoForm');
  let id = 0;
  const submitButton = document.getElementById('submitButton');


  function renderTheUI() {
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

  function createNewToDo() {
    const newToDoText = document.getElementById('newToDoText');
    const deleteButton = document.createElement('deleteButton');





    if (!newToDoText.value) { return; }

    toDos.push ({
      title: newToDoText.value,
      complete: false,
      id: id++
    });
    newToDoText.value = '';
  }

    function renderTheUI() {
      const toDoList = document.getElementById('toDoList');


      toDoList.textContent = '';

      toDos.forEach(function(toDo) {
        const newLi = document.createElement('li');
        const checkbox = document.createElement('input');
        const deleteButton = document.createElement('input');
        deleteButton.setAttribute("type", "button");
        deleteButton.setAttribute("value", "delete");

        checkbox.type = "checkbox";


        newLi.textContent = toDo.title;
        toDoList.appendChild(newLi);
        newLi.appendChild(checkbox);
        newLi.appendChild(deleteButton);

        deleteButton.addEventListener('click', event => {
          event.preventDefault();


          toDoList.removeChild(newLi)

          const toRemoveId = toDo.id;
          const filteredTodos = toDos.filter(toDo => toDo.id !== toRemoveId);
          todos = filteredTodos;

        });

      });
    }

    addToDoForm.addEventListener('submit', function(event) {
      event.preventDefault();
      createNewToDo();
      newToDoText = '';
      renderTheUI();
    });
    renderTheUI();

  }

window.onload = function() {
  onReady();
};
