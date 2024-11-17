import { BookService } from './../../services/book.service';
import { Component, OnInit } from '@angular/core';
import { BookModel } from '../book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrl: './book.component.css'
})
export class BookComponent implements OnInit{
  bookList: BookModel[] = [];

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.bookList = this.bookService.getBook();
  }
}
