import { Context } from "hono"
import TodosModel from "./todos.model"

const getTodos = async (c: Context) => {
   const todos = await TodosModel.findAll()
   return c.json({
      todos: todos
   }, 200)
}

const createTodo = async (c: Context) => {
   try {
      const body = await c.req.json()
      const {description, status} = body
   
      const todo = await TodosModel.create({
         status: status,
         description: description,
         created_time: new Date()
      })
   
      return c.json(todo)
   } catch (e: any) {
      return c.json({
         message: e.message
      }, 500)
   }
}

const updateTodo = async (c: Context) => {
   try {
      const body = await c.req.json()
      const {id, description, status} = body
      const todo = await TodosModel.findByPk(id)
      if (!todo) return c.json({
         message: "Todo tidak ditemukan"
      }, 404)

      await todo.update({
         description: description,
         status: status
      })
      return c.json(todo)
   } catch (e: any) {
      return c.json({
         message: e.message
      }, 500)
   }
}

const deleteTodo = async (c: Context) => {
   try {
      const body = await c.req.json()
      const {id} = body
      const todo = await TodosModel.findByPk(id)
      if (!todo) return c.json({
         message: "Todo tidak ditemukan"
      }, 404)

      await todo.destroy()

      return c.json(todo)
   } catch (e: any) {
      return c.json({
         message: e.message
      }, 500)
   }
}

export {
   getTodos, createTodo, updateTodo, deleteTodo
}