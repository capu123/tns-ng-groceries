import { User } from "../../shared/user/user";
import { UserService } from "../../shared/user/user.service";

import { Component, OnInit, ElementRef, ViewChild} from "@angular/core";

import { Router } from "@angular/router";

import { Page } from "ui/page";

import { Color } from "color";
import { View } from "ui/core/view";

import { TextField } from "ui/text-field";
import { setHintColor } from "../../utils/hint-util";


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

    @ViewChild("email") email: ElementRef;
    @ViewChild("password") password: ElementRef;

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

        this.setTextFieldColors();
        
        let container = <View>this.container.nativeElement;
        container.animate({
            backgroundColor: this.isLoggingIn ? new Color("white") : new Color("#efa31f"),
            duration: 200
            });
        }

    setTextFieldColors() {
        let emailTextField = <TextField>this.email.nativeElement;
        let passwordTextField = <TextField>this.password.nativeElement;

        let mainTextColor = new Color(this.isLoggingIn ? "black" : "white");
        emailTextField.color = mainTextColor;
        passwordTextField.color = mainTextColor;

        let hintColor = new Color(this.isLoggingIn ? "#ACA6A7" : "white");
        setHintColor({ view: emailTextField, color: hintColor });
        setHintColor({ view: passwordTextField, color: hintColor });
    }
}
        
