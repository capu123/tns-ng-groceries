import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";
import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/map";

//import { Config } from "../config";
import { Grocery } from "./grocery";

/*
@Injectable()
export class GroceryListService {
  constructor(private http: Http) {}

  load() {
    let headers = new Headers();
    headers.append("Authorization", "Bearer " + Config.token);

    return this.http.get(Config.apiUrl + "Groceries", {
      headers: headers
    })
    .map(res => res.json())
    .map(data => {
      let groceryList = [];
      data.Result.forEach((grocery) => {
        groceryList.push(new Grocery(grocery.Id, grocery.Name));
      });
      return groceryList;
    })
    .catch(this.handleErrors);
  }

  handleErrors(error: Response) {
    console.log(JSON.stringify(error.json()));
    return Observable.throw(error);
  }
}
*/


@Injectable()
export class GroceryListService {
  groceryList: Array<Grocery> = [];

  constructor(private http: Http) {
      this.groceryList.push({ id: "0", name: "Apples" });
      this.groceryList.push({ id: "1", name: "Bananas" });
      this.groceryList.push({ id: "2", name: "Oranges" });
      this.groceryList.push({ id: "3", name: "Mangoes" });
  }

  load() {
      return this.groceryList;
  }

  handleErrors(error: Response) {
    console.log(JSON.stringify(error.json()));
    return Observable.throw(error);
  }
}