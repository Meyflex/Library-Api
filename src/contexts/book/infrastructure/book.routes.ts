import { Router } from "express";
import { BookController } from "./controller";

export function bookRoutes(controller: BookController): Router {
    const router = Router();
    router.get("/", controller.getBooks.bind(controller));
    router.post("/", controller.postBook.bind(controller));
    router.get("/title/:title", controller.getBookByTitle.bind(controller));
    router.get("/id/:id", controller.getBookById.bind(controller));
    router.delete("/id/:id", controller.deleteBookById.bind(controller));
    router.put("/id/:id", controller.updateBookById.bind(controller));
    return router;
}