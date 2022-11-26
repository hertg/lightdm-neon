// original source: https://raw.githubusercontent.com/JezerM/lightdm-void-theme/master/src/utils/mock.ts

import type {
    Signal as SignalClass,
    Greeter as GreeterClass,
    GreeterConfig as GreeterConfigClass,
    ThemeUtils as ThemeUtilsClass,
    LightDMBattery,
} from "nody-greeter-types";

export class LightDMLanguage {
    code: string;
    name: string;
    territory: string;
    constructor(code: string, name: string, territory: string) {
        this.code = code;
        this.name = name;
        this.territory = territory;
    }
}

export class LightDMLayout {
    name: string;
    description: string;
    short_description: string;
    constructor(name: string, description: string, short_description: string) {
        this.name = name;
        this.description = description;
        this.short_description = short_description;
    }
}

export class LightDMUser {
    background = "";
    display_name: string;
    home_directory: string;
    image: string;
    language = "";
    layout = "";
    layouts: string[] = [];
    logged_in = false;
    session: string;
    username: string;

    constructor(
        username: string,
        display_name: string,
        image: string,
        session?: string
    ) {
        this.username = username;
        this.display_name = display_name;
        this.image = image;
        this.home_directory = "/home/" + username + "/";
        this.session = session ?? "";
    }
}

export class LightDMSession {
    key: string;
    name: string;
    type: string;
    comment: string;
    constructor(key: string, name: string, comment?: string, type?: string) {
        this.key = key;
        this.name = name;
        this.comment = comment ?? "";
        this.type = type ?? "X";
    }
}

export class Signal implements SignalClass {
    _name: string;
    _callbacks: ((...args: unknown[]) => void)[] = [];

    constructor(name: string) {
        this._name = name;
    }

    connect(callback: (...args: any[]) => void): void {
        if (typeof callback !== "function") return;
        this._callbacks.push(callback);
    }

    disconnect(callback: () => void): void {
        const ind = this._callbacks.findIndex((cb) => {
            return cb === callback;
        });
        if (ind == -1) return;
        this._callbacks.splice(ind, 1);
    }

    _emit(...args: unknown[]): void {
        this._callbacks.forEach((cb) => {
            if (typeof cb !== "function") return;
            cb(...args);
        });
    }
}

export class Greeter implements GreeterClass {
    is_mock = true;
    mock_password = "mock";

    authentication_complete = new Signal("authentication_complete");
    autologin_timer_expired = new Signal("autologin_timer_expired");
    idle = new Signal("idle");
    reset = new Signal("reset");
    show_message = new Signal("show_message");
    show_prompt = new Signal("show_prompt");
    brightness_update = new Signal("show_message");
    battery_update = new Signal("battery_update");

    authentication_user: string | null = null;
    autologin_guest = false;
    autologin_timeout = 0;
    autologin_user = "";

    private _battery: LightDMBattery = {
        name: "BAT0",
        level: 85,
        status: "Discharging",
        ac_status: false,
        time: "00:00",
        capacity: 100,
        watt: 0,
    };
    get battery_data(): LightDMBattery {
        return this._battery;
    }
    get batteryData(): LightDMBattery {
        return this._battery;
    }

    private _brightness = 50;
    get brightness(): number {
        return this._brightness;
    }
    set brightness(quantity: number) {
        if (quantity < 0) quantity = 0;
        else if (quantity > 100) quantity = 100;
        this._brightness = quantity;
        this.brightness_update._emit();
    }

    can_access_battery = true;
    can_access_brightness = true;
    can_hibernate = true;
    can_restart = true;
    can_shutdown = true;
    can_suspend = true;

    default_session = "awesome";
    has_guest_account = false;
    hide_users_hint = false;
    hostname = "mock-PC";
    in_authentication = false;
    is_authenticated = false;

    language: LightDMLanguage | null = null;
    languages: LightDMLanguage[] = [
        new LightDMLanguage("en_US.utf8", "English", "USA"),
        new LightDMLanguage("ca_ES.utf8", "Catalan", "Spain"),
        new LightDMLanguage("fr_FR.utf8", "French", "France"),
        new LightDMLanguage("es_NI.utf8", "Spanish", "Nicaragua"),
    ];
    layout = new LightDMLayout("us", "English (US)", "en");
    layouts = [
        new LightDMLayout("us", "English (US)", "en"),
        new LightDMLayout("latam", "Español (Latinoamericano)", "es"),
        new LightDMLayout("at", "German (Austria)", "de"),
        new LightDMLayout("us rus", "Russian (US, phonetic)", "ru"),
    ];
    lock_hint = false;
    remote_sessions = [];
    select_guest_hint = false;
    select_user_hint = "";
    sessions = [
        new LightDMSession(
            "awesome",
            "Awesome wm",
            "Highly configurable framework window manager"
        ),
        new LightDMSession("ubuntu", "Ubuntu", "This session starts Ubuntu"),
        new LightDMSession("plasma", "Plasma (X11)", "Plasma, by KDE"),
        new LightDMSession("mate", "MATE", "This session logs you into MATE"),
        new LightDMSession(
            "cinnamon",
            "Cinnamon",
            "This session logs you into Cinnamon"
        ),
        new LightDMSession(
            "leftwm",
            "LeftWM",
            "A tiling window manager for Adventurers"
        ),
    ];
    show_manual_login_hint = true;
    show_remote_login_hint = false;
    users = [
        new LightDMUser("superman", "Clark Kent", "assets/img/avatar.png", "ubuntu"),
        new LightDMUser("batman", "Bruce Wayne", "", "cinnamon"),
        new LightDMUser("spiderman", "Peter Parker", "", "awesome"),
    ];

    authenticate(username: string | null) {
        if (username !== null && this.users.find(u => u.username === username) === undefined) {
            this.show_message._emit("Unknown username", 1);
            return false;
        }
        this.authentication_user = username;
        this.in_authentication = true;
        if (username == null) {
            this.show_prompt._emit("login:", 0);
        } else {
            this.show_prompt._emit("password:", 1);
        }
        return true;
    }

    authenticate_as_guest() {
        return false;
    }

    brightnessSet(quantity: number) {
        this.brightness = quantity;
    }
    brightnessIncrease(quantity: number) {
        this.brightness += quantity;
    }
    brightnessDecrease(quantity: number) {
        this.brightness -= quantity;
    }
    brightness_set(quantity: number) {
        this.brightness = quantity;
    }
    brightness_increase(quantity: number) {
        this.brightness += quantity;
    }
    brightness_decrease(quantity: number) {
        this.brightness -= quantity;
    }

    cancel_authentication() {
        this.authentication_user = null;
        this.in_authentication = false;
        return true;
    }
    cancel_autologin() {
        return true;
    }

    hibernate() {
        alert('hibernate');
        return true;
    }
    restart() {
        alert('restart');
        return true;
    }
    shutdown() {
        alert('shutdown')
        return true;
    }
    suspend() {
        alert('suspend');
        return true;
    }
    respond(response: string) {
        if (!this.in_authentication) return false;
        if (this.authentication_user == null) {
            this.authentication_user = response;
            this.show_prompt._emit("Password: ", 1);
        } else {
            if (response === this.mock_password) {
                setTimeout(() => {
                    this.is_authenticated = true;
                    this.in_authentication = false;
                    this.authentication_complete._emit();
                }, 250);
            } else {
                setTimeout(() => {
                    this.is_authenticated = false;
                    this.authentication_complete._emit();
                    this.show_prompt._emit("Password: ", 1);
                }, 1000);
            }
        }
        return true;
    }

    set_language(language: string): boolean {
        if (this.is_authenticated) {
            this.language =
                this.languages.find((v) => {
                    return v.code == language;
                }) ?? null;
            return this.language != null;
        }
        return false;
    }
    start_session(session: string | null): boolean {
        let s = session ?? this.default_session;
        alert(`starting '${s}' session`);
        return true;
    }
}

export class GreeterConfig implements GreeterConfigClass {
    branding = {
        background_images_dir: "/usr/share/backgrounds",
        logo: "file:///usr/share/web-greeter/themes/svelte/images/logo.png",
        user_image: "assets/img/avatar.png",
    };

    greeter = {
        debug_mode: true,
        detect_theme_errors: true,
        screensaver_timeout: 300,
        secure_mode: true,
        time_language: "de",
        theme: "none",
    };

    layouts = [
        new LightDMLayout("us", "English (US)", "en"),
        new LightDMLayout("latam", "Español (Latinoamericano)", "es"),
        new LightDMLayout("at", "German (Austria)", "de"),
        new LightDMLayout("us rus", "Russian (US, phonetic)", "ru"),
    ];

    features = {
        battery: true,
        backlight: {
            enabled: true,
            value: 10,
            steps: 0,
        },
    };
}

let time_language = "";
export class ThemeUtils implements ThemeUtilsClass {
    bind_this(context: Record<string, any>) {
        const excluded_methods = ["constructor"];

        function not_excluded(_method: string, _context: Record<string, unknown>) {
            const is_excluded =
                excluded_methods.findIndex(
                    (excluded_method) => _method === excluded_method
                ) > -1,
                is_method = "function" === typeof _context[_method];

            return is_method && !is_excluded;
        }

        for (let obj = context; obj; obj = Object.getPrototypeOf(obj)) {
            // Stop once we have traveled all the way up the inheritance chain
            if ("Object" === obj.constructor.name) {
                break;
            }

            for (const method of Object.getOwnPropertyNames(obj)) {
                if (not_excluded(method, context)) {
                    context[method] = context[method].bind(context);
                }
            }
        }

        return context;
    }
    dirlist(
        path: string,
        only_images = true, // eslint-disable-line
        callback: (files: string[]) => void
    ) {
        if ("" === path || "string" !== typeof path) {
            console.error(`theme_utils.dirlist(): path must be a non-empty string!`);
            return callback([]);
        }
        if (null !== path.match(/\/\.+(?=\/)/)) {
            // No special directory names allowed (eg ../../)
            path = path.replace(/\/\.+(?=\/)/g, "");
        }

        let response = [];
        if (path.startsWith("/usr/share/web-greeter/themes/neon/")) {
            response = [
                "assets/img/backgrounds/arcade.jpg",
                "assets/img/backgrounds/canyon.jpg",
                "assets/img/backgrounds/computer.jpg",
                "assets/img/backgrounds/paper.jpg",
                "assets/img/backgrounds/plants.jpg",
                "assets/img/backgrounds/purple.jpg",
                "assets/img/backgrounds/splashes.jpg",
                "assets/img/backgrounds/supermarket.jpg",
                "assets/img/backgrounds/urban.jpg"
            ];
        }

        try {
            // Should be changed here
            return callback(response);
        } catch (err) {
            console.error(`theme_utils.dirlist(): ${err}`);
            return callback([]);
        }
    }
    // eslint-disable-next-line
    dirlist_sync(path: string, images_only = true): string[] {
        return [];
    }

    get_current_localized_date() {
        const config = window.greeter_config?.greeter;
        const locale = [];

        if (time_language === null) {
            time_language = config?.time_language || "";
        }
        if (time_language != "") {
            locale.push(time_language);
        }

        const optionsDate: Intl.DateTimeFormatOptions = { day: "2-digit", month: "2-digit", year: "2-digit" };
        const fmtDate = Intl.DateTimeFormat(locale, optionsDate);
        return fmtDate.format(new Date());
    }
    get_current_localized_time() {
        const config = window.greeter_config?.greeter;
        const locale = [];

        if (time_language === null) {
            time_language = config?.time_language || "";
        }
        if (time_language != "") {
            locale.push(time_language);
        }

        const optionsTime: Intl.DateTimeFormatOptions = { hour: "2-digit", minute: "2-digit" };
        const fmtDate = Intl.DateTimeFormat(locale, optionsTime);
        return fmtDate.format(new Date());
    }
}

if (window._ready_event == undefined) {
    console.debug("lightdm not found, api will be mocked");
    window.lightdm = new Greeter();
    window.greeter_config = new GreeterConfig();
    window.theme_utils = new ThemeUtils();
    window._ready_event = new Event("GreeterReady");
    window.is_mocked = true;
    window.addEventListener("DOMContentLoaded", () => {
        setTimeout(() => {
            if (window._ready_event) window.dispatchEvent(window._ready_event);
        }, 2);
    });
}
