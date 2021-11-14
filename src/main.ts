import { push } from 'svelte-spa-router';
import App from './App.svelte';
import { MockConfig } from './mock/MockConfig';
import { MockGreeter } from './mock/MockGreeter';
import { MockGreeterUtil } from './mock/MockGreeterUtil';

// mocks
if (!window.lightdm) {
	window.lightdm = new MockGreeter();
}
if (!window.greeterutil) {
	window.greeterutil = new MockGreeterUtil();
}
if (!window.config) {
	window.config = new MockConfig();
}

// methods the theme must provide
window.show_message = (msg: string) => {
	console.log(`message: ${msg}`);
};

window.show_prompt = (text: string, type: "text" | "password") => {
	console.log(`prompt (${type}): ${text}`);
	if (type === "password") {
		push('/login?message=' + text);
	} else {
		push('/user?message=' + text);
	}
};

window.authentication_complete = () => {
	console.log("authentication_complete");
	if (window.lightdm.is_authenticated) {
		window.lightdm.start_session_sync(); // todo
	} else {
		window.show_message("Authentication Failed", "error");
		window.lightdm.authenticate(window.lightdm.authentication_user);
	}
};

window.autologin_timer_expired = () => {
	console.log("autologin_timer_expired");
	// todo
};

const app = new App({
	target: document.body,
	props: {}
});

export default app;