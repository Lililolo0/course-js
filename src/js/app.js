import { Todo } from './constructor'
import { render } from './render'
import { renderCounters, buildTemplateTodo, buildTemplateProgress, buildTemplateDone } from './counter'

// bootstrap import
import { Modal } from 'bootstrap'

// variables
const confirmCardContentElement = document.querySelector('#confirmCardContent')
const inputTitleElement = document.querySelector('#inputTitleElement')
const inputContentElement = document.querySelector('#inputContentElement')
const addCardElement = document.querySelector('#cardsTodo')
const formElement = document.querySelector('#form')
const data = []
const selectUserElement = document.querySelector('#selectUser')
const colCardsInProgressElement = document.querySelector('#cardsInProgress')
const colCardsDoneElement = document.querySelector('#cardsDone')
const boxElement = document.querySelector('#box')
const buttondeleteAllCardsElement = document.querySelector('#deleteAllCards')

const counterTodoElement = document.querySelector('#counterTodo')
const counterInProgressElement = document.querySelector('#counterInProgress')
const counterDoneElement = document.querySelector('#counterDone')

// const modalInstance = Modal.getOrCreateInstance(modalEditElement)


// Listeners
confirmCardContentElement.addEventListener('click', handleSubmitForm)
boxElement.addEventListener('click', handleDeleteCard)
buttondeleteAllCardsElement.addEventListener('click', handleDeleteAllCards)



// handlers
// submit form
function handleSubmitForm(event) {
  event.preventDefault()

  const titleValue = inputTitleElement.value
  const contentValue = inputContentElement.value
  const userValue = selectUserElement.value
  const todo = new Todo(titleValue, contentValue, userValue)
  data.push(todo)  // в массив data закидываем конструктор todo
  render(data, addCardElement, colCardsInProgressElement, colCardsDoneElement)
  renderCounters(data, counterTodoElement, counterInProgressElement, counterDoneElement)

  // modalInstance.hide()
  formElement.reset()
}

// delete card
function handleDeleteCard(event) {

  let target = event.target
  if (target.tagName !== 'BUTTON') {
    return
  }
  target.closest('.card').remove();
  renderCounters(data, counterTodoElement, counterInProgressElement, counterDoneElement)
}

// change status
boxElement.addEventListener('change', handleChangeStatus)

function handleChangeStatus(event) {
  const { target } = event
  const { role, id } = target.dataset
  let countProgress = 0

  data.forEach((item) => {
    item.status == 'inProgress' ? countProgress++ : ''
  })

  if (role == 'select' && countProgress == 6 && target.value == 'inProgress') {
    alert('No more than 6 cases can be in this column')
    data.forEach((item) => {
      if (item.status == 'todo') {
        target.value = 'todo'
      }
      if (item.status == 'done') {
        target.value = 'done'
      }
    })
    return
  } else if (role == 'select') {
    data.forEach((item) => {
      if (item.id == id) {
        item.status = target.value
      }
    })
    render(data, addCardElement, colCardsInProgressElement, colCardsDoneElement)
    renderCounters(data, counterTodoElement, counterInProgressElement, counterDoneElement)

  }
}

// delete all done cards
function handleDeleteAllCards () {
  data.length = 0
  render(data, colCardsDoneElement)
}


// таймер
const timerElement = document.querySelector('#timer')

let counter = 0
let timer

function showTime() {
  timer = setInterval(() => {
    timerElement.innerHTML = counter
    counter++
  }, 1000)
}

showTime()

