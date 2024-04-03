import {describe, expect, it} from "bun:test"
import app from "./src"

describe("My first test", () => {
   it("Should return 200", async () => {
      const req = new Request("http://localhost:3000/")
      const res = await app.fetch(req)
      expect(res.status).toBe(200)
   })
})

describe("Todos resources", () => {
   const baseURL = "http://localhost:3000/todos"
   
   it("GET: status code 200", async () => {
      const req = new Request(baseURL)
      const res = await app.fetch(req)
      expect(res.status).toBe(200)
   })
   
   it("GET: response body is json", async () => {
      const req = new Request(baseURL)
      const res = await app.fetch(req)
      const result = await res.json()
      expect(result).toBeObject()
   })

   it("GET: has property `todos`", async () => {
      const req = new Request(baseURL)
      const res = await app.fetch(req)
      const result = await res.json()
      expect(result.hasOwnProperty('todos')).toBeTrue()
   })

   it("GET: property todos is array", async () => {
      const req = new Request(baseURL)
      const res = await app.fetch(req)
      const result = await res.json()
      expect(result.todos).toBeArray()
   })
})