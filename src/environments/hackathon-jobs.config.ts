import { isDevMode } from "@angular/core";
import * as devEnv from "./environment";
import * as prodEnv from "./environment.prod";

export const config = () => {
    if (isDevMode()) return devEnv.environment;
    return prodEnv.environment;
}
