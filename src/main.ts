import { replace } from 'svelte-spa-router';
import { get } from 'svelte/store';
import App from './App.svelte';
import { MockConfig } from './mock/MockConfig';
import { MockGreeter } from './mock/MockGreeter';
import { MockThemeUtils } from './mock/MockThemeUtils';
import { selectedSession } from './store/LightDMStore';
import { notify } from './utils/Notification';

// mocks
if (!window.lightdm) {
	window.lightdm = new MockGreeter();
}
if (!window.theme_utils) {
	window.theme_utils = new MockThemeUtils();
}
if (!window.greeter_config) {
	window.greeter_config = new MockConfig();
}

// methods the theme must provide
window.show_message = (msg: string, type: "error" | "info") => {
	console.log(`message: ${msg}`);
	notify(msg, type);
};

window.show_prompt = (text: string, type: "text" | "password") => {
	console.log(`prompt (${type}): ${text}`);
	if (type === "password") {
		replace('/login?message=' + text);
	} else {
		replace('/user?message=' + text);
	}
};

window.authentication_complete = () => {
	console.log("authentication_complete");
	if (window.lightdm.is_authenticated) {	
		let s = get(selectedSession);
		window.lightdm.start_session(s); // todo
	} else {
		window.show_message("Authentication Failed", "error");
		window.lightdm.authenticate(window.lightdm.authentication_user);
	}
};

window.autologin_timer_expired = () => {
	console.log("autologin_timer_expired");
	// todo
};

async function initGreeter(): Promise<void> {
	if (window.greeter_config?.greeter.debug_mode) {

	}

	
}

window.addEventListener("GreeterReady", () => {

})

const app = new App({
	target: document.body,
	props: {}
});

export default app;