// функция для создания карточки
function buildTodoTemplate(todo) {
  const date = new Date(todo.date).toLocaleString()
  const statusTodo = todo.status == 'todo' ? 'selected' : ''
  const statusInProgress = todo.status == 'inProgress' ? 'selected' : ''
  const statusDone = todo.status == 'done' ? 'selected' : ''

  return `
  <div class="card">
  <div class="card-body">
    <h5 class="card-title">${todo.title}</h5>
    <div class="date">${todo.date}</div>
    <p class="card-text">${todo.content}</p>
    <div class="card-user">${todo.user}</div>
    <div class="card__footer">
      <select id="selectStatus" class="form-select form-select-sm" aria-label=".form-select-sm example" data-id="${todo.id}">
        <option value="todo" ${statusTodo}>Todo</option>
        <option value="inProgress" ${statusInProgress}>In progress</option>
        <option value="done" ${statusDone}>Done</option>
      </select>
      <button type="button" class="btn btn-primary">Edit</button>
      <button id="deleteCardElement" type="button" class="btn btn-danger"
        >Remove</button>
        </div>
      </div>
    </div>
  `
}

export { buildTodoTemplate }
