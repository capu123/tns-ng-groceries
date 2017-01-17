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

  groceryId: number = 20;

  constructor(private http: Http) {
      /*
      this.groceryList.push({ id: "12", name: "Chicken" });
      this.groceryList.push({ id: "13", name: "Salmon" });
      this.groceryList.push({ id: "14", name: "Mini-bites" });
      this.groceryList.push({ id: "15", name: "Custard" });
      this.groceryList.push({ id: "16", name: "Cream" }); */ 
  }

  load() {
     setTimeout(()=> {
        this.groceryList.push({ id: "12", name: "Chicken" });
        this.groceryList.push({ id: "0", name: "Apples" });
        this.groceryList.push({ id: "1", name: "Bananas" });
        this.groceryList.push({ id: "2", name: "Oranges" });
        this.groceryList.push({ id: "4", name: "Mangoes" });
        this.groceryList.push({ id: "5", name: "Ham" });
        this.groceryList.push({ id: "6", name: "Cake" });
        this.groceryList.push({ id: "7", name: "Sugar" });
        this.groceryList.push({ id: "8", name: "Peaches" });
        this.groceryList.push({ id: "9", name: "Pitta" });
        this.groceryList.push({ id: "10", name: "Limes" });
        this.groceryList.push({ id: "11", name: "Kievs" });
     }, 3000);
      return this.groceryList;
  }

  handleErrors(error: Response) {
    console.log(JSON.stringify(error.json()));
    return Observable.throw(error);
  }


  add(name: string){
      let j= ++this.groceryId;
      this.groceryList.unshift({ id: j.toString(), name: name});
      
      let lastObj= (this.groceryList[0]);
      console.log(lastObj.id + " " + lastObj.name);
  }
  /*
  add(name: string) {
    let headers = new Headers();
    headers.append("Authorization", "Bearer " + Config.token);
    headers.append("Content-Type", "application/json");

    return this.http.post(
      Config.apiUrl + "Groceries",
      JSON.stringify({ Name: name }),
      { headers: headers }
  )
  .map(res => res.json())
  .map(data => {
    return new Grocery(data.Result.Id, name);
  })
  .catch(this.handleErrors);
}

  */

}