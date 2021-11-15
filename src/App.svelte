<script lang="ts">
	import routes from './router';
	import Router, { push } from 'svelte-spa-router'
	import Card from "./components/Card.svelte";
	import { splashscreenSeen } from "./store/LightDMStore";
	import Notifications from './components/Notifications.svelte';

	const logoUrl: string = window.config.get_str("branding", "logo");
	const background: string = window.config.get_str("branding", "background");

	const toHome = () => {
		if ($splashscreenSeen) {
			window.lightdm.cancel_authentication();
			push("/select-user");
		} else {
			push("/");
		}
	}
</script>

<div id="wrapper" style="--bg-image: url('{background}')">
	<main>
		<img src="{logoUrl}" alt="logo" on:click={toHome} />
		<Card>
			<Router {routes} />
		</Card>
	</main>
	<Notifications />
</div>


<style windi:preflights:global windi:safelist:global>
	:global(html) {
		@apply h-screen;
	}

	#wrapper {
		/*bg-gradient-to-r from-primary to-secondary */
		@apply h-screen flex justify-center items-center bg-cover bg-center;
		background-image: var(--bg-image);
		/*background-image: url('/images/background.jpg');*/
	}

	main {
		width: 100%;
		max-width: 420px;
		@apply flex flex-col;
	}

	img {
		@apply text-center;
		cursor: pointer;
	}
</style>
