import { localStore } from "./localStore";

export class ThemeSettings {
    background_image: string;
    colors: {
        accent_color: string;
    };
}

const initialSettings: ThemeSettings = {
    background_image: null,
    colors: {
        accent_color: '#6667AB'
    }
}

export const themeSettings = localStore('settings', initialSettings);