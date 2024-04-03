import { Hono } from 'hono'
import { createTodo, deleteTodo, getTodos, updateTodo } from './todos/todos.controller'

const app = new Hono()

app.get('/', (c) => c.text("Hello from bun todos api"))
app.get('/todos', getTodos)
app.post('/todos', createTodo)
app.put('/todos', updateTodo)
app.delete('/todos', deleteTodo)

export default {
  port: 5000,
  fetch: app.fetch
}