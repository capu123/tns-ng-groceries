"use strict";
var core_1 = require("@angular/core");
var grocery_list_service_1 = require("../../shared/grocery/grocery-list.service");
var ListComponent = (function () {
    function ListComponent(groceryListService) {
        this.groceryListService = groceryListService;
        //groceryList: Array<Object> = [];
        this.groceryList = [];
    }
    ListComponent.prototype.ngOnInit = function () {
        /*
            this.groceryListService.load()
            .subscribe(loadedGroceries => {
            loadedGroceries.forEach((groceryObject) => {
                this.groceryList.unshift(groceryObject);
            });
            });
        */
        this.groceryList = this.groceryListService.load();
    };
    ListComponent = __decorate([
        core_1.Component({
            selector: "list",
            //providers: [UserService],
            providers: [grocery_list_service_1.GroceryListService],
            templateUrl: "pages/list/list.html",
            styleUrls: ["pages/login/login-common.css", "pages/login/login.css"]
        }), 
        __metadata('design:paramtypes', [grocery_list_service_1.GroceryListService])
    ], ListComponent);
    return ListComponent;
}());
exports.ListComponent = ListComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsaXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBR0EscUJBQXlELGVBQWUsQ0FBQyxDQUFBO0FBR3pFLHFDQUFtQywyQ0FBMkMsQ0FBQyxDQUFBO0FBUy9FO0lBSUUsdUJBQW9CLGtCQUFzQztRQUF0Qyx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBSDFELGtDQUFrQztRQUNsQyxnQkFBVyxHQUFtQixFQUFFLENBQUM7SUFFNEIsQ0FBQztJQUU5RCxnQ0FBUSxHQUFSO1FBQ0U7Ozs7Ozs7VUFPRTtRQUNGLElBQUksQ0FBQyxXQUFXLEdBQUUsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksRUFBRSxDQUFDO0lBQ25ELENBQUM7SUF2Qkg7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU07WUFDaEIsMkJBQTJCO1lBQzNCLFNBQVMsRUFBRSxDQUFDLHlDQUFrQixDQUFDO1lBQy9CLFdBQVcsRUFBRSxzQkFBc0I7WUFDbkMsU0FBUyxFQUFFLENBQUMsOEJBQThCLEVBQUUsdUJBQXVCLENBQUM7U0FDdkUsQ0FBQzs7cUJBQUE7SUFrQkYsb0JBQUM7QUFBRCxDQUFDLEFBakJELElBaUJDO0FBakJZLHFCQUFhLGdCQWlCekIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFVzZXIgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3VzZXIvdXNlclwiO1xuaW1wb3J0IHsgVXNlclNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3VzZXIvdXNlci5zZXJ2aWNlXCI7XG5cbmltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgT25Jbml0LCBWaWV3Q2hpbGQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5pbXBvcnQgeyBHcm9jZXJ5IH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9ncm9jZXJ5L2dyb2NlcnlcIjtcbmltcG9ydCB7IEdyb2NlcnlMaXN0U2VydmljZSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvZ3JvY2VyeS9ncm9jZXJ5LWxpc3Quc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJsaXN0XCIsXG4gICAgLy9wcm92aWRlcnM6IFtVc2VyU2VydmljZV0sXG4gICAgcHJvdmlkZXJzOiBbR3JvY2VyeUxpc3RTZXJ2aWNlXSxcbiAgICB0ZW1wbGF0ZVVybDogXCJwYWdlcy9saXN0L2xpc3QuaHRtbFwiLFxuICAgIHN0eWxlVXJsczogW1wicGFnZXMvbG9naW4vbG9naW4tY29tbW9uLmNzc1wiLCBcInBhZ2VzL2xvZ2luL2xvZ2luLmNzc1wiXVxufSlcbmV4cG9ydCBjbGFzcyBMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgLy9ncm9jZXJ5TGlzdDogQXJyYXk8T2JqZWN0PiA9IFtdO1xuICBncm9jZXJ5TGlzdDogQXJyYXk8R3JvY2VyeT4gPSBbXTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGdyb2NlcnlMaXN0U2VydmljZTogR3JvY2VyeUxpc3RTZXJ2aWNlKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIC8qXG4gICAgICAgIHRoaXMuZ3JvY2VyeUxpc3RTZXJ2aWNlLmxvYWQoKVxuICAgICAgICAuc3Vic2NyaWJlKGxvYWRlZEdyb2NlcmllcyA9PiB7XG4gICAgICAgIGxvYWRlZEdyb2Nlcmllcy5mb3JFYWNoKChncm9jZXJ5T2JqZWN0KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmdyb2NlcnlMaXN0LnVuc2hpZnQoZ3JvY2VyeU9iamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAqL1xuICAgIHRoaXMuZ3JvY2VyeUxpc3Q9IHRoaXMuZ3JvY2VyeUxpc3RTZXJ2aWNlLmxvYWQoKTtcbiAgfVxufSJdfQ==