import { get } from "svelte/store";
import { authenticating, selectedSession } from "./store/runtime";
import { notify } from "./utils/notification";

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
		authenticating.update(_ => false);
		if (!window.lightdm?.is_authenticated) {
			notify("Authentication Failed", 1);
			window.lightdm.authenticate(window.lightdm.authentication_user);
		} else {
			console.debug("authentication successful, start session");
			let s = get(selectedSession);
			window.lightdm?.start_session(s ?? null);
		}
	});
}