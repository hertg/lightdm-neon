/*
interface LightDMGreeter {
    authentication_user: number // white N
    autologin_guest: boolean
    autologin_timeout: number // blue N
    autologin_user: number // white N
    can_hibernate: boolean
    can_restart: boolean
    can_shutdown: boolean
    can_suspend: boolean
    default_language: string
    default_layout: string
    default_session: string
    has_guest_account: boolean
    hide_users: boolean
    hostname: string
    in_authentication: boolean
    is_authenticated: boolean
    language: string
    languages: LightDMLanguage[]
    layout: string
    layouts: LightDMLayout[]
    lock_hint: boolean
    num_users: number // blue N
    select_guest: boolean
    select_guest_hint: boolean
    select_user: number // white N
    select_user_hint: number // white N
    session_starting: boolean
    sessions: LightDMSession[]
    start_authentication(username: string): void
    timed_login_delay: number // blue N
    timed_login_user: number // white N
    users: LightDMUser[]

    authenticate(username?: string): void;
    authenticate_as_guest(): void;
    cancel_authentication(): void;
    cancel_autologin(): void;
    get_hint(name?: string | boolean | number | null): any;
    hibernate(): boolean;
    respond(response: any): void;
    restart(): boolean;
    set_language(language: string): boolean;
    shutdown(): boolean;
    start_session_sync(session?: LightDM.Session | null): boolean;
    suspend(): boolean;
}

interface LightDMLanguage {
    name: string
    code: string
    territory: string
}

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
    image: number // white N
    language: number // white N
    layout: number // white N
    logged_in: boolean
    name: string
    real_name: string
    session: number // white N
    username: string
}
*/