import type { GreeterConfig, LightDMLayout } from "nody-greeter-types";
import { LAYOUT_DE_CH, LAYOUT_EN_US, SESSION_DWM, SESSION_LEFTWM } from "./MockGreeter";

interface gc_branding {
    background_images_dir: string;
    logo: string;
    user_image: string;
}

interface gc_greeter {
    debug_mode: boolean;
    detect_theme_errors: boolean;
    screensaver_timeout: number;
    secure_mode: boolean;
    time_language: string;
    theme: string;
}

interface gc_features {
    battery: boolean;
    backlight: {
        enabled: boolean;
        value: number;
        steps: number;
    };
}

export class MockConfig implements GreeterConfig {
    get branding(): gc_branding {
        return {
            background_images_dir: "images/",
            logo: "images/archlinux-logo-text.svg",
            user_image: "images/avatar.png"
        }
    }
    get greeter(): gc_greeter {
        return {
            debug_mode: true,
            detect_theme_errors: false,
            screensaver_timeout: 120,
            secure_mode: true,
            theme: "my-theme", // todo: ??
            time_language: "" // todo: ??
        }
    }
    get features(): gc_features {
        return {
            backlight: {
                enabled: true,
                steps: 10,
                value: 100,
            },
            battery: true,
        }
    }
    get layouts(): LightDMLayout[] {
        return [LAYOUT_DE_CH, LAYOUT_EN_US];
    }
}
