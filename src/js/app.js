import { Todo } from './constructor'
import { render } from './render'
import { buildTodoTemplate } from './template'

// bootstrap import
import { Modal } from 'bootstrap'



// кнопка CONFIRM для передачи текста из модального окна с формой в саму карточку

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
const modalInstance = Modal.getOrCreateInstance(modalElement)
const deleteCardElement = document.querySelector('#deleteCardElement')


// Listeners
confirmCardContentElement.addEventListener('click', handleSubmitForm)
addCardElement.addEventListener('click', handleDeleteCard)



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
}


// change status
boxElement.addEventListener('change', handleChangeStatus)

function handleChangeStatus(event) {
  const { target } = event
  const { role, id } = target.dataset


  if (role == 'select') {

    data.forEach((item) => {
      if (item.status == 'todo') {
        target.value = 'todo'
      } else if (item.status == 'done') {
        target.value = 'done'
      } else if (item.status == 'inProgress') {
        target.value = 'inProgress'
      }
    })
  }
    render(data, addCardElement, colCardsInProgressElement, colCardsDoneElement)
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
