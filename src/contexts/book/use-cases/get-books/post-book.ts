import { Json } from "sequelize/types/lib/utils"
import { Book } from "../../domains/types"
import { BookRaw, IBookRepository } from "../../infrastructure"

export class postBookUseCase {
    constructor(private bookRepository: IBookRepository) { }

    async execute(book: BookRaw): Promise<BookRaw> {
        return this.bookRepository.postbook(book)
    }
}
