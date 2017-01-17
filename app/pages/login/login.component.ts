import { User } from "../../shared/user/user";
import { UserService } from "../../shared/user/user.service";

import { Component, OnInit, ElementRef, ViewChild} from "@angular/core";

import { Router } from "@angular/router";

import { Page } from "ui/page";

import { Color } from "color";
import { View } from "ui/core/view";

@Component({
    selector: "my-app",
    //providers: [UserService],
    templateUrl: "pages/login/login.html",
    styleUrls: ["pages/login/login-common.css", "pages/login/login.css"]
})
export class LoginComponent implements OnInit {
    user: User;
    isLoggingIn= true;
    @ViewChild("container") container: ElementRef;

    constructor(private router: Router, private userService: UserService, private page: Page){
        this.user = userService.getUser();
    }

    ngOnInit() {
        this.page.actionBarHidden = true;
        this.page.backgroundImage = "~/images/bg_login@3x.jpg";
    }

    submit() {
        if (!this.user.isValidEmail()) {
            alert("Enter a valid email address.");
            return;
        }
        if (this.isLoggingIn) {
            this.login(this.user);
        } else {
                this.signUp();
            }
        }

    login(user) {
        /*
            this.userService.login(this.user)
                .subscribe(
                () => this.router.navigate(["/list"]),
                (error) => alert("Unfortunately we could not find your account.")
                );
        */
        this.router.navigate(["/list"]);
        }

    signUp() {
        this.userService.register(this.user);
        this.router.navigate(["/list"]);
         }

    toggleDisplay() {
        this.isLoggingIn = !this.isLoggingIn;
        
        let container = <View>this.container.nativeElement;
        container.animate({
            backgroundColor: this.isLoggingIn ? new Color("white") : new Color("#301217"),
            duration: 200
            });
        }
}
        
