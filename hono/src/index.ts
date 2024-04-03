import { Hono } from 'hono'
import { getTodos } from './todos/todos.controller'

const app = new Hono()

app.get('/', (c) => {
  return c.json({message: "Hello world"})
})

app.get('/todos', getTodos)

export default app