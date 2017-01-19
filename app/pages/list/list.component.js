"use strict";
var core_1 = require("@angular/core");
var grocery_list_service_1 = require("../../shared/grocery/grocery-list.service");
var SocialShare = require("nativescript-social-share");
var ListComponent = (function () {
    function ListComponent(groceryListService) {
        this.groceryListService = groceryListService;
        //groceryList: Array<Object> = [];
        this.groceryList = [];
        this.grocery = "";
        this.isLoading = false;
        this.listLoaded = false;
    }
    ListComponent.prototype.ngOnInit = function () {
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
        this.groceryList = this.groceryListService.load();
        this.isLoading = false;
        this.listLoaded = true;
    };
    ListComponent.prototype.add = function () {
        if (this.grocery.trim() === "") {
            alert("Enter a grocery item");
            return;
        }
        // Dismiss the keyboard
        var textField = this.groceryTextField.nativeElement;
        textField.dismissSoftInput();
        this.groceryListService.add(this.grocery);
        this.grocery = "";
    };
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
    ListComponent.prototype.share = function () {
        var list = [];
        for (var i = 0, size = this.groceryList.length; i < size; i++) {
            list.push(this.groceryList[i].name);
        }
        var listString = list.join(", ").trim();
        SocialShare.shareText(listString);
    };
    ListComponent.prototype.delete = function (item) {
        var dialogs = require("ui/dialogs");
        var gListService = this.groceryListService;
        dialogs.action({
            message: "Do you want to delete " + item.name + "?",
            cancelButtonText: "Cancel text",
            actions: ["Yes", "Not now"]
        }).then(function (result) {
            if (result === "Yes") {
                console.log("User pressed---> " + result);
                gListService.delete(item.id);
            }
        });
        //this.groceryList = this.groceryListService.delete(item.id);   
    };
    __decorate([
        core_1.ViewChild("groceryTextField"), 
        __metadata('design:type', core_1.ElementRef)
    ], ListComponent.prototype, "groceryTextField", void 0);
    __decorate([
        core_1.ViewChild("statusbar"), 
        __metadata('design:type', core_1.ElementRef)
    ], ListComponent.prototype, "statusbar", void 0);
    ListComponent = __decorate([
        core_1.Component({
            selector: "list",
            //providers: [UserService],
            providers: [grocery_list_service_1.GroceryListService],
            templateUrl: "pages/list/list.html",
            styleUrls: ["pages/login/login-common.css", "pages/login/login.css", "pages/list/list-common.css"]
        }), 
        __metadata('design:paramtypes', [grocery_list_service_1.GroceryListService])
    ], ListComponent);
    return ListComponent;
}());
exports.ListComponent = ListComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsaXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBR0EscUJBQXlELGVBQWUsQ0FBQyxDQUFBO0FBR3pFLHFDQUFtQywyQ0FBMkMsQ0FBQyxDQUFBO0FBTy9FLElBQVksV0FBVyxXQUFNLDJCQUEyQixDQUFDLENBQUE7QUFTekQ7SUFVRSx1QkFBb0Isa0JBQXNDO1FBQXRDLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7UUFUMUQsa0NBQWtDO1FBQ2xDLGdCQUFXLEdBQW1CLEVBQUUsQ0FBQztRQUNqQyxZQUFPLEdBQUcsRUFBRSxDQUFDO1FBSWIsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUNsQixlQUFVLEdBQUcsS0FBSyxDQUFDO0lBRTBDLENBQUM7SUFFOUQsZ0NBQVEsR0FBUjtRQUNFOzs7Ozs7Ozs7VUFTRTtRQUVGLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxXQUFXLEdBQUUsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksRUFBRSxDQUFDO1FBQ2pELElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO0lBQ3pCLENBQUM7SUFFRCwyQkFBRyxHQUFIO1FBQ0EsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQy9CLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1lBQzlCLE1BQU0sQ0FBQztRQUNULENBQUM7UUFFRCx1QkFBdUI7UUFDdkIsSUFBSSxTQUFTLEdBQWMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGFBQWEsQ0FBQztRQUMvRCxTQUFTLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUU3QixJQUFJLENBQUMsa0JBQWtCLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUMxQyxJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztJQUNsQixDQUFDO0lBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O01BMEJFO0lBRUQsNkJBQUssR0FBTDtRQUNLLElBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUNkLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxJQUFJLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLElBQUksRUFBRyxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQzdELElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QyxDQUFDO1FBQ0QsSUFBSSxVQUFVLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN4QyxXQUFXLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFFRiw4QkFBTSxHQUFOLFVBQU8sSUFBYTtRQUNoQixJQUFJLE9BQU8sR0FBRyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDcEMsSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDO1FBQ3RDLE9BQU8sQ0FBQyxNQUFNLENBQUM7WUFDWCxPQUFPLEVBQUUsd0JBQXdCLEdBQUUsSUFBSSxDQUFDLElBQUksR0FBRSxHQUFHO1lBQ2pELGdCQUFnQixFQUFFLGFBQWE7WUFDL0IsT0FBTyxFQUFFLENBQUMsS0FBSyxFQUFFLFNBQVMsQ0FBQztTQUM5QixDQUFDLENBQUMsSUFBSSxDQUNILFVBQVUsTUFBTTtZQUNaLEVBQUUsQ0FBQyxDQUFDLE1BQU0sS0FBSyxLQUFLLENBQUMsQ0FBQSxDQUFDO2dCQUNsQixPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixHQUFHLE1BQU0sQ0FBQyxDQUFDO2dCQUMxQyxZQUFZLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNqQyxDQUFDO1FBQ0wsQ0FBQyxDQUNKLENBQUM7UUFDUCxnRUFBZ0U7SUFDcEUsQ0FBQztJQTVGRjtRQUFDLGdCQUFTLENBQUMsa0JBQWtCLENBQUM7OzJEQUFBO0lBQzlCO1FBQUMsZ0JBQVMsQ0FBQyxXQUFXLENBQUM7O29EQUFBO0lBWnpCO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNO1lBQ2hCLDJCQUEyQjtZQUMzQixTQUFTLEVBQUUsQ0FBQyx5Q0FBa0IsQ0FBQztZQUMvQixXQUFXLEVBQUUsc0JBQXNCO1lBQ25DLFNBQVMsRUFBRSxDQUFDLDhCQUE4QixFQUFFLHVCQUF1QixFQUFFLDRCQUE0QixDQUFDO1NBQ3JHLENBQUM7O3FCQUFBO0lBbUdGLG9CQUFDO0FBQUQsQ0FBQyxBQWxHRCxJQWtHQztBQWxHWSxxQkFBYSxnQkFrR3pCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBVc2VyIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC91c2VyL3VzZXJcIjtcbmltcG9ydCB7IFVzZXJTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC91c2VyL3VzZXIuc2VydmljZVwiO1xuXG5pbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIE9uSW5pdCwgVmlld0NoaWxkIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuaW1wb3J0IHsgR3JvY2VyeSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvZ3JvY2VyeS9ncm9jZXJ5XCI7XG5pbXBvcnQgeyBHcm9jZXJ5TGlzdFNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL2dyb2NlcnkvZ3JvY2VyeS1saXN0LnNlcnZpY2VcIjtcblxuaW1wb3J0IHsgVGV4dEZpZWxkIH0gZnJvbSBcInVpL3RleHQtZmllbGRcIjtcbi8vaW1wb3J0IHsgTGFiZWwgfSBmcm9tIFwidWkvbGFiZWxcIjtcbi8vaW1wb3J0IHsgQ29sb3IgfSBmcm9tIFwiY29sb3JcIjtcbmltcG9ydCBkaWFsb2dzID0gcmVxdWlyZShcInVpL2RpYWxvZ3NcIik7XG5cbmltcG9ydCAqIGFzIFNvY2lhbFNoYXJlIGZyb20gXCJuYXRpdmVzY3JpcHQtc29jaWFsLXNoYXJlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcImxpc3RcIixcbiAgICAvL3Byb3ZpZGVyczogW1VzZXJTZXJ2aWNlXSxcbiAgICBwcm92aWRlcnM6IFtHcm9jZXJ5TGlzdFNlcnZpY2VdLFxuICAgIHRlbXBsYXRlVXJsOiBcInBhZ2VzL2xpc3QvbGlzdC5odG1sXCIsXG4gICAgc3R5bGVVcmxzOiBbXCJwYWdlcy9sb2dpbi9sb2dpbi1jb21tb24uY3NzXCIsIFwicGFnZXMvbG9naW4vbG9naW4uY3NzXCIsIFwicGFnZXMvbGlzdC9saXN0LWNvbW1vbi5jc3NcIl1cbn0pXG5leHBvcnQgY2xhc3MgTGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIC8vZ3JvY2VyeUxpc3Q6IEFycmF5PE9iamVjdD4gPSBbXTtcbiAgZ3JvY2VyeUxpc3Q6IEFycmF5PEdyb2Nlcnk+ID0gW107XG4gIGdyb2NlcnkgPSBcIlwiO1xuICBAVmlld0NoaWxkKFwiZ3JvY2VyeVRleHRGaWVsZFwiKSBncm9jZXJ5VGV4dEZpZWxkOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKFwic3RhdHVzYmFyXCIpIHN0YXR1c2JhcjogRWxlbWVudFJlZjsgXG5cbiAgaXNMb2FkaW5nID0gZmFsc2U7XG4gIGxpc3RMb2FkZWQgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGdyb2NlcnlMaXN0U2VydmljZTogR3JvY2VyeUxpc3RTZXJ2aWNlKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIC8qXG4gICAgICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5ncm9jZXJ5TGlzdFNlcnZpY2UubG9hZCgpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKGxvYWRlZEdyb2NlcmllcyA9PiB7XG4gICAgICAgICAgICBsb2FkZWRHcm9jZXJpZXMuZm9yRWFjaCgoZ3JvY2VyeU9iamVjdCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuZ3JvY2VyeUxpc3QudW5zaGlmdChncm9jZXJ5T2JqZWN0KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgIH0pO1xuICAgICovXG5cbiAgICB0aGlzLmlzTG9hZGluZyA9IHRydWU7XG4gICAgdGhpcy5ncm9jZXJ5TGlzdD0gdGhpcy5ncm9jZXJ5TGlzdFNlcnZpY2UubG9hZCgpO1xuICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgdGhpcy5saXN0TG9hZGVkID0gdHJ1ZTtcbiAgfVxuXG4gIGFkZCgpIHtcbiAgaWYgKHRoaXMuZ3JvY2VyeS50cmltKCkgPT09IFwiXCIpIHtcbiAgICBhbGVydChcIkVudGVyIGEgZ3JvY2VyeSBpdGVtXCIpO1xuICAgIHJldHVybjtcbiAgfVxuIFxuICAvLyBEaXNtaXNzIHRoZSBrZXlib2FyZFxuICBsZXQgdGV4dEZpZWxkID0gPFRleHRGaWVsZD50aGlzLmdyb2NlcnlUZXh0RmllbGQubmF0aXZlRWxlbWVudDtcbiAgdGV4dEZpZWxkLmRpc21pc3NTb2Z0SW5wdXQoKTtcblxuICB0aGlzLmdyb2NlcnlMaXN0U2VydmljZS5hZGQodGhpcy5ncm9jZXJ5KTtcbiAgdGhpcy5ncm9jZXJ5ID0gXCJcIjtcbiAgfVxuICAvKlxuICBhZGQoKSB7XG4gIGlmICh0aGlzLmdyb2NlcnkudHJpbSgpID09PSBcIlwiKSB7XG4gICAgYWxlcnQoXCJFbnRlciBhIGdyb2NlcnkgaXRlbVwiKTtcbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBEaXNtaXNzIHRoZSBrZXlib2FyZFxuICBsZXQgdGV4dEZpZWxkID0gPFRleHRGaWVsZD50aGlzLmdyb2NlcnlUZXh0RmllbGQubmF0aXZlRWxlbWVudDtcbiAgdGV4dEZpZWxkLmRpc21pc3NTb2Z0SW5wdXQoKTtcblxuICB0aGlzLmdyb2NlcnlMaXN0U2VydmljZS5hZGQodGhpcy5ncm9jZXJ5KVxuICAgIC5zdWJzY3JpYmUoXG4gICAgICBncm9jZXJ5T2JqZWN0ID0+IHtcbiAgICAgICAgdGhpcy5ncm9jZXJ5TGlzdC51bnNoaWZ0KGdyb2NlcnlPYmplY3QpO1xuICAgICAgICB0aGlzLmdyb2NlcnkgPSBcIlwiO1xuICAgICAgfSxcbiAgICAgICgpID0+IHtcbiAgICAgICAgYWxlcnQoe1xuICAgICAgICAgIG1lc3NhZ2U6IFwiQW4gZXJyb3Igb2NjdXJyZWQgd2hpbGUgYWRkaW5nIGFuIGl0ZW0gdG8geW91ciBsaXN0LlwiLFxuICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJPS1wiXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmdyb2NlcnkgPSBcIlwiO1xuICAgICAgfVxuICAgIClcbn1cbiAgKi9cbiAgIFxuICAgc2hhcmUoKSB7XG4gICAgICAgIGxldCBsaXN0ID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwLCBzaXplID0gdGhpcy5ncm9jZXJ5TGlzdC5sZW5ndGg7IGkgPCBzaXplIDsgaSsrKSB7XG4gICAgICAgICAgICBsaXN0LnB1c2godGhpcy5ncm9jZXJ5TGlzdFtpXS5uYW1lKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgbGlzdFN0cmluZyA9IGxpc3Quam9pbihcIiwgXCIpLnRyaW0oKTtcbiAgICAgICAgU29jaWFsU2hhcmUuc2hhcmVUZXh0KGxpc3RTdHJpbmcpO1xuICAgIH1cblxuICAgZGVsZXRlKGl0ZW06IEdyb2Nlcnkpe1xuICAgICAgIHZhciBkaWFsb2dzID0gcmVxdWlyZShcInVpL2RpYWxvZ3NcIik7XG4gICAgICAgdmFyIGdMaXN0U2VydmljZSA9IHRoaXMuZ3JvY2VyeUxpc3RTZXJ2aWNlO1xuICAgICAgICAgICAgZGlhbG9ncy5hY3Rpb24oe1xuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiRG8geW91IHdhbnQgdG8gZGVsZXRlIFwiKyBpdGVtLm5hbWUgK1wiP1wiICxcbiAgICAgICAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiBcIkNhbmNlbCB0ZXh0XCIsXG4gICAgICAgICAgICAgICAgYWN0aW9uczogW1wiWWVzXCIsIFwiTm90IG5vd1wiXVxuICAgICAgICAgICAgfSkudGhlbihcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQgPT09IFwiWWVzXCIpe1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJVc2VyIHByZXNzZWQtLS0+IFwiICsgcmVzdWx0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdMaXN0U2VydmljZS5kZWxldGUoaXRlbS5pZCk7IFxuICAgICAgICAgICAgICAgICAgICB9ICBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApO1xuICAgICAgIC8vdGhpcy5ncm9jZXJ5TGlzdCA9IHRoaXMuZ3JvY2VyeUxpc3RTZXJ2aWNlLmRlbGV0ZShpdGVtLmlkKTsgICBcbiAgIH1cblxufSJdfQ==