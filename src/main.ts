import App from './App.svelte';
import { useLightDM } from './utils/LightDMProvider';

window.show_prompt = (text, type) => {
	/*if (type === "text") {

	} else {

	}
	console.log(useLightDM.in_authentication);
	let answer = prompt(text);
	useLightDM.respond(answer);
	console.log(useLightDM.in_authentication);*/
	console.log(`show_prompt ${text} ${type}`);
}

window.show_message = (text, type) => {
	alert(type + ": " + text);
}

window.authentication_complete = () => {
	console.log("authentication_complete");
	if (useLightDM.is_authenticated) {
		useLightDM.start_session_sync(); // todo
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