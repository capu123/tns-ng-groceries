/*
import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";

import { User } from "./user";
import { Config } from "../config";

@Injectable()
export class UserService {
  constructor(private http: Http) {}

  register(user: User) {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");

    return this.http.post(
      Config.apiUrl + "Users",
      JSON.stringify({
        Username: user.email,
        Email: user.email,
        Password: user.password
      }),
      { headers: headers }
    )
    .catch(this.handleErrors);
  }

  signUp() {
    this.userService.register(this.user)
        .subscribe(
        () => {
            alert("Your account was successfully created.");
            this.toggleDisplay();
        },
        () => alert("Unfortunately we were unable to create your account.")
        );
    }

    login(user: User) {
            let headers = new Headers();
            headers.append("Content-Type", "application/json");

            return this.http.post(
                Config.apiUrl + "oauth/token",
                JSON.stringify({
                username: user.email,
                password: user.password,
                grant_type: "password"
                }),
                { headers: headers }
            )
            .map(response => response.json())
            .do(data => {
                Config.token = data.Result.access_token;
            })
            .catch(this.handleErrors);
        }

  handleErrors(error: Response) {
    console.log(JSON.stringify(error.json()));
    return Observable.throw(error);
  }
}
*/

import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";

import { User } from "./user";

@Injectable()
export class UserService {
    private user: User;

    constructor(){
        this.user= new User();
        this.user.email= "sai@yahoo.com";
        this.user.password="test1234";
    }

    register(user: User) {
        return this.user;
    }

    signUp() {
    }

    login(user: User) {
        return this.user;
    }


    getUser() {
        return this.user;
    }
}
