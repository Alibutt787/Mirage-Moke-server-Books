import { Server } from "miragejs"
import books from './books.json'

export function makeServer() {
  let server = new Server({

    routes() {
      this.namespace = "api"
     this.get("/books", () => {
        return books;
      })
      this.namespace = "api"
      this.post("/add", (schema, req) => {
         console.log(req);
         const newbook =JSON.parse(req.requestBody);
         books.push(newbook);
       })
    },
  })

  return server
}