export {};

const PASSWORD: string = "password";

enum PromptType {
    USERNAME,
    PASSWORD       
};

export class MockGreeter implements LightDMGreeter {
    
    authentication_user: string = null;
    autologin_guest: boolean = null;
    autologin_timeout: number = 10;
    autologin_user: string = "michael";
    can_hibernate: boolean = true;
    can_restart: boolean = true;
    can_shutdown: boolean = true;
    can_suspend: boolean = true;
    default_language: string = "American English"; // deprecated
    default_layout: string = "ch"; // deprecated
    default_session: string = "leftwm";
    has_guest_account: boolean = true;
    hide_users: boolean = false;
    hostname: string = "mockhost";
    in_authentication: boolean = false;
    is_authenticated: boolean = false;
    language: string = "American English";
    layout: string = "ch";
    layouts: LightDMLayout[] = [
        {
            name: "us",
            short_description: "en",
            description: "English (US)",
        },
        {
            name: "ch",
            short_description: "de",
            description: "German (Switzerland)",
        }
    ];
    num_users: number = 2;
    select_guest: boolean = true;
    select_user: string = null;
    sessions: LightDMSession[] = [
        {
            name: "LeftWM",
            key: "leftwm",
            comment: "A window manager for the adventurer",
        },
        {
            name: "DWM",
            key: "dwm",
            comment: "suckless dwm"
        }
    ];

    start_authentication(username: string): void {
        throw new Error("This method is deprecated, use authenticate() instead");
    }

    users: LightDMUser[] = [
        {
            display_name: "michael",
            home_directory: "/home/michael",
            image: null,
            language: null,
            layout: null,
            logged_in: false,
            name: "michael",
            real_name: "",
            session: "leftwm",
            username: "michael",
        },
        {
            display_name: "bob",
            home_directory: "/home/bob",
            image: null,
            language: null,
            layout: null,
            logged_in: false,
            name: "bob",
            real_name: "",
            session: "dwm",
            username: "bob",
        }
    ];

    authenticate(username?: string): void {
        console.debug(`authenticate(${username}) was called!`);
        this.in_authentication = true;
        if (username === undefined || username === null || username.trim().length == 0) {
            window.show_prompt("enter your username", "text");
        } else {
            let user = this.users.find(o => o.username === username);
            if (user) {
                this.authentication_user = username;
                window.show_prompt("enter your password", "password");
            } else {
                window.show_message("This user doesn't exist", "error");
            }
            
            
        }
    }
    
    authenticate_as_guest(): void {
        console.debug(`authenticate_as_guest() was called!`);
        throw new Error("This method isn't mocked yet");
    }

    cancel_authentication(): void {
        console.debug(`cancel_authentication() was called!`);
        this.in_authentication = false;
        this.authentication_user = null;
    }

    cancel_autologin(): void {
        console.debug(`cancel_autologin() was called!`);
        this.is_authenticated = true;
        this.autologin_user = null;
        throw new Error("This method isn't fully mocked yet");
    }

    get_hint(name?: string | number | boolean) {
        console.debug(`get_hint(${name}) was called!`);
        throw new Error("This method isn't fully mocked yet");
    }
    hibernate(): void {
        console.debug(`hibernate() was called!`);
        alert("hibernate!");
    }
    respond(response: any): void {
        console.debug(`response(${response}) was called!`);
        if (this.promptedFor == null) {
            console.error("wasn't prompting for anything?");
        } else if (this.promptedFor === PromptType.USERNAME) {
            let username: string = response;
            let user = this.users.find(u => u.username === username);
            if (user) {
                window.show_prompt("enter password", "password");
            } else {
                console.error(`the user ${username} doesn't exist`);
                window.show_message("this user doesn't exist", "error");
            }
        } else if (this.promptedFor === PromptType.PASSWORD) {
            let password: string = response;
            if (password === PASSWORD) {
                window.authentication_complete();
            } else {
                console.error(`the entered password was wrong`);
                window.show_message("wrong password", "error");
            }
        }
    }
    restart(): void {
        console.debug(`restart() was called!`);
        alert("restart!");
    }
    set_language(language: string): void {
        console.debug(`set_language(${language}) was called!`);
        this.language = language;
    }
    shutdown(): void {
        console.debug(`shutdown() was called!`);
        alert("shutdown!");
    }
    start_session_sync(session?: any): boolean {
        throw new Error("Method not implemented.");
    }
    suspend(): void {
        console.debug(`suspend() was called!`);
        alert("suspend!");
    }

    private promptedFor: PromptType = null;
    
}

//import { inAuthentication, isAuthenticated } from "../store/LightDMStore";
//import { MockUser } from "./MockUser";

/*
const MOCK_PASSWORD: string = "password";

enum PromptResult {
    Username,
    Password
}

export class MockGreeter extends LightDMGreeter {

    authentication_user: string = null;
    autologin_guest: boolean = false;
    autologin_timeout: number = 10;
    autologin_user: string = null;
    can_hibernate: boolean = true;
    can_restart: boolean = true;
    can_shutdown: boolean = true;
    can_suspend: boolean = true;
    default_session: string = "default";
    has_guest_account: boolean = true;
    hide_users: boolean = false;
    hostname: string = "mock";
    in_authentication: boolean = false;
    is_authenticated: boolean = false;
    languages: LightDM.Language[] = [
        {
            name: "Swiss High German",
            code: "de_CH.utf-8",
            territory: "Switzerland",
        },
        {
            name: "American English",
            code: "en_US.utf-8",
            territory: "United States"
        }
    ];
    layouts: LightDM.Layout[] = [];
    lock_hint: boolean = false;
    num_users: number = 2;
    select_guest_hint: boolean = false;
    select_user_hint: string = "michael";
    sessions: LightDM.Session[] = [
        {
            name: "Gnome 3",
            key: "gnome-shell",
            comment: null,
        },
        {
            name: "LeftWM",
            key: "leftwm",
            comment: "A window manager for the adventurer"
        }
    ];
    users: LightDM.User[] = [
        MockUser.newMock("Michael", "michael"),
        MockUser.newMock("Bob", "bob"),
    ];

    promptedFor: PromptResult;

    authenticate(username?: string): void {
        console.log(`authenticate: currently -> ${this.in_authentication}`);
        this.in_authentication = true;
        inAuthentication.update(() => true);
        if (username === undefined) {
            this.promptedFor = PromptResult.Username;
            window.show_prompt("username", "text");
        } else {
            this.authentication_user = username;
            this.promptedFor = PromptResult.Password;
            window.show_prompt("password", "password");
        }
    }

    authenticate_as_guest(): void {
        console.log("authenticate_as_guest was called");
    }

    cancel_authentication(): void {
        console.log("cancel_authentication was called");
    }

    cancel_autologin(): void {
        console.log("cancel_autologin was called");
    }

    get_hint(name?: string | number | boolean) {
        console.log("get_hint was called");
    }

    hibernate(): boolean {
        alert("hibernate");
        return true;
    }

    respond(response: any): void {
        if (this.promptedFor === PromptResult.Username) {
            this.authentication_user = response;
        } else if (this.promptedFor === PromptResult.Password) {
            isAuthenticated.update(() => response === MOCK_PASSWORD);
            inAuthentication.update(() => false);
            window.authentication_complete();
        } else {
            throw new Error("Not waiting for a response?");
        }
    }

    restart(): boolean {
        alert("restart");
        return true;
    }

    set_language(language: string): boolean {
        alert(`setting language as ${language}`);
        return true;
    }

    shutdown(): boolean {
        alert("shutdown");
        return true;
    }

    start_session_sync(session?: LightDMSession): boolean {
        alert(`Logging in as '${this.authentication_user}' (Session: '${session}')`);
        return true;
    }

    suspend(): boolean {
        alert("suspend");
        return true;
    }
    
} 
*/