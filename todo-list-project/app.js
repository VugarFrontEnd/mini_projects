const body = document.body;
const search = document.querySelector('input[type="search"]');
const addTodoForm = document.querySelector(".todo-form");
const addTodoWindow = document.querySelector(".addTodoWindow");

body.addEventListener("click", (e) => {
  const target = e.target;

  if (target.matches(".fa-trash")) {
    target.parentElement.style.transformOrigin = "left";
    target.parentElement.style.transform = "scaleX(0)";
    setTimeout(() => {
      target.parentElement.remove();
    }, 500);
  }

  if (target.matches(".fa-pen-to-square")) {
    addTodoWindow.style.transform = "scale(1)";
    document.querySelector("div.add-todo p").style.display = "none";
  }

  if (target.matches(".fa-xmark") || target.matches(".addTodoWindow")) {
    addTodoWindow.style.transform = "scale(0)";
  }
});

search.addEventListener("keyup", (e) => {
  const tasks = document.querySelectorAll("li");
  const searchInputValue = e.target.value.trim().toLowerCase();
  Array.from(tasks)
    .filter((task) => {
      return !task.textContent.toLowerCase().includes(searchInputValue);
    })
    .forEach((task) => {
      task.style.display = "none";
    });
  Array.from(tasks)
    .filter((task) => {
      return task.textContent.toLowerCase().includes(searchInputValue);
    })
    .forEach((task) => {
      task.style.display = "flex";
    });
});

addTodoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const textInputValue = document.querySelector("#todoText").value.trim();
  const ul = document.querySelector("div.todos > ul");

  let html = `
  <li>
  <span>${textInputValue}</span>
  <i class="fa-solid fa-trash"></i>
  </li>
  `;

  addTodoWindow.style.transform = "scale(0)";
  ul.innerHTML += html;
  e.target.reset();
});
