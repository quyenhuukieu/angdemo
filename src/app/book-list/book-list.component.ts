import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  public books = [];
  public greeting: string;

  constructor(private _bookService: BookService) { }

  ngOnInit() {
    // this.books = this._bookService.getBooks();
    this._bookService.getGreeting()
      .subscribe(data => this.greeting = data);
  }

}
