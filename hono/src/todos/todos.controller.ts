import { Context } from "hono"
import TodosModel from "./todos.model"

const getTodos = async (c: Context) => {
   const todos = await TodosModel.findAll()
   return c.json({
      todos: todos
   }, 200)
}

export {
   getTodos,
}