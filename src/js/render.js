import { buildTodoTemplate } from "./template"

function render(data, todoColumn, progressColumn, doneColumn) {
  // переменные для трех колонок
  let todoTemplates = ''
  let inProgressTemplates = ''
  let doneTemplates = ''

  // перебираем массив карточек и закидываем в каждую item сам текст из шаблона
  data.forEach((item) => {
    const template = buildTodoTemplate(item)

    item.status == 'todo' ? todoTemplates += template : ''
    item.status == 'inProgress' ? inProgressTemplates += template : ''
    item.status == 'done' ? doneTemplates += template : ''
  })

  todoColumn.innerHTML = todoTemplates
  progressColumn.innerHTML = inProgressTemplates
  doneColumn.innerHTML = doneTemplates  // в колонки закидываем массив с карточками
}

export { render }
