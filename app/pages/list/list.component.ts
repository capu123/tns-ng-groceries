import { User } from "../../shared/user/user";
import { UserService } from "../../shared/user/user.service";

import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";

import { Grocery } from "../../shared/grocery/grocery";
import { GroceryListService } from "../../shared/grocery/grocery-list.service";

import { TextField } from "ui/text-field";
//import { Label } from "ui/label";
//import { Color } from "color";
import dialogs = require("ui/dialogs");

import * as SocialShare from "nativescript-social-share";

@Component({
    selector: "list",
    //providers: [UserService],
    providers: [GroceryListService],
    templateUrl: "pages/list/list.html",
    styleUrls: ["pages/login/login-common.css", "pages/login/login.css", "pages/list/list-common.css"]
})
export class ListComponent implements OnInit {
  //groceryList: Array<Object> = [];
  groceryList: Array<Grocery> = [];
  grocery = "";
  @ViewChild("groceryTextField") groceryTextField: ElementRef;
  @ViewChild("statusbar") statusbar: ElementRef; 

  isLoading = false;
  listLoaded = false;

  constructor(private groceryListService: GroceryListService) {}

  ngOnInit() {
    /*
        this.isLoading = true;
        this.groceryListService.load()
            .subscribe(loadedGroceries => {
            loadedGroceries.forEach((groceryObject) => {
                this.groceryList.unshift(groceryObject);
            });
        this.isLoading = false;
    });
    */

    this.isLoading = true;
    this.groceryList= this.groceryListService.load();
    this.isLoading = false;
    this.listLoaded = true;
  }

  add() {
  if (this.grocery.trim() === "") {
    alert("Enter a grocery item");
    return;
  }
 
  // Dismiss the keyboard
  let textField = <TextField>this.groceryTextField.nativeElement;
  textField.dismissSoftInput();

  this.groceryListService.add(this.grocery);
  this.grocery = "";
  }
  /*
  add() {
  if (this.grocery.trim() === "") {
    alert("Enter a grocery item");
    return;
  }

  // Dismiss the keyboard
  let textField = <TextField>this.groceryTextField.nativeElement;
  textField.dismissSoftInput();

  this.groceryListService.add(this.grocery)
    .subscribe(
      groceryObject => {
        this.groceryList.unshift(groceryObject);
        this.grocery = "";
      },
      () => {
        alert({
          message: "An error occurred while adding an item to your list.",
          okButtonText: "OK"
        });
        this.grocery = "";
      }
    )
}
  */
   
   share() {
        let list = [];
        for (let i = 0, size = this.groceryList.length; i < size ; i++) {
            list.push(this.groceryList[i].name);
        }
        let listString = list.join(", ").trim();
        SocialShare.shareText(listString);
    }

   delete(item: Grocery){
       var dialogs = require("ui/dialogs");
       var gListService = this.groceryListService;
            dialogs.action({
                message: "Do you want to delete "+ item.name +"?" ,
                cancelButtonText: "Cancel text",
                actions: ["Yes", "Not now"]
            }).then(
                function (result) {
                    if (result === "Yes"){
                        console.log("User pressed---> " + result);
                        gListService.delete(item.id); 
                    }  
                }
            );
       //this.groceryList = this.groceryListService.delete(item.id);   
   }

}