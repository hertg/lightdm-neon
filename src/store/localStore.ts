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

    // add missing values to localstorage saved settings
    // this is important when new settings are added but 
    // settings already exist in localstorage
    if (addMissingValues(saved, initial)) {
        localStorage.setItem(key, toString(saved));
    }

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

// this method iterates over all keys of the provided def (default) value
// and checks if the obj also contains the key. if the obj
// does not contain the key, the default value will be applied.
// returns true if any change is made to obj.
const addMissingValues = <T>(obj: T, def: T) => {
    let changed = false;
    Object.keys(def).forEach(key => {
        if (obj[key] === undefined) {
            obj[key] = def[key];
            changed = true;
        }
        if (typeof def[key] === 'object' && def[key] != null) {
            addMissingValues(obj[key], def[key]);
        }
    });
    return changed;
}