export class MockConfig implements LightDMConfig {
    
    get_str(section: string, key: string): string {
        if (section === "branding") {
            switch (key) {
                case "logo": {
                    return "images/archlinux-logo-text.svg";
                }
                case "user_image": {
                    return "images/avatar.png";
                }
                case "background_images": {
                    return "images/";
                }
                case "background": {
                    return "../images/background.jpg";
                }
                default: {
                    return null;
                }
            };
        }
        return null;
    }
    get_num(section: string, key: string): number {
        throw new Error("Method not implemented.");
    }
    get_bool(section: string, key: string): boolean {
        throw new Error("Method not implemented.");
    }

}