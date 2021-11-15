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
            display_name: "Michael",
            home_directory: "/home/michael",
            image: "images/avatar-michael.png",
            language: null,
            layout: null,
            logged_in: false,
            name: "michael",
            real_name: "",
            session: "leftwm",
            username: "michael",
        },
        {
            display_name: "Bob",
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
            this.promptedFor = PromptType.USERNAME;
            window.show_prompt("Login:", "text");
        } else {
            let user = this.users.find(o => o.username === username);
            if (user) {
                this.authentication_user = username;
                this.promptedFor = PromptType.PASSWORD;
                window.show_prompt("Password:", "password");
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
                this.promptedFor = PromptType.PASSWORD;
                window.show_prompt("enter password", "password");
            } else {
                console.error(`the user ${username} doesn't exist`);
                window.show_message("this user doesn't exist", "error");
            }
        } else if (this.promptedFor === PromptType.PASSWORD) {
            let password: string = response;
            if (password === PASSWORD) {
                this.is_authenticated = true;
                this.in_authentication = false;
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
    start_session_sync(session?: any): void {
        console.debug(`start_session_sync(${session}) was called!`);
        alert("You are now logged in!");
    }
    suspend(): void {
        console.debug(`suspend() was called!`);
        alert("suspend!");
    }

    private promptedFor: PromptType = null;
    
}
