<script lang="ts">
	import { onMount } from "svelte";
	import routes from './router';
	import { push } from 'svelte-spa-router'
	import Router from 'svelte-spa-router'
	import Card from "./components/Card.svelte";

	onMount(async () => {
		window.show_message = (msg: string) => {
			console.log(`message: ${msg}`);
		};

		window.show_prompt = (text: string, type: "text" | "password") => {
			console.log(`prompt (${type}): ${text}`);
			if (type === "password") {
				push('/login');
			} else {
				push('/user');
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
		};
	});
</script>

<main>
	<Card>
		<Router {routes} />
	</Card>
</main>

<style windi:preflights:global windi:safelist:global>
	:global(html) {
		@apply h-screen;
	}

	:global(body) {
		@apply bg-gradient-to-r from-green-400 to-blue-500 h-screen flex justify-center items-center;
	}

	main {
		width: 100%;
		max-width: 620px;
		/*@apply container;*/
	}
</style>
