<script lang="ts">
	import { onMount } from "svelte";
	import { navigateTo, Router } from 'svelte-router-spa';
	import { routes } from './router';

	onMount(async () => {
		window.show_message = (msg: string) => {
			console.log(`message: ${msg}`);
		};
		window.show_prompt = (text: string, type: "text" | "password") => {
			console.log(`prompt (${type}): ${text}`);
			if (type === "password") {
				navigateTo('login');
			} else {

			}
		};
		window.authentication_complete = () => {
			console.log("authentication_complete");
			if (window.lightdm.is_authenticated) {
				window.lightdm.start_session_sync(); // todo
			} else {
				window.show_message("Authentication Failed", "error");
			}
		};

		window.autologin_timer_expired = () => {
			console.log("autologin_timer_expired");
		};
	});
</script>

<h1>LightDM</h1>
<Router {routes}></Router>

<style windi:preflights:global windi:safelist:global>
	h1 {
		@apply text-red-500;
	}

	:global(body) {
		@apply bg-gray-300;
	}
</style>
