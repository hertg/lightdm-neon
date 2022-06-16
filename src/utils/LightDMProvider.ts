import type { Greeter, GreeterConfig, ThemeUtils } from "nody-greeter-types";
import { MockGreeter } from "../mock/MockGreeter";
import { MockThemeUtils } from "../mock/MockThemeUtils";

/*export const lightdm: Greeter = window.lightdm || new MockGreeter();
export const config: GreeterConfig = window.config || new MockConfig();
export const greeterutil: ThemeUtils = window.greeterutil || new MockGreeterUtil();*/

export const lightdm: Greeter = window.lightdm || new MockGreeter();
export const config: GreeterConfig = window.greeter_config;
export const greeterutil: ThemeUtils = window.theme_utils || new MockThemeUtils;