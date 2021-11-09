import App from './App.svelte';
import { mock } from './mock';

if (window.lightdm === undefined) {
	mock();
}

window.show_prompt = (text, type) => {
	let answer = prompt(text);
	window.lightdm.respond(answer);
}

window.show_message = (text, type) => {
	alert(type + ": " + text);
}

window.authentication_complete = () => {
	console.log("authentication_complete");
	if (window.lightdm.is_authenticated) {
		window.lightdm.start_session_sync("leftwm"); // todo
	} else {
		window.show_message("Authentication Failed", "error");
		
	}	
}

window.autologin_timer_expired = () => {
	console.log("autologin_timer_expired");
}

const app = new App({
	target: document.body,
	props: {
		name: 'world'
	}
});

export default app;