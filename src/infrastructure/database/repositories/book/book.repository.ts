import { UUID } from "sequelize/types";
import { BookRaw, IBookRepository } from "../../../../contexts/book";
import { RelationalDatabase } from "../../database";
import { toBookRaw } from "./book.mapper";
import { v4 as uuidv4, v6 as uuidv6 } from 'uuid';

export class BookRepository implements IBookRepository {

    constructor(private readonly database: RelationalDatabase) { }


    async getAllBooks(): Promise<BookRaw[]> {
        const books = await this.database.client.book.findMany();
        return books.map(toBookRaw);
    }
    async postbook(book: BookRaw): Promise<BookRaw> {
        
        const book1 = await this.database.client.book.create({
            data :{
                id : uuidv4(),
                title: book.title,
                description: book.description,
            }
                
        });
        return toBookRaw(book1);
    }
    async getBookByTitle(title1: string): Promise<BookRaw[]> {
        const book = await this.database.client.book.findMany({
            where: {
                title: title1
            }
        });
        if (!book) {
            throw new Error(`Book with title '${title1}' not found`);
          }
          return book.map(toBookRaw);
        }

    async findbookById(id: string): Promise<BookRaw> {
        const book = await this.database.client.book.findUnique({
            where: {
                id: id
            }
        });
        if (!book) {
            throw new Error(`Book with id '${id}' not found`);
          }
          return toBookRaw(book);
        }
    async deletebookById(id: string): Promise<BookRaw> {
        const book = await this.database.client.book.delete({
            where: {
                id: id
            }
        });
        if (!book) {
            throw new Error(`Book with id '${id}' not found`);
          }
          return toBookRaw(book);
        }
    
}