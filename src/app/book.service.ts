import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IBook } from './book';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private _baseUrl: string = "https://qkspringdemo.herokuapp.com";

  constructor(private http: HttpClient) { }

  getGreeting() {
    return this.http.get<string>(this._baseUrl);
  }

  getBooks() {
    return [
      {"id": 1, "title": "Harry Potter", "author": "J.K. Rowling"},
      {"id": 2, "title": "The Lord of The Rings", "author": "J.R.R. Tolkien"},
      {"id": 3, "title": "The Chronicles of Narnia", "author": "C.S. Lewis"}
    ];
  }

  // getBooks(): Observable<IBook[]> {
  //   return this.http.get<IBook[]>(this._baseUrl);
  // }
}
