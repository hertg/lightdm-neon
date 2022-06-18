import { writable, type Writable } from "svelte/store";

export class ThemeSettings {
    background: string = null;
}

// based on:
// https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_stores
// https://github.com/omer-g/persistent-svelte-store
export const localStore = <T>(key: string, initial: T) => {
    const toString = (value: any) => JSON.stringify(value, null, 2);
    const toObj = JSON.parse;
    if (localStorage.getItem(key) === null) {
        localStorage.setItem(key, toString(initial));
    }
    const saved: T = toObj(localStorage.getItem(key))
    const { subscribe, set, update } = writable(saved)
    return {
        subscribe,
        set: (value) => {
            localStorage.setItem(key, toString(value));
            return set(value);
        },
        update
    }
}


//export const settings: Writable<ThemeSettings> = writable(new ThemeSettings())

//export const background: Writable<string> = writable(null);