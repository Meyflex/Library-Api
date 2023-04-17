import { Book } from "../domains/types";

export type BookRaw = Book;

export interface IBookRepository {
    getAllBooks(): Promise<BookRaw[]>;
    postbook(book: BookRaw): Promise<BookRaw>;
    getBookByTitle(title1: string): Promise<BookRaw[]>;
    findbookById(id: string): Promise<BookRaw>;
    deletebookById(id: string): Promise<BookRaw>;
    
}