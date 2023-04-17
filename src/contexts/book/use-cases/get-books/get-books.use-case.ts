import { Book } from "../../domains/types"
import { IBookRepository } from "../../infrastructure"

export class GetBooksUseCase {
    constructor(private bookRepository: IBookRepository) { }

    async execute(): Promise<Book[]> {
        return this.bookRepository.getAllBooks()
    }
    async findbooksByTitle(title: string): Promise<Book[]> {
        return this.bookRepository.getBookByTitle(title)
    }
    async findbookById(id: string): Promise<Book> {
        return this.bookRepository.findbookById(id)
    }
    async deletebookById(id: string): Promise<Book> {
        return this.bookRepository.deletebookById(id)
    }

}
