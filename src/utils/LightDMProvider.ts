import type { Greeter as GreeterClass, GreeterConfig as ConfigClass, ThemeUtils as UtilsClass } from "nody-greeter-types";
import { Greeter, GreeterConfig, ThemeUtils } from "./mock";

export const lightdm: GreeterClass = window.lightdm || new Greeter();
export const config: ConfigClass = window.greeter_config || new GreeterConfig();
export const greeterutil: UtilsClass = window.theme_utils || new ThemeUtils();
