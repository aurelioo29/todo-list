const inputBox = document.getElementById("input-box");
const listTodo = document.getElementById("listTodo");

function saveDatabase() {
  localStorage.setItem("listTodo", listTodo.innerHTML);
}

function loadDatabase() {
  listTodo.innerHTML = localStorage.getItem("listTodo");
}

function addButton() {
  if (inputBox.value === "") {
    alert("You must type something to add a task!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listTodo.appendChild(li);

    let span = document.createElement("span");
    span.innerHTML = "\u00D7";
    li.appendChild(span);
  }
  inputBox.value = "";
  saveDatabase();
}

listTodo.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveDatabase();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveDatabase();
    }
  },
  false
);

loadDatabase();
