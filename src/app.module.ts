import { Module } from '@nestjs/common';
import {
  AppController,
  BookController,
  AuthorController,
  GenreController,
} from './controllers';
import { DataServicesModule } from './services/data-services/data-services.module';
import { BookUseCasesModule } from './use-cases/book/book-use-cases.module';
import { AuthorUseCasesModule } from './use-cases/author/author-use-cases.module';
import { GenreUseCasesModule } from './use-cases/genre/genre-use-cases.module';

@Module({
  imports: [
    DataServicesModule,
    BookUseCasesModule,
    AuthorUseCasesModule,
    GenreUseCasesModule,
  ],
  controllers: [
    AppController,
    BookController,
    AuthorController,
    GenreController,
  ],
  providers: [],
})
export class AppModule {}
