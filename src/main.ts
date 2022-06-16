import { replace } from 'svelte-spa-router';
import { get } from 'svelte/store';
import App from './App.svelte';
import { selectedSession } from './store/LightDMStore';
import { notify } from './utils/Notification';
import './utils/Mock';

function initGreeter() {
	console.log("initialize lightdm greeter");

	window.lightdm?.show_prompt.connect((_text: string, type: number) => {
		console.log(`prompt (${type}): ${_text}`);
		if (type === 0) {
			replace('/user?message=' + _text);
		} else if (type === 1 && window.lightdm?.in_authentication) {
			replace('/login?message=' + _text);
		}
	});

	window.lightdm?.show_message.connect((text: string, type: number) => {
		console.log({ text, type });
		notify(text, type);
	});

	window.lightdm?.authentication_complete.connect(() => {
		console.log("authentication_complete");
		if (!window.lightdm?.is_authenticated) {
			//window.show_message("Authentication Failed", "error");
			window.lightdm.show_message._emit("Authentication Failed", "error");
			window.lightdm.authenticate(window.lightdm.authentication_user);
		} else {
			
			let s = get(selectedSession);
			setTimeout(() => {
				window.lightdm?.start_session(s ?? null);
			}, 2000);
			
		}
	});

	new App({
		target: document.body,
		props: {}
	});
};
  
window.addEventListener("GreeterReady", initGreeter);