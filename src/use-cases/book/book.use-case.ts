import { Injectable } from '@nestjs/common';
import { Book } from '../../core/entities';
import { IDataServices } from '../../core/abstracts';

@Injectable()
export class BookUseCases {
  constructor(
    private dataServices: IDataServices,
  ) {}

  getAllBooks(): Promise<Book[]> {
    return this.dataServices.books.getAll();
  }

  getBookById(id: string): Promise<Book> {
    return this.dataServices.books.get(id);
  }

  async createBook(book: Book): Promise<Book> {
    try {
      // call to our dependencies
      const createdBook = await this.dataServices.books.create(book);

      return createdBook;
    } catch (error) {
      throw error;
    }
  }

  updateBook(bookId: string, book: Book): Promise<Book> {
    return this.dataServices.books.update(bookId, book);
  }
}
