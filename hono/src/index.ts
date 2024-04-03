import { Hono } from 'hono'
import TodosRouter from './todos/todos.router'

const app = new Hono()

app.get('/', (c) => c.text("Hello from bun todos api"))
app.route('/todos', TodosRouter)

export default {
  port: 5000,
  fetch: app.fetch
}