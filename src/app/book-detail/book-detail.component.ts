import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

  public books = [];

  constructor(private _bookService: BookService) { }

  ngOnInit() {
    this._bookService.getAllBooks()
      .subscribe(data => this.books = data);
  }

}
