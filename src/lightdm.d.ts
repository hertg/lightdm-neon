/**
 * Attribution: These typings for the LightDM API were 
 * copied from https://github.com/cdriehuys/lightdm-webkit-theme.
 */
interface LightDMLanguage {
    code: string;
    name: string;
  }
  
  interface LightDMSession {
    key: string;
    name: string;
  }
  
  interface LightDMUser {
    display_name: string;
    image?: string;
    username: string;
  }
  
  interface LightDM {
    authentication_user: null | string;
    autologin_guest: boolean;
    autologin_timeout: number;
    autologin_user: null | string;
    can_hibernate: boolean;
    can_restart: boolean;
    can_shutdown: boolean;
    can_suspend: boolean;
    default_session: null | string;
    has_guest_account: boolean;
    hide_users: boolean;
    hostname: string;
    is_authenticated: boolean;
    in_authentication: boolean;
    language: string;
    layout: string;
    layouts: object[];
    num_users: number;
    select_guest: boolean;
    select_user: null | string;
    sessions: LightDMSession[];
    users: LightDMUser[];
  
    authenticate(username: string): void;
    cancel_authentication(): void;
    /** Answer LightDM's most recent prompt for input. */
    respond(text: string): void;
    /** Start a session for the currently authenticated user. */
    start_session_sync(session?: string): void;
  
    // Power Management
    hibernate(): void;
    suspend(): void;
    restart(): void;
    shutdown(): void;
  }
  
  interface LightDMConfig {
    /**
     * Get a string config value.
     *
     * @param section The section containing the key to look up.
     * @param key The key of the value to retrieve.
     * @returns The string value of the config property.
     */
    get_str(section: string, key: string): string;
  }
  
  interface LightDMUtil {
    /**
     * List the contents of the given path.
     *
     * @param path The directory to search in.
     *
     * @returns An array containing the paths present in the provided directory,
     *          or `null` if the path doesn't exist.
     */
    dirlist(path: string): null | string[];
  }