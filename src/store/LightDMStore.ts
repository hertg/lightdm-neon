import { writable, Writable } from "svelte/store";
import { useLightDM } from "../utils/LightDMProvider";

/*class LightDMStore {
    constructor(
        public inAuthentication: Writable<boolean> = writable(useLightDM.in_authentication),
        public isAuthenticated: Writable<boolean> = writable(useLightDM.is_authenticated),
    ) {}
}

export const lightDMStore = new LightDMStore();*/

export const inAuthentication: Writable<boolean> = writable(useLightDM.in_authentication);
export const isAuthenticated: Writable<boolean> = writable(useLightDM.is_authenticated);