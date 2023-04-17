import { Router } from "express"
import { BookRepository, RelationalDatabase } from "../../../infrastructure/database"
import { GetBooksUseCase, postBookUseCase } from "../use-cases"
import { bookRoutes } from "./book.routes"
import { BookController } from "./controller"

export type BookExternalDependencies = {
    database: RelationalDatabase
}

export const bookInjector = (externalDependencies: BookExternalDependencies): Router => {
    const bookRepository = new BookRepository(externalDependencies.database)

    const getBooksUseCase = new GetBooksUseCase(bookRepository)
    const postBookUseCase1 = new postBookUseCase(bookRepository)

    const bookController = new BookController(
        getBooksUseCase,postBookUseCase1 
    
    )


    return bookRoutes(bookController)
}
