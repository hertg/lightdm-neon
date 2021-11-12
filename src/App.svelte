<script lang="ts">
	import { onMount } from "svelte";
	import Greeter from "./components/Greeter.svelte";
	import { useLightDM } from "./utils/LightDMProvider";

	onMount(async () => {
		window.show_message = (msg: string) => {
			console.log(`message: ${msg}`);
		};
		window.show_prompt = (text: string, type: "text" | "password") => {
			console.log(`prompt (${type}): ${text}`);
		};
		window.authentication_complete = () => {
			console.log("authentication_complete");
			if (useLightDM.is_authenticated) {
				useLightDM.start_session_sync(); // todo
			} else {
				window.show_message("Authentication Failed", "error");
			}
		};

		window.autologin_timer_expired = () => {
			console.log("autologin_timer_expired");
		};
	});
</script>

<main>
	<Greeter />
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
