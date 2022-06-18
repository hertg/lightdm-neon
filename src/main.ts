import { replace } from 'svelte-spa-router';
import { get } from 'svelte/store';
import App from './App.svelte';
import { selectedSession } from './store/LightDMStore';
import { notify } from './utils/Notification';
import './utils/Mock';
import { asset } from './utils/Assets';

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
			window.lightdm.show_message._emit("Authentication Failed", "error");
			window.lightdm.authenticate(window.lightdm.authentication_user);
		} else {
			let s = get(selectedSession);
			setTimeout(() => {
				window.lightdm?.start_session(s ?? null);
			}, 500);
		}
	});

	window.theme_utils.dirlist("/usr/share/web-greeter/themes/svelte/images", true, (files) => {
		console.log(files);
	});

	window.theme_utils.dirlist(window.greeter_config.branding.background_images_dir, true, (files) => {
		console.log(files);
	});

	console.log(window.lightdm.users);
	console.log(asset("./images/background.jpg"))

	new App({
		target: document.body,
		props: {}
	});
};
  
window.addEventListener("GreeterReady", initGreeter);