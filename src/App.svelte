<script lang="ts">
	import routes from './router';
	import Router, { push, replace } from 'svelte-spa-router'
	import Card from "./components/Card.svelte";
	import { splashscreenSeen } from "./store/LightDMStore";
	import Notifications from './components/Notifications.svelte';
	import WmSelect from './pages/WMSelect.svelte';

	const logoUrl: string = window.greeter_config.branding.logo;
	const background: string = window.greeter_config.branding.background;

	const toHome = () => {
		if ($splashscreenSeen) {
			window.lightdm.cancel_authentication();
			replace("/select-user");
		} else {
			replace("/");
		}
	}
</script>

<div id="wrapper" style="--bg-image: url('{background}')">
	<main>
		<!--<img src="{logoUrl}" alt="logo" on:click={toHome} />-->
		<Card>
			<Router {routes} />
			<div class="flex justify-end mt-4">
				<WmSelect />
			</div>
		</Card>
	</main>
	<Notifications />
</div>

<style windi:preflights:global windi:safelist:global>
	:global(html) {
		@apply h-screen font-sans;
	}

	#wrapper {
		/*bg-gradient-to-r from-primary to-secondary */
		@apply h-screen flex justify-center items-center bg-cover bg-center blur-lg;
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
