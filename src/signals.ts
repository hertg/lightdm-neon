import { replace } from "svelte-spa-router";
import { get } from "svelte/store";
import { selectedSession } from "./store/runtime";
import type { Theme } from "./theme";
import { notify } from "./utils/Notification";

export const connectSignals = () => {
    console.debug(`connecting to lightdm signals using theme`, window.theme);

    window.lightdm?.show_prompt.connect((message: string, type: number) => {
		console.debug(`prompt: ${message} (${type})`);
		if (type === 0) {
            window.theme.on_user_prompt(message);
		} else if (type === 1) {
            window.theme.on_password_prompt(message);
		} else {
			throw new Error("unhandled prompt");
		}
	});

	window.lightdm?.show_message.connect((message: string, type: number) => {
		console.debug(`show_message: ${message} (${type})`);
		window.theme.on_show_message(message, type);
	});

	window.lightdm?.authentication_complete.connect(() => {
		console.debug("authentication_complete");
		if (!window.lightdm?.is_authenticated) {
			window.lightdm.show_message._emit("Authentication Failed", "error");
			window.lightdm.authenticate(window.lightdm.authentication_user);
		} else {
			let s = get(selectedSession);
			window.lightdm?.start_session(s ?? null);
		}
	});
}