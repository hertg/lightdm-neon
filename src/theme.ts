import { replace, push } from "svelte-spa-router";
import { notify } from "./utils/Notification";

export abstract class Theme {
    abstract on_user_prompt(message: string): void;
    abstract on_password_prompt(message: string): void;
    abstract on_show_message(message: string, type: number): void;
}

export class MyTheme implements Theme {
    on_show_message(message: string, type: number): void {
        notify(message, type);
    }
    on_user_prompt(message: string): void {
        replace('/user?message=' + message);
    }
    on_password_prompt(message: string): void {
        push('/login?message=' + message);
    }
}