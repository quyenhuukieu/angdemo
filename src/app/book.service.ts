import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IBook } from './book';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private _baseUrlHeroku: string = "https://qkspringdemo.herokuapp.com";
  private _baseUrllocal: string = "http://localhost:8081";
  private _apiGreeting: string = "/api/greeting";
  private _apiGetBooks: string = "/api/books";

  constructor(private http: HttpClient) { }

  private headerDict = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Content-Length, X-Requested-With'
  };

  private requestOptions = {
    headers: new HttpHeaders(this.headerDict),
  };

  getGreeting() {
    return this.http.get<string>(this._baseUrlHeroku + this._apiGreeting, this.requestOptions);
  }

  getAllBooks() {
    return this.http.get<IBook[]>(this._baseUrlHeroku + this._apiGetBooks, this.requestOptions);
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
