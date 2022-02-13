const input = document.getElementById("input");
const form = document.getElementById("form");
const list = document.getElementById("list");
const item = document.createElement("li");
const emptyWarning = document.createElement("p");

//Function For Adding a Task
const addTodo = (value) => {
  item.innerText = value;
  list.appendChild(item);
  input.value = "";

  //For the Delete Button
  const deleteTodo = document.createElement("i");
  deleteTodo.classList.add("fa-solid");
  deleteTodo.classList.add("fa-trash");
  item.appendChild(deleteTodo);

  deleteTodo.addEventListener("click", (e) => {
    item.remove();
  });
};

// For Adding a Task
form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (input.value != "") {
    addTodo(input.value);
  } else if (input.value == "") {
    input.style.border = "3px solid #ee4141";

    //For Warning Display
    emptyWarning.innerText = "Sorry, You've to do something ;)";
    input.insertAdjacentElement("afterend", emptyWarning);
  }
});

// For Restoring Border Color From Red to Default

input.onclick = () => {
  input.style.border = "1px solid black";
  emptyWarning.innerText = "";
};

item.onclick = () => {

  item.classList.toggle("done");
};
