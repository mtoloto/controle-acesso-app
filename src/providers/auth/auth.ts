import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {

  constructor(public http: HttpClient) { }

  hasToken() {
    var token = localStorage.getItem("token");
    if (token == "")
      return false;
    if (token == null)
      return false;
    return true;
  }

  saveToken(token) {
    localStorage.setItem("token", token);
  }

  

}
