import { inAuthentication, isAuthenticated } from "../store/LightDMStore";
import { MockUser } from "./MockUser";

const MOCK_PASSWORD: string = "password";

enum PromptResult {
    Username,
    Password
}

export class MockGreeter implements LightDM.Greeter {

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
            /*let user = this.users.find(user => user.username === username);
            if (user === undefined) {
                throw new Error("User not found"); // todo
            } else {

            }*/
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

    start_session_sync(session?: LightDM.Session): boolean {
        alert(`Logging in as '${this.authentication_user}' (Session: '${session}')`);
        return true;
    }

    suspend(): boolean {
        alert("suspend");
        return true;
    }
    
} 
