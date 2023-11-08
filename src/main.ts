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

	let default_session: string = computeDefaultSession();
	console.debug(`session being used is '${default_session}'`);
	selectedSession.update(_ => default_session);
};

function computeDefaultSession(): string {
    let from_config = window.lightdm.default_session;

    if (from_config) {
        if (window.lightdm.sessions.find(k => k.key === from_config)) {
            console.debug(`default session '${from_config}' configured, using it`);
            return from_config;
        } else {
            if (window.lightdm.sessions.length > 0) {
                console.warn(`default session '${from_config}' not found, using first session`);
                return window.lightdm.sessions[0].key;
            } else {
                console.warn(`default session '${from_config}' not found, but also no sessions available to fallback to, attempting to use it anyway`)
                return from_config;
            }
        }
    }

    if (window.lightdm.sessions.length > 0) {
        console.debug("no default session configured, using first session");
        return window.lightdm.sessions[0].key;
    } else {
        console.warn("no default session configured, and no sessions available to fallback to, using 'null'");
        return null;
    }
}
  
window.addEventListener("GreeterReady", initGreeter);
