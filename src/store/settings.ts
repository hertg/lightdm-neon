import { localStore } from "./localStore";

export class ThemeSettings {
    background_image: string;
    sign: {
        text: string;
        pulsate: boolean;
    }
    colors: {
        accent_color: string;
    };
}

const initialSettings: ThemeSettings = {
    background_image: null,
    sign: {
        text: "hello neon",
        pulsate: false
    },
    colors: {
        accent_color: '#6667AB'
    }
}

export const themeSettings = localStore('settings', initialSettings);