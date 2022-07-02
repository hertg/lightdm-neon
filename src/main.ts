import App from './App.svelte';
import './utils/mock';
import { connectSignals } from './signals';
import { MyTheme } from './theme';
import { selectedSession } from './store/runtime';

function initGreeter() {
	console.debug("the web greeter is ready, initializing...");
	console.debug("lightdm", window.lightdm);
	console.debug("greeter_config", window.greeter_config);
	window.theme = new MyTheme();
	connectSignals();
	new App({
		target: document.body,
		props: {}
	});
	let default_session: string = window.lightdm.default_session;
	if (!default_session) {
		if (window.lightdm.sessions.length > 0) {
			default_session = window.lightdm.sessions[0].key;
		} else {
			console.warn("no session found to choose from?");
		}
	}
	console.debug(`default_session is '${default_session}'`);
	selectedSession.update(_ => default_session);
};
  
window.addEventListener("GreeterReady", initGreeter);