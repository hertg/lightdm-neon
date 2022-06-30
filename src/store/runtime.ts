import { writable, type Writable } from "svelte/store";

// the currently selected session
export const selectedSession: Writable<string> = writable("");

// indicates whether the session has been chosen manually. 
// if it was, then the selected session should not longer change automatically
export const sessionTouched: Writable<boolean> = writable(false);

// whether the background should be blurred or not
export const backgroundBlur: Writable<boolean> = writable(false);

export const authenticating: Writable<boolean> = writable(false);

export const notifications: Writable<GreeterNotification[]> = writable([]);

