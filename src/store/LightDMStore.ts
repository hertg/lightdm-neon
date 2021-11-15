import { writable, Writable } from "svelte/store";
import { lightdm } from "../utils/LightDMProvider";

/*class LightDMStore {
    constructor(
        public inAuthentication: Writable<boolean> = writable(useLightDM.in_authentication),
        public isAuthenticated: Writable<boolean> = writable(useLightDM.is_authenticated),
    ) {}
}

export const lightDMStore = new LightDMStore();*/

export const inAuthentication: Writable<boolean> = writable(lightdm.in_authentication);
export const isAuthenticated: Writable<boolean> = writable(lightdm.is_authenticated);
export const splashscreenSeen: Writable<boolean> = writable(false);
export const notifications: Writable<GreeterNotification[]> = writable([]);

// keep in sync

let inAuth = lightdm.in_authentication;
let isAuth = lightdm.is_authenticated;
setInterval(() => {
    if (inAuth !== lightdm.in_authentication) {
        inAuthentication.update(curr => curr = lightdm.in_authentication);
        inAuth = lightdm.in_authentication;
    }

    if (isAuth !== lightdm.is_authenticated) {
        isAuthenticated.update(curr => curr = lightdm.is_authenticated);
        inAuth = lightdm.is_authenticated;
    }
}, 50);