// конструктор
function Todo(title, content, user, id = crypto.randomUUID(), status = 'todo') {
  this.id = id
  this.date = new Date().toLocaleString()
  this.title = title
  this.content = content
  this.user = user
  this.status = status
}

export { Todo }
