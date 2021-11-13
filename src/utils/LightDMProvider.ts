import { MockConfig } from "../mock/MockConfig";
import { MockGreeter } from "../mock/MockGreeter";
import { MockGreeterUtil } from "../mock/MockGreeterUtil";

export const lightdm: LightDMGreeter = window.lightdm || new MockGreeter();
export const config: LightDMConfig = window.config || new MockConfig();
export const greeterutil: LightDMUtil = window.greeterutil || new MockGreeterUtil();

/*
=> This doesn't work with the real lightdm script:
> ** (WebKitWebProcess:9253): CRITICAL **: 13:03:58.912: lightdm_greeter_authenticate: assertion 'LIGHTDM_IS_GREETER (greeter)' failed
> ** (WebKitWebProcess:9253): CRITICAL **: 13:03:59.414: lightdm_greeter_respond: assertion 'LIGHTDM_IS_GREETER (greeter)' failed

const proxyHandler: ProxyHandler<LightDM.Greeter> = {
    set: function (target, p, value, receiver) {
        console.log(`set ${target} ${String(p)} ${value}`);
        return true;
    }
}
if (actualLightDM) {
    window.lightdm = new Proxy(actualLightDM, proxyHandler);
} else {
    window.lightdm = new Proxy(mockLightDM, proxyHandler);
}
export const useLightDM = window.lightdm;
*/