/**
 * Attribution: These typings for the LightDM API were 
 * copied from https://github.com/cdriehuys/lightdm-webkit-theme.
 */
interface Window {
    // Functions expected by lightdm-webkit-greeter
    
    
    authentication_complete(): void;


    autologin_timer_expired(): void;

    /**
     * This will be called when LightDM needs to display some info for the user.  The "text" parameter will be the text of the message,
     * and the "type" parameter will either be "info" for an information message, or "error" for an error message that LightDM has
     * encountered.
     * 
     * @param text 
     * @param type 
     */
    show_message(text: string, type: "error" | "info"): void;

    /**
     * This will be called when LightDM needs to prompt the user for some reason, such as asking for a password.  The "text" parameter
     * will be the text of the prompt, and the "type" parameter will either be "text" for a visible prompt, or "password" for a prompt
     * that the input should be hidden.
     * 
     * @param text 
     * @param type 
     */
    show_prompt(text: string, type: "text" | "password"): void;
  
    // Objects provided by lightdm-webkit-greeter
    config: LightDMConfig;
    greeterutil: LightDMUtil;
    lightdm: LightDM;
  }