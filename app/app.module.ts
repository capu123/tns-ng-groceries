import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptFormsModule } from "nativescript-angular/forms";

import { AppComponent } from "./app.component";
import { UserService } from "./shared/user/user.service";
import { NativeScriptHttpModule } from "nativescript-angular/http";

import { NativeScriptRouterModule } from "nativescript-angular/router";
import { routes, navigatableComponents } from "./app.routing";

@NgModule({
    declarations: [
        AppComponent,
        ...navigatableComponents
        ],
    providers: [UserService],
    bootstrap: [AppComponent],
    imports: [
        NativeScriptModule,
        NativeScriptFormsModule,
        NativeScriptHttpModule,
        NativeScriptRouterModule,
        NativeScriptRouterModule.forRoot(routes)
        ],
    schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
