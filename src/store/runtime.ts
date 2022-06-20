import { writable, type Writable } from "svelte/store";

export const selectedSession: Writable<string> = writable("");
export const notifications: Writable<GreeterNotification[]> = writable([]);
