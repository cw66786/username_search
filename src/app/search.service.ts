import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Root, User } from './users';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private userInput!: string;
  private baseUrl: string = 'https://api.github.com/search/users?q=';

  users: any = [];
  usersBehave$ = new BehaviorSubject(this.users);
  users$ = this.usersBehave$.asObservable();



  constructor(private http: HttpClient) { }

  getUserInput(inputtedSearch: string) {
    this.userInput = inputtedSearch
    console.log(inputtedSearch)

  }


  getResults(){
   return this.http.get<Root>(this.baseUrl + this.userInput);
  }


}
