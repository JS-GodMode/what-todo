const todos = [];

const todoInput = document.querySelector(".todo__text");
const btnAdd = document.querySelector(".todo__add__button");
const todoList = document.querySelector(".todo__list");

btnAdd.addEventListener("click", function (e) {
  e.preventDefault();
  console.log(todoInput.value);

  todos.push({ id: Math.random() * 20, task: todoInput.value });
  console.log(todos);
  generateTaskView({ id: Math.random() * 20, text: todoInput.value });
  todoInput.value = "";
});

const generateTaskView = (task) => {
  let html = `
        <ul
            class="list-group list-group-horizontal rounded-0 bg-transparent"
            >
            <li
                class="list-group-item d-flex align-items-center ps-0 pe-3 py-1 rounded-0 border-0 bg-transparent"
            >
                <div class="form-check">
                <input
                    class="form-check-input me-0"
                    type="checkbox"
                    value=""
                    id="flexCheckChecked1"
                    aria-label="..."
                    checked
                />
                </div>
            </li>
            <li
                class="list-group-item px-3 py-1 d-flex align-items-center flex-grow-1 border-0 bg-transparent"
            >
                <p class="lead fw-normal mb-0">
                ${task.text}
                </p>
            </li>
            <li
                class="list-group-item ps-3 pe-0 py-1 rounded-0 border-0 bg-transparent"
            >
                
            </li>
        </ul>
    `;
  todoList.insertAdjacentHTML("afterend", html);
};
