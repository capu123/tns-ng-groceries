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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsaXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBR0EscUJBQXlELGVBQWUsQ0FBQyxDQUFBO0FBR3pFLHFDQUFtQywyQ0FBMkMsQ0FBQyxDQUFBO0FBSS9FLElBQVksV0FBVyxXQUFNLDJCQUEyQixDQUFDLENBQUE7QUFTekQ7SUFVRSx1QkFBb0Isa0JBQXNDO1FBQXRDLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7UUFUMUQsa0NBQWtDO1FBQ2xDLGdCQUFXLEdBQW1CLEVBQUUsQ0FBQztRQUNqQyxZQUFPLEdBQUcsRUFBRSxDQUFDO1FBSWIsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUNsQixlQUFVLEdBQUcsS0FBSyxDQUFDO0lBRTBDLENBQUM7SUFFOUQsZ0NBQVEsR0FBUjtRQUNFOzs7Ozs7Ozs7VUFTRTtRQUVGLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxXQUFXLEdBQUUsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksRUFBRSxDQUFDO1FBQ2pELElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO0lBQ3pCLENBQUM7SUFFRCwyQkFBRyxHQUFIO1FBQ0EsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQy9CLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1lBQzlCLE1BQU0sQ0FBQztRQUNULENBQUM7UUFFRCx1QkFBdUI7UUFDdkIsSUFBSSxTQUFTLEdBQWMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGFBQWEsQ0FBQztRQUMvRCxTQUFTLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUU3QixJQUFJLENBQUMsa0JBQWtCLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUMxQyxJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztJQUNsQixDQUFDO0lBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O01BMEJFO0lBRUQsNkJBQUssR0FBTDtRQUNLLElBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUNkLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxJQUFJLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLElBQUksRUFBRyxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQzdELElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QyxDQUFDO1FBQ0QsSUFBSSxVQUFVLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN4QyxXQUFXLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUExRUg7UUFBQyxnQkFBUyxDQUFDLGtCQUFrQixDQUFDOzsyREFBQTtJQUM5QjtRQUFDLGdCQUFTLENBQUMsV0FBVyxDQUFDOztvREFBQTtJQVp6QjtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTTtZQUNoQiwyQkFBMkI7WUFDM0IsU0FBUyxFQUFFLENBQUMseUNBQWtCLENBQUM7WUFDL0IsV0FBVyxFQUFFLHNCQUFzQjtZQUNuQyxTQUFTLEVBQUUsQ0FBQyw4QkFBOEIsRUFBRSx1QkFBdUIsRUFBRSw0QkFBNEIsQ0FBQztTQUNyRyxDQUFDOztxQkFBQTtJQWlGRixvQkFBQztBQUFELENBQUMsQUFoRkQsSUFnRkM7QUFoRlkscUJBQWEsZ0JBZ0Z6QixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVXNlciB9IGZyb20gXCIuLi8uLi9zaGFyZWQvdXNlci91c2VyXCI7XG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvdXNlci91c2VyLnNlcnZpY2VcIjtcblxuaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBPbkluaXQsIFZpZXdDaGlsZCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbmltcG9ydCB7IEdyb2NlcnkgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL2dyb2NlcnkvZ3JvY2VyeVwiO1xuaW1wb3J0IHsgR3JvY2VyeUxpc3RTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9ncm9jZXJ5L2dyb2NlcnktbGlzdC5zZXJ2aWNlXCI7XG5cbmltcG9ydCB7IFRleHRGaWVsZCB9IGZyb20gXCJ1aS90ZXh0LWZpZWxkXCI7XG5cbmltcG9ydCAqIGFzIFNvY2lhbFNoYXJlIGZyb20gXCJuYXRpdmVzY3JpcHQtc29jaWFsLXNoYXJlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcImxpc3RcIixcbiAgICAvL3Byb3ZpZGVyczogW1VzZXJTZXJ2aWNlXSxcbiAgICBwcm92aWRlcnM6IFtHcm9jZXJ5TGlzdFNlcnZpY2VdLFxuICAgIHRlbXBsYXRlVXJsOiBcInBhZ2VzL2xpc3QvbGlzdC5odG1sXCIsXG4gICAgc3R5bGVVcmxzOiBbXCJwYWdlcy9sb2dpbi9sb2dpbi1jb21tb24uY3NzXCIsIFwicGFnZXMvbG9naW4vbG9naW4uY3NzXCIsIFwicGFnZXMvbGlzdC9saXN0LWNvbW1vbi5jc3NcIl1cbn0pXG5leHBvcnQgY2xhc3MgTGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIC8vZ3JvY2VyeUxpc3Q6IEFycmF5PE9iamVjdD4gPSBbXTtcbiAgZ3JvY2VyeUxpc3Q6IEFycmF5PEdyb2Nlcnk+ID0gW107XG4gIGdyb2NlcnkgPSBcIlwiO1xuICBAVmlld0NoaWxkKFwiZ3JvY2VyeVRleHRGaWVsZFwiKSBncm9jZXJ5VGV4dEZpZWxkOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKFwic3RhdHVzYmFyXCIpIHN0YXR1c2JhcjogRWxlbWVudFJlZjtcblxuICBpc0xvYWRpbmcgPSBmYWxzZTtcbiAgbGlzdExvYWRlZCA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZ3JvY2VyeUxpc3RTZXJ2aWNlOiBHcm9jZXJ5TGlzdFNlcnZpY2UpIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgLypcbiAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xuICAgICAgICB0aGlzLmdyb2NlcnlMaXN0U2VydmljZS5sb2FkKClcbiAgICAgICAgICAgIC5zdWJzY3JpYmUobG9hZGVkR3JvY2VyaWVzID0+IHtcbiAgICAgICAgICAgIGxvYWRlZEdyb2Nlcmllcy5mb3JFYWNoKChncm9jZXJ5T2JqZWN0KSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5ncm9jZXJ5TGlzdC51bnNoaWZ0KGdyb2NlcnlPYmplY3QpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgfSk7XG4gICAgKi9cblxuICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcbiAgICB0aGlzLmdyb2NlcnlMaXN0PSB0aGlzLmdyb2NlcnlMaXN0U2VydmljZS5sb2FkKCk7XG4gICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICB0aGlzLmxpc3RMb2FkZWQgPSB0cnVlO1xuICB9XG5cbiAgYWRkKCkge1xuICBpZiAodGhpcy5ncm9jZXJ5LnRyaW0oKSA9PT0gXCJcIikge1xuICAgIGFsZXJ0KFwiRW50ZXIgYSBncm9jZXJ5IGl0ZW1cIik7XG4gICAgcmV0dXJuO1xuICB9XG4gXG4gIC8vIERpc21pc3MgdGhlIGtleWJvYXJkXG4gIGxldCB0ZXh0RmllbGQgPSA8VGV4dEZpZWxkPnRoaXMuZ3JvY2VyeVRleHRGaWVsZC5uYXRpdmVFbGVtZW50O1xuICB0ZXh0RmllbGQuZGlzbWlzc1NvZnRJbnB1dCgpO1xuXG4gIHRoaXMuZ3JvY2VyeUxpc3RTZXJ2aWNlLmFkZCh0aGlzLmdyb2NlcnkpO1xuICB0aGlzLmdyb2NlcnkgPSBcIlwiO1xuICB9XG4gIC8qXG4gIGFkZCgpIHtcbiAgaWYgKHRoaXMuZ3JvY2VyeS50cmltKCkgPT09IFwiXCIpIHtcbiAgICBhbGVydChcIkVudGVyIGEgZ3JvY2VyeSBpdGVtXCIpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIERpc21pc3MgdGhlIGtleWJvYXJkXG4gIGxldCB0ZXh0RmllbGQgPSA8VGV4dEZpZWxkPnRoaXMuZ3JvY2VyeVRleHRGaWVsZC5uYXRpdmVFbGVtZW50O1xuICB0ZXh0RmllbGQuZGlzbWlzc1NvZnRJbnB1dCgpO1xuXG4gIHRoaXMuZ3JvY2VyeUxpc3RTZXJ2aWNlLmFkZCh0aGlzLmdyb2NlcnkpXG4gICAgLnN1YnNjcmliZShcbiAgICAgIGdyb2NlcnlPYmplY3QgPT4ge1xuICAgICAgICB0aGlzLmdyb2NlcnlMaXN0LnVuc2hpZnQoZ3JvY2VyeU9iamVjdCk7XG4gICAgICAgIHRoaXMuZ3JvY2VyeSA9IFwiXCI7XG4gICAgICB9LFxuICAgICAgKCkgPT4ge1xuICAgICAgICBhbGVydCh7XG4gICAgICAgICAgbWVzc2FnZTogXCJBbiBlcnJvciBvY2N1cnJlZCB3aGlsZSBhZGRpbmcgYW4gaXRlbSB0byB5b3VyIGxpc3QuXCIsXG4gICAgICAgICAgb2tCdXR0b25UZXh0OiBcIk9LXCJcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZ3JvY2VyeSA9IFwiXCI7XG4gICAgICB9XG4gICAgKVxufVxuICAqL1xuICAgXG4gICBzaGFyZSgpIHtcbiAgICAgICAgbGV0IGxpc3QgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIHNpemUgPSB0aGlzLmdyb2NlcnlMaXN0Lmxlbmd0aDsgaSA8IHNpemUgOyBpKyspIHtcbiAgICAgICAgICAgIGxpc3QucHVzaCh0aGlzLmdyb2NlcnlMaXN0W2ldLm5hbWUpO1xuICAgICAgICB9XG4gICAgICAgIGxldCBsaXN0U3RyaW5nID0gbGlzdC5qb2luKFwiLCBcIikudHJpbSgpO1xuICAgICAgICBTb2NpYWxTaGFyZS5zaGFyZVRleHQobGlzdFN0cmluZyk7XG4gICAgfVxuXG59Il19