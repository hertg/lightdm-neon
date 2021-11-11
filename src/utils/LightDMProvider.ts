import { MockGreeter } from "../mock/MockGreeter";

export const useLightDM = window.lightdm || new MockGreeter();
