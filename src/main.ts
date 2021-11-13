import App from './App.svelte';
import { MockConfig } from './mock/MockConfig';
import { MockGreeter } from './mock/MockGreeter';
import { MockGreeterUtil } from './mock/MockGreeterUtil';
import { config, greeterutil, lightdm } from './utils/LightDMProvider';

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

const app = new App({
	target: document.body,
	props: {}
});

export default app;