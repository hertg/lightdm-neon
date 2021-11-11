/**
 * Attribution: These typings for the LightDM API were 
 * copied from https://github.com/cdriehuys/lightdm-webkit-theme.
 */
interface Window {
    // Functions expected by lightdm-webkit-greeter
    
    /**
     * This function is called by LightDM when authentication has completed.
     */
    authentication_complete(): void;

    /**
     * This function is called by LightDM when an autologin user's login timer has expired. 
     * The greeter should reset the authentication process.
     */
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
    config: LightDM.GreeterConfig;
    greeterutil: LightDM.ThemeUtils;
    lightdm: LightDM.Greeter;
    /*config: LightDMConfig;
    greeterutil: LightDMUtil;
    lightdm: LightDM;*/
  }