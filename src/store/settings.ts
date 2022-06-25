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
    sign: {
        text: string;
        font: SignFont;
        flicker: boolean;
    }
    colors: {
        accent_color: string;
    };
}

const initialSettings: ThemeSettings = {
    background_image: null,
    sign: {
        text: "hello neon",
        font: SignFont.Neonderthaw,
        flicker: false
    },
    colors: {
        accent_color: '#f71111'
    }
}

export const themeSettings = localStore('settings', initialSettings);