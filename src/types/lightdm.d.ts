// Properties and descriptions have been extracted from manpage `man lightdm-webkit2-greeter`.
// Additional info in original source code: 
// https://github.com/Antergos/web-greeter/blob/9252419d8d2821a89dd62b753f3088190acdd741/web-greeter/bridge/Greeter.py

interface LightDMGreeter {
    /**
     * The username of the authentication user being authenticated or
     * null if no authentication is in progress.
     */
    readonly authentication_user: string | null;

    /**
     * Indicates the guest user should be used for autologin.
     */
    readonly autologin_guest: boolean;

    /**
     * The number of seconds to wait before automatically logging in.
     * The older variable lightdm.timed_user_delay has been deprecated.
     */
    readonly autologin_timeout: number;

    /**
     * The name of the user account that should be logged into automatically after timed login delay has passed. 
     * The older variable lightdm.timed_login_user has been deprecated.
     */
    readonly autologin_user: string | null;

    /**
     * Whether or not the system can be made to hibernate by the greeter.
     */
    readonly can_hibernate: boolean;

    /**
     * Whether or not the system can be restarted by the greeter.
     */
    readonly can_restart: boolean;

    /**
     * Whether or not the system can be shutdown by the greeter.
     */
    readonly can_shutdown: boolean;

    /**
     * Whether or not the system can be suspended by the greeter.
     */
    readonly can_suspend: boolean;

    /**
     * @deprecated Use lightdm.language instead
     */
    readonly default_language: string;

    /**
     * @deprecated Use lightdm.layout instead
     */
    readonly default_layout: string;

    /**
     * The name of the default session (as configured in lightdm.conf).
     */
    readonly default_session: string;

    /**
     * A guest account is available for login.
     */
    readonly has_guest_account: boolean;
    
    /**
     * The whole list of users should not be displayed.
     */
    readonly hide_users: boolean;

    /**
     * The hostname of the system.
     */
    readonly hostname: string;

    /**
     * Indicates if lightdm is currently in the authentication phase.
     */
    readonly in_authentication: boolean;

    /**
     * Indicates if the user has successfully authenticated.
     */
    readonly is_authenticated: boolean;

    /**
     * The currently selected language. The older variable name lightdm.default_language is deprecated.
     */
    readonly language: string;

    // todo
    //languages: LightDMLanguage[]

    /**
     * The name of the currently active keyboard layout. 
     * To change the layout, assign a valid layout name to this variable. 
     * The older variable name lightdm.default_layout is deprecated.
     */
    readonly layout: string;

    /**
     * The keyboard layouts that are available on the system. Returns an Array of LightDMLayout objects.
     */
    readonly layouts: LightDMLayout[];

    // todo
    //lock_hint: boolean

    /**
     * The number of users able to log in.
     */
    readonly num_users: number;

    /**
     * The guest user should be selected by default for login.
     */
    readonly select_guest: boolean;

    // todo
    //select_guest_hint: boolean

    /**
     * The username that should be selected by default for login.
     */
    readonly select_user: string | null;

    // todo
    //select_user_hint: string | null // white N
    
    // todo
    //session_starting: boolean

    /**
     * The sessions that are available on the system. 
     * Returns an Array of LightDMSession objects.
     */
    readonly sessions: LightDMSession[];

    /**
     * @deprecated Use lightdm.authenticate() instead
     * @param username 
     */
    start_authentication(username: string): void;
    
    // todo
    //timed_login_delay: number

    // todo
    //timed_login_user: string | null
    
    /**
     * The users that are able to log in. Returns an Array of LightDMUser objects.
     */
    readonly users: LightDMUser[];

    /**
     * Specifies the username of the user we'd like to start authenticating as. 
     * Note that if you call lightdm.authenticate with no argument, LightDM (via PAM) 
     * will issue a show_prompt() call to ask for the username. 
     * The older function lightdm.start_authentication() has been deprecated.
     * 
     * @param username 
     */
    authenticate(username?: string): void;

    /**
     * Authenticates as the guest user.
     */
    authenticate_as_guest(): void;

    /**
     * Cancels the authentication of any user currently in the process of authenticating.
     */
    cancel_authentication(): void;

    /**
     * Cancels the authentication of the autologin user. 
     * The older function lightdm.cancel_timed_login() has been deprecated.
     */
    cancel_autologin(): void;

    /**
     * Returns the value of a named hint provided by LightDM.
     * 
     * @param name 
     */
    get_hint(name?: string | boolean | number | null): any;
    
    /**
     * Hibernates the system, if the greeter has the authority to do so.
     */
    hibernate(): void;

    /**
     * When LightDM has prompted for input, provide the response to LightDM. 
     * The deprecated function was "provide_secret". This is still available for 
     * backwards compatibility, but authors of greeters should move to using lightdm.respond().
     * 
     * @param response 
     */
    respond(response: any): void;

    /**
     * Restarts the system, if the greeter has the authority to do so.
     */
    restart(): void;

    /**
     * Will set the language for the current LightDM session.
     * @param language 
     */
    set_language(language: string): void;

    /**
     * Shuts down the system, if the greeter has the authority to do so.
     */
    shutdown(): void;

    /**
     * Once LightDM has successfully authenticated the user, start the user's 
     * session by calling this function. "session" is the authenticated user's session. 
     * If no session is passed, start the authenticated user with the system default session. 
     * The older function lightdm.login(user, session) has been deprecated.
     * 
     * @param session 
     */
    start_session_sync(session?: LightDM.Session | null): void;

    /**
     * Suspends the system, if the greeter has the authority to do so.
     */
    suspend(): void;
}

interface LightDMLanguage {
    name: string
    code: string
    territory: string
}

// keyboard layout
interface LightDMLayout {
    description: string
    name: string
    short_description: string
}

interface LightDMSession {
    name: string
    key: string
    comment: string
}

interface LightDMUser {
    display_name: string
    home_directory: string
    image: string | null
    language: string | null
    layout: string | null
    logged_in: boolean
    name: string
    real_name: string
    session: string | null
    username: string
}

interface LightDMConfig {
    /**
     * Returns the string value associated with key 
     * under the "section" in the configuration file.
     * 
     * @param section 
     * @param key 
     */
    get_str(section: string, key: string): string;

    /**
     * Returns the numeric value associated with key 
     * under the "section" in the configuration file.
     * 
     * @param section 
     * @param key 
     */
    get_num(section: string, key: string): number;

    /**
     * Returns the boolean value associated with key 
     * under the "section" in the configuration file.
     * 
     * @param section 
     * @param key 
     */
    get_bool(section: string, key: string): boolean;
}

interface LightDMUtil {
    /**
     * Returns an array of strings of filenames present at "path", 
     * or Null if the path does not exist.
     * @param path 
     */
    dirlist(path: string): string[] | null;

    /**
     * Returns a simple HTML conversion of the passed text. 
     * Newlines are replaced with <br>, and the characters &, <, >, and " are 
     * replaced with their HTML equivalents.
     * 
     * @param txt 
     */
    txt2html(txt: string): HTML;
}
