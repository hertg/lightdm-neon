import { localStore } from "./localStore";

export enum SignFont {
    Neonderthaw = "Neonderthaw",
    Neoneon = "Neoneon",
    Beon = "Beon",
    HigherMonday = "Higher Monday",
    Selfie = "Selfie",
    Hastron = "Hastron",
    NeonSans = "Neon Sans"
}

export class ThemeSettings {
    background_image: string;
    background_blur: boolean;
    skip_splashscreen: boolean;
    sign: {
        text: string;
        font: SignFont;
        flicker: boolean;
        show_clock: boolean;
    }
    colors: {
        accent_color: string;
    };
}

const initialSettings: ThemeSettings = {
    background_image: null,
    background_blur: true,
    skip_splashscreen: false,
    sign: {
        text: "hello neon",
        font: SignFont.Neonderthaw,
        flicker: false,
        show_clock: false,
    },
    colors: {
        accent_color: '#FF008E'
    }
}

export const themeSettings = localStore('settings', initialSettings);