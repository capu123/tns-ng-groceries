import { User } from "../../shared/user/user";
import { UserService } from "../../shared/user/user.service";

import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";

import { Grocery } from "../../shared/grocery/grocery";
import { GroceryListService } from "../../shared/grocery/grocery-list.service";

@Component({
    selector: "list",
    //providers: [UserService],
    providers: [GroceryListService],
    templateUrl: "pages/list/list.html",
    styleUrls: ["pages/login/login-common.css", "pages/login/login.css"]
})
export class ListComponent implements OnInit {
  //groceryList: Array<Object> = [];
  groceryList: Array<Grocery> = [];

  constructor(private groceryListService: GroceryListService) {}

  ngOnInit() {
    /*
        this.groceryListService.load()
        .subscribe(loadedGroceries => {
        loadedGroceries.forEach((groceryObject) => {
            this.groceryList.unshift(groceryObject);
        });
        });
    */
    this.groceryList= this.groceryListService.load();
  }
}