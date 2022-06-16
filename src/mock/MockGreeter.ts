import type { Greeter, LightDMBattery, LightDMLanguage, LightDMLayout, LightDMSession, LightDMUser, MessageSignal, PromptSignal, Signal } from "nody-greeter-types";
import { MockBattery } from "./MockBattery";

export { };

enum PromptType {
    USERNAME,
    PASSWORD
};


const DEFAULT_USERNAME = "michael"
const DEFAULT_PASSWORD = "password"
const DEFAULT_SESSION = "leftwm"

const LANG_EN_US: LightDMLanguage = {
    code: "en",
    name: "English (US)",
    territory: "us"
}

const LANG_DE_CH: LightDMLanguage = {
    code: "de",
    name: "German (CH)",
    territory: "ch"
}

// todo: ???
export const LAYOUT_EN_US: LightDMLayout = {
    description: "English (US)",
    name: "en_US.utf-8",
    short_description: "English US"
}

export const LAYOUT_DE_CH: LightDMLayout = {
    description: "German (CH)",
    name: "de_CH.utf-8",
    short_description: "German Switzerland"
}

export const SESSION_DWM: LightDMSession = {
    key: "dwm",
    comment: "DWM",
    name: "dwm",
    type: "X11",
}

export const SESSION_LEFTWM: LightDMSession = {
    key: "leftwm",
    comment: "A window manager for the adventurer",
    name: "LeftWM",
    type: "X11",
}

const USER_ALICE: LightDMUser = {
    display_name: "Alice",
    background: "",
    home_directory: "",
    image: "",
    language: "",
    layout: "",
    layouts: [],
    logged_in: false,
    session: "leftwm",
    username: "alice"
}

const USER_BOB: LightDMUser = {
    background: "",
    display_name: "Bob",
    home_directory: "",
    image: "",
    language: "",
    layout: "",
    layouts: [],
    logged_in: false,
    session: "dwm",
    username: "bob"
}

export class MockGreeter implements Greeter {

    private _promptedFor: PromptType;
    private _inAuthentication: boolean = false;
    private _isAuthenticated: boolean = false;
    private _authenticationUser: string = null;
    private _language: LightDMLanguage = LANG_DE_CH;
    private _layout: LightDMLayout = LAYOUT_DE_CH;
    private _brightness: number = 100;

    authentication_complete: Signal;
    autologin_timer_expired: Signal;
    idle: Signal;
    reset: Signal;
    show_message: MessageSignal;
    show_prompt: PromptSignal;
    brightness_update: Signal;
    battery_update: Signal;
    get authentication_user(): string {
        return this._authenticationUser;
    }
    get autologin_guest(): boolean {
        return false;
    }
    get autologin_timeout(): number {
        return 60;
    }
    get autologin_user(): string {
        return DEFAULT_USERNAME;
    }
    get batteryData(): LightDMBattery {
        return new MockBattery();
    }
    get brightness(): number {
        return this._brightness;
    }
    set brightness(quantity: number) {
        this._brightness = quantity;
    }
    get can_access_battery(): boolean {
        return true;
    }
    get can_access_brightness(): boolean {
        return true;
    }
    get can_hibernate(): boolean {
        return true;
    }
    get can_restart(): boolean {
        return true;
    }
    get can_shutdown(): boolean {
        return true;
    }
    get can_suspend(): boolean {
        return true;
    }
    get default_session(): string {
        return DEFAULT_SESSION;
    }
    get has_guest_account(): boolean {
        return true;
    }
    get hide_users_hint(): boolean {
        return false;
    }
    get hostname(): string {
        return "linux-desktop"
    }
    get in_authentication(): boolean {
        return this._inAuthentication;
    }
    get is_authenticated(): boolean {
        return this._isAuthenticated;
    }
    get language(): LightDMLanguage {
        return this._language;
    }
    get languages(): LightDMLanguage[] {
        return [LANG_DE_CH, LANG_EN_US];
    }
    get layout(): LightDMLayout {
        return this._layout;
    }
    set layout(layout: LightDMLayout) {
        this._layout = layout;
    }
    get layouts(): LightDMLayout[] {
        return [LAYOUT_DE_CH, LAYOUT_EN_US];
    }
    get lock_hint(): boolean {
        return false;
    }
    get remote_sessions(): LightDMSession[] {
        return []; // todo ??
    }
    get select_guest_hint(): boolean {
        return false;
    }
    get select_user_hint(): string {
        return DEFAULT_USERNAME; // todo ???
    }
    get sessions(): LightDMSession[] {
        return [SESSION_DWM, SESSION_LEFTWM];
    }
    get show_manual_login_hint(): boolean {
        return false; // todo: ??
    }
    get show_remote_login_hint(): boolean {
        return false; // todo: ??
    }
    get users(): LightDMUser[] {
        return [USER_ALICE, USER_BOB];
    }
    authenticate(username: string): boolean {
        console.debug(`authenticate(${username}) was called!`);
        this._inAuthentication = true;
        if (username === undefined || username === null || username.trim().length == 0) {
            this._promptedFor = PromptType.USERNAME;
            window.show_prompt("Login:", "text");
            return true;
        } else {
            let user = this.users.find(o => o.username === username);
            if (user) {
                this._authenticationUser = username;
                this._promptedFor = PromptType.PASSWORD;
                window.show_prompt("Password:", "password");
                return true;
            } else {
                window.show_message("This user doesn't exist", "error");
                return false;
            }
        }
    }
    authenticate_as_guest(): boolean {
        console.log("Method not implemented.");
        return false;
    }
    brightnessSet(quantity: number): void {
        this.brightness_set(quantity);
    }
    brightness_set(quantity: number): void {
        this.brightness = quantity;
    }
    brightnessIncrease(quantity: number): void {
        this.brightness_increase(quantity);
    }
    brightness_increase(quantity: number): void {
        this.brightness = Math.min(this.brightness + 5, 100)
    }
    brightnessDecrease(quantity: number): void {
        this.brightness_decrease(quantity);
    }
    brightness_decrease(quantity: number): void {
        this.brightness = Math.max(this.brightness - 5, 0)
    }
    cancel_authentication(): boolean {
        console.debug(`cancel_authentication() was called!`);
        this._inAuthentication  = false;
        this._authenticationUser = null;
        return true;
    }
    cancel_autologin(): boolean {
        console.debug(`cancel_autologin() was called!`);
        return this.cancel_authentication();
    }
    hibernate(): boolean {
        alert("hibernate");
        return true;
    }
    respond(response: string): boolean {
        console.debug(`response(${response}) was called!`);
        if (this._promptedFor == null) {
            console.error("wasn't prompting for anything?");
            return false;
        } else if (this._promptedFor === PromptType.USERNAME) {
            let username: string = response;
            let user = this.users.find(u => u.username === username);
            if (user) {
                this._promptedFor = PromptType.PASSWORD;
                window.show_prompt("enter password", "password");
                return true;
            } else {
                console.error(`the user ${username} doesn't exist`);
                window.show_message("this user doesn't exist", "error");
                return false;
            }
        } else if (this._promptedFor === PromptType.PASSWORD) {
            setTimeout(() => {
                let password: string = response;
                if (password === DEFAULT_PASSWORD) {
                    this._isAuthenticated = true;
                    this._inAuthentication = false;
                    window.authentication_complete();
                } else {
                    console.error(`the entered password was wrong`);
                    window.show_message("wrong password", "error");
                }
            }, 0); // todo: use 3s timeout to simulate actual time
            return true;
        }
        return false;
    }
    restart(): boolean {
        alert("restart");
        return true;
    }
    set_language(language: string): boolean {
        let l = this.languages.find(l => l.code === language);
        if (l) {
            this._language = l;
            return true;
        }
        return false;
    }
    shutdown(): boolean {
        alert("shutdown");
        return true;
    }
    start_session(session: string): boolean {
        console.debug(`start_session(${session}) was called!`);
        alert("You are now logged in!");
        return true;
    }
    suspend(): boolean {
        alert("suspend");
        return true;
    }
}
