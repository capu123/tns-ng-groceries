"use strict";
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Rx_1 = require("rxjs/Rx");
require("rxjs/add/operator/map");
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
var GroceryListService = (function () {
    function GroceryListService(http) {
        this.http = http;
        this.groceryList = [];
        this.groceryId = 20;
        /*
        this.groceryList.push({ id: "12", name: "Chicken" });
        this.groceryList.push({ id: "13", name: "Salmon" });
        this.groceryList.push({ id: "14", name: "Mini-bites" });
        this.groceryList.push({ id: "15", name: "Custard" });
        this.groceryList.push({ id: "16", name: "Cream" }); */
    }
    GroceryListService.prototype.load = function () {
        var _this = this;
        setTimeout(function () {
            _this.groceryList.push({ id: "12", name: "Chicken" });
            _this.groceryList.push({ id: "0", name: "Apples" });
            _this.groceryList.push({ id: "1", name: "Bananas" });
            _this.groceryList.push({ id: "2", name: "Oranges" });
            _this.groceryList.push({ id: "4", name: "Mangoes" });
            _this.groceryList.push({ id: "5", name: "Ham" });
            _this.groceryList.push({ id: "6", name: "Cake" });
            _this.groceryList.push({ id: "7", name: "Sugar" });
            _this.groceryList.push({ id: "8", name: "Peaches" });
            _this.groceryList.push({ id: "9", name: "Pitta" });
            _this.groceryList.push({ id: "10", name: "Limes" });
            _this.groceryList.push({ id: "11", name: "Kievs" });
        }, 3000);
        return this.groceryList;
    };
    GroceryListService.prototype.handleErrors = function (error) {
        console.log(JSON.stringify(error.json()));
        return Rx_1.Observable.throw(error);
    };
    GroceryListService.prototype.add = function (name) {
        var j = ++this.groceryId;
        this.groceryList.unshift({ id: j.toString(), name: name });
        var lastObj = (this.groceryList[0]);
        console.log(lastObj.id + " " + lastObj.name);
    };
    GroceryListService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], GroceryListService);
    return GroceryListService;
}());
exports.GroceryListService = GroceryListService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JvY2VyeS1saXN0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJncm9jZXJ5LWxpc3Quc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEscUJBQTJCLGVBQWUsQ0FBQyxDQUFBO0FBQzNDLHFCQUE4QixlQUFlLENBQUMsQ0FBQTtBQUM5QyxtQkFBMkIsU0FBUyxDQUFDLENBQUE7QUFDckMsUUFBTyx1QkFBdUIsQ0FBQyxDQUFBO0FBSy9COzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBNEJFO0FBSUY7SUFLRSw0QkFBb0IsSUFBVTtRQUFWLFNBQUksR0FBSixJQUFJLENBQU07UUFKOUIsZ0JBQVcsR0FBbUIsRUFBRSxDQUFDO1FBRWpDLGNBQVMsR0FBVyxFQUFFLENBQUM7UUFHbkI7Ozs7OzhEQUtzRDtJQUMxRCxDQUFDO0lBRUQsaUNBQUksR0FBSjtRQUFBLGlCQWdCQztRQWZFLFVBQVUsQ0FBQztZQUNSLEtBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQztZQUNyRCxLQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQUM7WUFDbkQsS0FBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDO1lBQ3BELEtBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQztZQUNwRCxLQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUM7WUFDcEQsS0FBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO1lBQ2hELEtBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQztZQUNqRCxLQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUM7WUFDbEQsS0FBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDO1lBQ3BELEtBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQztZQUNsRCxLQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUM7WUFDbkQsS0FBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDO1FBQ3RELENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNSLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQzVCLENBQUM7SUFFRCx5Q0FBWSxHQUFaLFVBQWEsS0FBZTtRQUMxQixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztRQUMxQyxNQUFNLENBQUMsZUFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBR0QsZ0NBQUcsR0FBSCxVQUFJLElBQVk7UUFDWixJQUFJLENBQUMsR0FBRSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDeEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUMsQ0FBQyxDQUFDO1FBRTFELElBQUksT0FBTyxHQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ25DLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEVBQUUsR0FBRyxHQUFHLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUE3Q0g7UUFBQyxpQkFBVSxFQUFFOzswQkFBQTtJQWtFYix5QkFBQztBQUFELENBQUMsQUFqRUQsSUFpRUM7QUFqRVksMEJBQWtCLHFCQWlFOUIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgSHR0cCwgSGVhZGVycyB9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvUnhcIjtcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL21hcFwiO1xuXG4vL2ltcG9ydCB7IENvbmZpZyB9IGZyb20gXCIuLi9jb25maWdcIjtcbmltcG9ydCB7IEdyb2NlcnkgfSBmcm9tIFwiLi9ncm9jZXJ5XCI7XG5cbi8qXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgR3JvY2VyeUxpc3RTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwKSB7fVxuXG4gIGxvYWQoKSB7XG4gICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xuICAgIGhlYWRlcnMuYXBwZW5kKFwiQXV0aG9yaXphdGlvblwiLCBcIkJlYXJlciBcIiArIENvbmZpZy50b2tlbik7XG5cbiAgICByZXR1cm4gdGhpcy5odHRwLmdldChDb25maWcuYXBpVXJsICsgXCJHcm9jZXJpZXNcIiwge1xuICAgICAgaGVhZGVyczogaGVhZGVyc1xuICAgIH0pXG4gICAgLm1hcChyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAubWFwKGRhdGEgPT4ge1xuICAgICAgbGV0IGdyb2NlcnlMaXN0ID0gW107XG4gICAgICBkYXRhLlJlc3VsdC5mb3JFYWNoKChncm9jZXJ5KSA9PiB7XG4gICAgICAgIGdyb2NlcnlMaXN0LnB1c2gobmV3IEdyb2NlcnkoZ3JvY2VyeS5JZCwgZ3JvY2VyeS5OYW1lKSk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBncm9jZXJ5TGlzdDtcbiAgICB9KVxuICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9ycyk7XG4gIH1cblxuICBoYW5kbGVFcnJvcnMoZXJyb3I6IFJlc3BvbnNlKSB7XG4gICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoZXJyb3IuanNvbigpKSk7XG4gICAgcmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyb3IpO1xuICB9XG59XG4qL1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBHcm9jZXJ5TGlzdFNlcnZpY2Uge1xuICBncm9jZXJ5TGlzdDogQXJyYXk8R3JvY2VyeT4gPSBbXTtcblxuICBncm9jZXJ5SWQ6IG51bWJlciA9IDIwO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cCkge1xuICAgICAgLypcbiAgICAgIHRoaXMuZ3JvY2VyeUxpc3QucHVzaCh7IGlkOiBcIjEyXCIsIG5hbWU6IFwiQ2hpY2tlblwiIH0pO1xuICAgICAgdGhpcy5ncm9jZXJ5TGlzdC5wdXNoKHsgaWQ6IFwiMTNcIiwgbmFtZTogXCJTYWxtb25cIiB9KTtcbiAgICAgIHRoaXMuZ3JvY2VyeUxpc3QucHVzaCh7IGlkOiBcIjE0XCIsIG5hbWU6IFwiTWluaS1iaXRlc1wiIH0pO1xuICAgICAgdGhpcy5ncm9jZXJ5TGlzdC5wdXNoKHsgaWQ6IFwiMTVcIiwgbmFtZTogXCJDdXN0YXJkXCIgfSk7XG4gICAgICB0aGlzLmdyb2NlcnlMaXN0LnB1c2goeyBpZDogXCIxNlwiLCBuYW1lOiBcIkNyZWFtXCIgfSk7ICovIFxuICB9XG5cbiAgbG9hZCgpIHtcbiAgICAgc2V0VGltZW91dCgoKT0+IHtcbiAgICAgICAgdGhpcy5ncm9jZXJ5TGlzdC5wdXNoKHsgaWQ6IFwiMTJcIiwgbmFtZTogXCJDaGlja2VuXCIgfSk7XG4gICAgICAgIHRoaXMuZ3JvY2VyeUxpc3QucHVzaCh7IGlkOiBcIjBcIiwgbmFtZTogXCJBcHBsZXNcIiB9KTtcbiAgICAgICAgdGhpcy5ncm9jZXJ5TGlzdC5wdXNoKHsgaWQ6IFwiMVwiLCBuYW1lOiBcIkJhbmFuYXNcIiB9KTtcbiAgICAgICAgdGhpcy5ncm9jZXJ5TGlzdC5wdXNoKHsgaWQ6IFwiMlwiLCBuYW1lOiBcIk9yYW5nZXNcIiB9KTtcbiAgICAgICAgdGhpcy5ncm9jZXJ5TGlzdC5wdXNoKHsgaWQ6IFwiNFwiLCBuYW1lOiBcIk1hbmdvZXNcIiB9KTtcbiAgICAgICAgdGhpcy5ncm9jZXJ5TGlzdC5wdXNoKHsgaWQ6IFwiNVwiLCBuYW1lOiBcIkhhbVwiIH0pO1xuICAgICAgICB0aGlzLmdyb2NlcnlMaXN0LnB1c2goeyBpZDogXCI2XCIsIG5hbWU6IFwiQ2FrZVwiIH0pO1xuICAgICAgICB0aGlzLmdyb2NlcnlMaXN0LnB1c2goeyBpZDogXCI3XCIsIG5hbWU6IFwiU3VnYXJcIiB9KTtcbiAgICAgICAgdGhpcy5ncm9jZXJ5TGlzdC5wdXNoKHsgaWQ6IFwiOFwiLCBuYW1lOiBcIlBlYWNoZXNcIiB9KTtcbiAgICAgICAgdGhpcy5ncm9jZXJ5TGlzdC5wdXNoKHsgaWQ6IFwiOVwiLCBuYW1lOiBcIlBpdHRhXCIgfSk7XG4gICAgICAgIHRoaXMuZ3JvY2VyeUxpc3QucHVzaCh7IGlkOiBcIjEwXCIsIG5hbWU6IFwiTGltZXNcIiB9KTtcbiAgICAgICAgdGhpcy5ncm9jZXJ5TGlzdC5wdXNoKHsgaWQ6IFwiMTFcIiwgbmFtZTogXCJLaWV2c1wiIH0pO1xuICAgICB9LCAzMDAwKTtcbiAgICAgIHJldHVybiB0aGlzLmdyb2NlcnlMaXN0O1xuICB9XG5cbiAgaGFuZGxlRXJyb3JzKGVycm9yOiBSZXNwb25zZSkge1xuICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGVycm9yLmpzb24oKSkpO1xuICAgIHJldHVybiBPYnNlcnZhYmxlLnRocm93KGVycm9yKTtcbiAgfVxuXG5cbiAgYWRkKG5hbWU6IHN0cmluZyl7XG4gICAgICBsZXQgaj0gKyt0aGlzLmdyb2NlcnlJZDtcbiAgICAgIHRoaXMuZ3JvY2VyeUxpc3QudW5zaGlmdCh7IGlkOiBqLnRvU3RyaW5nKCksIG5hbWU6IG5hbWV9KTtcbiAgICAgIFxuICAgICAgbGV0IGxhc3RPYmo9ICh0aGlzLmdyb2NlcnlMaXN0WzBdKTtcbiAgICAgIGNvbnNvbGUubG9nKGxhc3RPYmouaWQgKyBcIiBcIiArIGxhc3RPYmoubmFtZSk7XG4gIH1cbiAgLypcbiAgYWRkKG5hbWU6IHN0cmluZykge1xuICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcbiAgICBoZWFkZXJzLmFwcGVuZChcIkF1dGhvcml6YXRpb25cIiwgXCJCZWFyZXIgXCIgKyBDb25maWcudG9rZW4pO1xuICAgIGhlYWRlcnMuYXBwZW5kKFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24vanNvblwiKTtcblxuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdChcbiAgICAgIENvbmZpZy5hcGlVcmwgKyBcIkdyb2Nlcmllc1wiLFxuICAgICAgSlNPTi5zdHJpbmdpZnkoeyBOYW1lOiBuYW1lIH0pLFxuICAgICAgeyBoZWFkZXJzOiBoZWFkZXJzIH1cbiAgKVxuICAubWFwKHJlcyA9PiByZXMuanNvbigpKVxuICAubWFwKGRhdGEgPT4ge1xuICAgIHJldHVybiBuZXcgR3JvY2VyeShkYXRhLlJlc3VsdC5JZCwgbmFtZSk7XG4gIH0pXG4gIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9ycyk7XG59XG5cbiAgKi9cblxufSJdfQ==