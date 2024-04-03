import { Hono } from "hono"
import { createTodo, deleteTodo, getTodos, updateTodo } from './todos.controller'

const app = new Hono()

app.get('/todos', getTodos)
app.post('/todos', createTodo)
app.put('/todos', updateTodo)
app.delete('/todos', deleteTodo)

export default app;