/**
 * Attribution: These typings for the LightDM API were 
 * copied from https://github.com/cdriehuys/lightdm-webkit-theme.
 */
interface Window {
    // Functions expected by lightdm-webkit-greeter
    authentication_complete(): void;
    autologin_timer_expired(): void;
    show_message(text: string, type: "error" | "info"): void;
    show_prompt(text: string, type: "text" | "password"): void;
  
    // Objects provided by lightdm-webkit-greeter
    config: LightDMConfig;
    greeterutil: LightDMUtil;
    lightdm: LightDM;
  }