import { Injectable } from '@nestjs/common';
import { Book } from '../../core/entities';
import { CreateBookDto, UpdateBookDto } from '../../core/dtos';

@Injectable()
export class BookFactoryService {
  createNewBook(createBookDto: CreateBookDto) {
    const newBook = new Book();
    newBook.title = createBookDto.title;
    newBook.authorId = createBookDto.authorId;
    newBook.genreId = createBookDto.genreId;
    newBook.publishDate = createBookDto.publishDate;

    return newBook;
  }

  updateBook(updateBookDto: UpdateBookDto) {
    const newBook = new Book();
    newBook.title = updateBookDto.title;
    newBook.authorId = updateBookDto.authorId;
    newBook.genreId = updateBookDto.genreId;
    newBook.publishDate = updateBookDto.publishDate;

    return newBook;
  }
}
