import {describe, expect, it} from "bun:test"
import app from "./src"

describe("My first test", () => {
   it("Should return 200", async () => {
      const req = new Request("http://localhost:3000/")
      const res = await app.fetch(req)
      expect(res.status).toBe(200)
   })
})