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
  
  delete(id: string) {
    let headers = new Headers();
    headers.append("Authorization", "Bearer " + Config.token);
    headers.append("Content-Type", "application/json");
  
    return this.http.delete(
      Config.apiUrl + "Groceries/" + id,
      { headers: headers }
    )
    .map(res => res.json())
    .catch(this.handleErrors);
  }
  
    */
    GroceryListService.prototype.delete = function (id) {
        var elementPos = this.groceryList.map(function (x) { return x.id; }).indexOf(id);
        var objectFound = this.groceryList[elementPos];
        console.log(objectFound.name + " has been deleted!");
        this.groceryList.splice((this.groceryList.indexOf(objectFound)), 1);
        //return this.groceryList;
    };
    GroceryListService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], GroceryListService);
    return GroceryListService;
}());
exports.GroceryListService = GroceryListService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JvY2VyeS1saXN0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJncm9jZXJ5LWxpc3Quc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEscUJBQTJCLGVBQWUsQ0FBQyxDQUFBO0FBQzNDLHFCQUE4QixlQUFlLENBQUMsQ0FBQTtBQUM5QyxtQkFBMkIsU0FBUyxDQUFDLENBQUE7QUFDckMsUUFBTyx1QkFBdUIsQ0FBQyxDQUFBO0FBTS9COzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBNEJFO0FBSUY7SUFPRSw0QkFBb0IsSUFBVTtRQUFWLFNBQUksR0FBSixJQUFJLENBQU07UUFOOUIsZ0JBQVcsR0FBbUIsRUFBRSxDQUFDO1FBRWpDLGNBQVMsR0FBVyxFQUFFLENBQUM7UUFLbkI7Ozs7OzhEQUtzRDtJQUMxRCxDQUFDO0lBRUQsaUNBQUksR0FBSjtRQUFBLGlCQWdCQztRQWZFLFVBQVUsQ0FBQztZQUNSLEtBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQztZQUNyRCxLQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQUM7WUFDbkQsS0FBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDO1lBQ3BELEtBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQztZQUNwRCxLQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUM7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bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgSHR0cCwgSGVhZGVycyB9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvUnhcIjtcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL21hcFwiO1xuXG4vL2ltcG9ydCB7IENvbmZpZyB9IGZyb20gXCIuLi9jb25maWdcIjtcbmltcG9ydCB7IEdyb2NlcnkgfSBmcm9tIFwiLi9ncm9jZXJ5XCI7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSBcIi4uL3VzZXIvdXNlclwiO1xuXG4vKlxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEdyb2NlcnlMaXN0U2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cCkge31cblxuICBsb2FkKCkge1xuICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcbiAgICBoZWFkZXJzLmFwcGVuZChcIkF1dGhvcml6YXRpb25cIiwgXCJCZWFyZXIgXCIgKyBDb25maWcudG9rZW4pO1xuXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoQ29uZmlnLmFwaVVybCArIFwiR3JvY2VyaWVzXCIsIHtcbiAgICAgIGhlYWRlcnM6IGhlYWRlcnNcbiAgICB9KVxuICAgIC5tYXAocmVzID0+IHJlcy5qc29uKCkpXG4gICAgLm1hcChkYXRhID0+IHtcbiAgICAgIGxldCBncm9jZXJ5TGlzdCA9IFtdO1xuICAgICAgZGF0YS5SZXN1bHQuZm9yRWFjaCgoZ3JvY2VyeSkgPT4ge1xuICAgICAgICBncm9jZXJ5TGlzdC5wdXNoKG5ldyBHcm9jZXJ5KGdyb2NlcnkuSWQsIGdyb2NlcnkuTmFtZSkpO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gZ3JvY2VyeUxpc3Q7XG4gICAgfSlcbiAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcnMpO1xuICB9XG5cbiAgaGFuZGxlRXJyb3JzKGVycm9yOiBSZXNwb25zZSkge1xuICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGVycm9yLmpzb24oKSkpO1xuICAgIHJldHVybiBPYnNlcnZhYmxlLnRocm93KGVycm9yKTtcbiAgfVxufVxuKi9cblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgR3JvY2VyeUxpc3RTZXJ2aWNlIHtcbiAgZ3JvY2VyeUxpc3Q6IEFycmF5PEdyb2Nlcnk+ID0gW107XG5cbiAgZ3JvY2VyeUlkOiBudW1iZXIgPSAyMDtcblxuICBwcml2YXRlIGdyb2Nlcnk6IEdyb2Nlcnk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwKSB7XG4gICAgICAvKlxuICAgICAgdGhpcy5ncm9jZXJ5TGlzdC5wdXNoKHsgaWQ6IFwiMTJcIiwgbmFtZTogXCJDaGlja2VuXCIgfSk7XG4gICAgICB0aGlzLmdyb2NlcnlMaXN0LnB1c2goeyBpZDogXCIxM1wiLCBuYW1lOiBcIlNhbG1vblwiIH0pO1xuICAgICAgdGhpcy5ncm9jZXJ5TGlzdC5wdXNoKHsgaWQ6IFwiMTRcIiwgbmFtZTogXCJNaW5pLWJpdGVzXCIgfSk7XG4gICAgICB0aGlzLmdyb2NlcnlMaXN0LnB1c2goeyBpZDogXCIxNVwiLCBuYW1lOiBcIkN1c3RhcmRcIiB9KTtcbiAgICAgIHRoaXMuZ3JvY2VyeUxpc3QucHVzaCh7IGlkOiBcIjE2XCIsIG5hbWU6IFwiQ3JlYW1cIiB9KTsgKi8gXG4gIH1cblxuICBsb2FkKCkge1xuICAgICBzZXRUaW1lb3V0KCgpPT4ge1xuICAgICAgICB0aGlzLmdyb2NlcnlMaXN0LnB1c2goeyBpZDogXCIxMlwiLCBuYW1lOiBcIkNoaWNrZW5cIiB9KTtcbiAgICAgICAgdGhpcy5ncm9jZXJ5TGlzdC5wdXNoKHsgaWQ6IFwiMFwiLCBuYW1lOiBcIkFwcGxlc1wiIH0pO1xuICAgICAgICB0aGlzLmdyb2NlcnlMaXN0LnB1c2goeyBpZDogXCIxXCIsIG5hbWU6IFwiQmFuYW5hc1wiIH0pO1xuICAgICAgICB0aGlzLmdyb2NlcnlMaXN0LnB1c2goeyBpZDogXCIyXCIsIG5hbWU6IFwiT3Jhbmdlc1wiIH0pO1xuICAgICAgICB0aGlzLmdyb2NlcnlMaXN0LnB1c2goeyBpZDogXCI0XCIsIG5hbWU6IFwiTWFuZ29lc1wiIH0pO1xuICAgICAgICB0aGlzLmdyb2NlcnlMaXN0LnB1c2goeyBpZDogXCI1XCIsIG5hbWU6IFwiSGFtXCIgfSk7XG4gICAgICAgIHRoaXMuZ3JvY2VyeUxpc3QucHVzaCh7IGlkOiBcIjZcIiwgbmFtZTogXCJDYWtlXCIgfSk7XG4gICAgICAgIHRoaXMuZ3JvY2VyeUxpc3QucHVzaCh7IGlkOiBcIjdcIiwgbmFtZTogXCJTdWdhclwiIH0pO1xuICAgICAgICB0aGlzLmdyb2NlcnlMaXN0LnB1c2goeyBpZDogXCI4XCIsIG5hbWU6IFwiUGVhY2hlc1wiIH0pO1xuICAgICAgICB0aGlzLmdyb2NlcnlMaXN0LnB1c2goeyBpZDogXCI5XCIsIG5hbWU6IFwiUGl0dGFcIiB9KTtcbiAgICAgICAgdGhpcy5ncm9jZXJ5TGlzdC5wdXNoKHsgaWQ6IFwiMTBcIiwgbmFtZTogXCJMaW1lc1wiIH0pO1xuICAgICAgICB0aGlzLmdyb2NlcnlMaXN0LnB1c2goeyBpZDogXCIxMVwiLCBuYW1lOiBcIktpZXZzXCIgfSk7XG4gICAgIH0sIDMwMDApO1xuICAgICAgcmV0dXJuIHRoaXMuZ3JvY2VyeUxpc3Q7XG4gIH1cblxuICBoYW5kbGVFcnJvcnMoZXJyb3I6IFJlc3BvbnNlKSB7XG4gICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoZXJyb3IuanNvbigpKSk7XG4gICAgcmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyb3IpO1xuICB9XG5cblxuICBhZGQobmFtZTogc3RyaW5nKXtcbiAgICAgIGxldCBqPSArK3RoaXMuZ3JvY2VyeUlkO1xuICAgICAgdGhpcy5ncm9jZXJ5TGlzdC51bnNoaWZ0KHsgaWQ6IGoudG9TdHJpbmcoKSwgbmFtZTogbmFtZX0pO1xuICAgICAgXG4gICAgICBsZXQgbGFzdE9iaj0gKHRoaXMuZ3JvY2VyeUxpc3RbMF0pO1xuICAgICAgY29uc29sZS5sb2cobGFzdE9iai5pZCArIFwiIFwiICsgbGFzdE9iai5uYW1lKTtcbiAgfVxuICAvKlxuICBhZGQobmFtZTogc3RyaW5nKSB7XG4gICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xuICAgIGhlYWRlcnMuYXBwZW5kKFwiQXV0aG9yaXphdGlvblwiLCBcIkJlYXJlciBcIiArIENvbmZpZy50b2tlbik7XG4gICAgaGVhZGVycy5hcHBlbmQoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi9qc29uXCIpO1xuXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KFxuICAgICAgQ29uZmlnLmFwaVVybCArIFwiR3JvY2VyaWVzXCIsXG4gICAgICBKU09OLnN0cmluZ2lmeSh7IE5hbWU6IG5hbWUgfSksXG4gICAgICB7IGhlYWRlcnM6IGhlYWRlcnMgfVxuICApXG4gIC5tYXAocmVzID0+IHJlcy5qc29uKCkpXG4gIC5tYXAoZGF0YSA9PiB7XG4gICAgcmV0dXJuIG5ldyBHcm9jZXJ5KGRhdGEuUmVzdWx0LklkLCBuYW1lKTtcbiAgfSlcbiAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3JzKTtcbn1cblxuZGVsZXRlKGlkOiBzdHJpbmcpIHtcbiAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xuICBoZWFkZXJzLmFwcGVuZChcIkF1dGhvcml6YXRpb25cIiwgXCJCZWFyZXIgXCIgKyBDb25maWcudG9rZW4pO1xuICBoZWFkZXJzLmFwcGVuZChcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL2pzb25cIik7XG5cbiAgcmV0dXJuIHRoaXMuaHR0cC5kZWxldGUoXG4gICAgQ29uZmlnLmFwaVVybCArIFwiR3JvY2VyaWVzL1wiICsgaWQsXG4gICAgeyBoZWFkZXJzOiBoZWFkZXJzIH1cbiAgKVxuICAubWFwKHJlcyA9PiByZXMuanNvbigpKVxuICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcnMpO1xufVxuXG4gICovXG5cbiAgZGVsZXRlKGlkOiBzdHJpbmcpe1xuICAgICAgdmFyIGVsZW1lbnRQb3MgPSB0aGlzLmdyb2NlcnlMaXN0Lm1hcChmdW5jdGlvbih4KSB7cmV0dXJuIHguaWQ7IH0pLmluZGV4T2YoaWQpO1xuICAgICAgdmFyIG9iamVjdEZvdW5kID0gdGhpcy5ncm9jZXJ5TGlzdFtlbGVtZW50UG9zXTtcblxuICAgICAgY29uc29sZS5sb2cob2JqZWN0Rm91bmQubmFtZSArIFwiIGhhcyBiZWVuIGRlbGV0ZWQhXCIpO1xuICAgICAgdGhpcy5ncm9jZXJ5TGlzdC5zcGxpY2UoKHRoaXMuZ3JvY2VyeUxpc3QuaW5kZXhPZihvYmplY3RGb3VuZCkpLDEpO1xuICAgICAgLy9yZXR1cm4gdGhpcy5ncm9jZXJ5TGlzdDtcbiAgIH1cbiAgXG5cbn0iXX0=