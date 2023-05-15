// counter
function renderCounters (collection, todoCounter, inProgressCounter, doneCounter) {
  let todo = 0
  let inProgress = 0
  let done = 0

  collection.forEach((item) => {
    item.status == 'todo' ? todo++ : ''
    item.status == 'inProgress' ? inProgress++ : ''
    item.status == 'done' ? done++ : ''
  })

  const templateTodo = buildTemplateTodo(todo)
  const templateProgress = buildTemplateProgress(inProgress)
  const templateDone = buildTemplateDone(done)

  todoCounter.innerHTML = templateTodo
  inProgressCounter.innerHTML = templateProgress
  doneCounter.innerHTML = templateDone
}

// counter template
function buildTemplateTodo(countTodo) {
  return `
    <span>${countTodo}</span>
  `
}
function buildTemplateProgress(countProgress) {
  return `
    <span>${countProgress}</span>
  `
}
function buildTemplateDone(countDone) {
  return `
    <span>${countDone}</span>
  `
}

export { renderCounters, buildTemplateTodo, buildTemplateProgress, buildTemplateDone }
