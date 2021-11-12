import { MockUser } from "../mock/MockUser";

const mock: LightDM.Greeter = {
	authentication_user: null,
    autologin_guest: false,
    autologin_timeout: 10,
    autologin_user: null,
    can_hibernate: true,
    can_restart: true,
    can_shutdown: true,
    can_suspend: true,
    default_session: "default",
    has_guest_account: true,
    hide_users: false,
    hostname: "mock",
    in_authentication: false,
    is_authenticated: false,
    languages: [
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
    ],
    layouts: [],
    lock_hint: false,
    num_users: 2,
    select_guest_hint: false,
    select_user_hint: "michael",
    sessions: [
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
    ],
    users: [
        MockUser.newMock("Michael", "michael"),
        MockUser.newMock("Bob", "bob"),
    ],
    //promptedFor: null,

    authenticate(username?: string): void {
        console.log(`authenticate: currently -> ${this.in_authentication}`);
        this.in_authentication = true;
        //inAuthentication.update(() => true);
        if (username === undefined) {
            //this.promptedFor = PromptResult.Username;
            window.show_prompt("username", "text");
        } else {
            this.authentication_user = username;
            //this.promptedFor = PromptResult.Password;
            window.show_prompt("password", "password");
            /*let user = this.users.find(user => user.username === username);
            if (user === undefined) {
                throw new Error("User not found"); // todo
            } else {

            }*/
        }
    },

    authenticate_as_guest: () => {
        console.log("authenticate_as_guest was called");
    },

    cancel_authentication: () => {
        console.log("cancel_authentication was called");
    },

    cancel_autologin: () => {
        console.log("cancel_autologin was called");
    },

    get_hint(name?: string | number | boolean) {
        console.log("get_hint was called");
    },

    hibernate(): boolean {
        alert("hibernate");
        return true;
    },

    respond(response: any): void {
		console.log(`responded!`);
        /*if (this.promptedFor === PromptResult.Username) {
            this.authentication_user = response;
        } else if (this.promptedFor === PromptResult.Password) {
            isAuthenticated.update(() => response === MOCK_PASSWORD);
            inAuthentication.update(() => false);
            window.authentication_complete();
        } else {
            throw new Error("Not waiting for a response?");
        }*/
    },

    restart(): boolean {
        alert("restart");
        return true;
    },

    set_language(language: string): boolean {
        alert(`setting language as ${language}`);
        return true;
    },

    shutdown(): boolean {
        alert("shutdown");
        return true;
    },

    start_session_sync(session?: LightDM.Session): boolean {
        alert(`Logging in as '${this.authentication_user}' (Session: '${session}')`);
        return true;
    },

    suspend(): boolean {
        alert("suspend");
        return true;
    },
}

export const useLightDM = window.lightdm || mock;
