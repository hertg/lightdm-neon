import App from './App.svelte';
import './utils/Mock';
import { connectSignals } from './signals';
import { MyTheme } from './theme';

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

	/*window.theme_utils.dirlist("/usr/share/web-greeter/themes/svelte/images", true, (files) => {
		console.log(files);
	});

	window.theme_utils.dirlist(window.greeter_config.branding.background_images_dir, true, (files) => {
		console.log(files);
	});*/

	
};
  
window.addEventListener("GreeterReady", initGreeter);