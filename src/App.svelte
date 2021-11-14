<script lang="ts">
	import routes from './router';
	import Router, { push } from 'svelte-spa-router'
	import Card from "./components/Card.svelte";
	import { splashscreenSeen } from "./store/LightDMStore";

	const toHome = () => {
		if ($splashscreenSeen) {
			window.lightdm.cancel_authentication();
			push("/select-user");
		} else {
			push("/");
		}
	}
</script>

<main>
	<p on:click={toHome}>Logo placeholder</p>
	<Card>
		<Router {routes} />
	</Card>
</main>

<style windi:preflights:global windi:safelist:global>
	:global(html) {
		@apply h-screen;
	}

	:global(body) {
		@apply bg-gradient-to-r from-primary to-secondary h-screen flex justify-center items-center;
	}

	main {
		width: 100%;
		max-width: 420px;
		@apply flex flex-col;
	}

	p {
		@apply text-center;
	}
</style>
