import { Request, Response } from "express";
import { GetBooksUseCase } from "../../use-cases";
import { postBookUseCase } from "../../use-cases/get-books/post-book";

export class BookController {

    constructor(
        private readonly getBooksUseCase: GetBooksUseCase
        , private readonly postBookUseCase: postBookUseCase
    ) { }

    async getBooks(req: Request, res: Response) {
        const books = await this.getBooksUseCase.execute();
        res.status(200).json(books);
    }
    async postBook(req: Request, res: Response) {
        if (!req.body) {
            res.status(400).json({ message: "No body" });
            return;
        }else {
        const book = await this.postBookUseCase.execute(req.body);
        res.status(200).json(book);
        }
    }
    async getBookByTitle(req: Request, res: Response) {
        if (!req.params.title) {
            res.status(400).json({ message: "No title" });
            return;
        }else {
            try {
                const book = await this.getBooksUseCase.findbooksByTitle(req.params.title);
                res.status(200).json(book);
            }
            catch (error) {
                res.status(404).json({ message: "Book not found" });
            }
        }
       
    }
    async getBookById(req: Request, res: Response) {
        if (!req.params.id) {
            res.status(400).json({ message: "No id" });
            return;
        }else {
            try {
                const book = await this.getBooksUseCase.findbookById(req.params.id);
                res.status(200).json(book);
            }
            catch (error) {
                res.status(404).json({ message: "Book not found" });
            }
        }
       
    }
    async deleteBookById(req: Request, res: Response) {
        if (!req.params.id) {
            res.status(400).json({ message: "No id" });
            return;
        }else {
            try {
                const book = await this.getBooksUseCase.deletebookById(req.params.id);
                res.status(200).json(book);
            }
            catch (error) {
                res.status(404).json({ message: "Book not found" });
            }
        }
       
    }
    async updateBookById(req: Request, res: Response) {
        if (!req.params.id) {
            res.status(400).json({ message: "No id" });
            return;
        }else {
            try {
                const book = await this.getBooksUseCase.UpdatebookById(req.params.id);
                res.status(200).json(book);
            }
            catch (error) {
                res.status(404).json({ message: "Book not found" });
            }
        }
       
    }


}