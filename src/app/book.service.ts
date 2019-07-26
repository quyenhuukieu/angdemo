import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IBook } from './book';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private _baseUrlHeroku: string = "https://bookserviceapi.herokuapp.com";
  private _baseUrllocal: string = "http://localhost:8081";
  private _apiGreeting: string = "/api/book/greeting";
  private _apiGetBooks: string = "/api/book/findall";

  constructor(private http: HttpClient) { }

  private headerDictText = {
    'Content-Type': 'text/plain',
    'Accept': 'text/plain',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Content-Length, X-Requested-With'
  };

  private headerDictJson = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Content-Length, X-Requested-With'
  };

  private requestOptionsText = {
    headers: new HttpHeaders(this.headerDictText),
  };

  private requestOptionsJson = {
    headers: new HttpHeaders(this.headerDictJson),
  };

  getGreeting() {
    return this.http.get<string>(this._baseUrlHeroku + this._apiGreeting, this.requestOptionsText);
  }

  getAllBooks() {
    return this.http.get<IBook[]>(this._baseUrlHeroku + this._apiGetBooks, this.requestOptionsJson);
  }

}
