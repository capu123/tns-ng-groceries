// this import should be first in order to load some required settings (like globals and reflect-metadata)
import { platformNativeScriptDynamic } from "nativescript-angular/platform";

import { AppModule } from "./app.module";

import { setStatusBarColors } from "./utils/status-bar-util";
setStatusBarColors();

platformNativeScriptDynamic().bootstrapModule(AppModule);
