<script lang="ts">
	import routes from "./router";
	import Router, { replace } from "svelte-spa-router";
	import Container from "./components/Container.svelte";
	import { splashscreenSeen } from "./store/LightDMStore";
	import Notifications from "./components/Notifications.svelte";
	import WmSelect from "./pages/WMSelect.svelte";
	import Background from "./components/Background.svelte";
	import { themeSettings } from "./store/settings";

	const toHome = () => {
		if ($splashscreenSeen) {
			window.lightdm.cancel_authentication();
			replace("/select-user");
		} else {
			replace("/");
		}
	};
</script>

<div id="app" style="--accent-color: {$themeSettings.colors.accent_color}">
	<Background />
	<div id="wrapper" class="blurred">
		<Container>
			<Router {routes} />
		</Container>
		<!--<Card>
			<span class="font-bold text-2xl">
				Hello<br>
				World
			  </span>
			<h1 class="accent">junge</h1>
		</Card>-->
	</div>
</div>

<!--<div id="wrapper" style="--bg-image: url('{background}')">
	<main>
		<!--<img src={logoUrl} alt="logo" on:click={toHome} />--
		<Card>
			<Router {routes} />
			<div class="flex justify-end mt-4">
				<WmSelect />
			</div>
		</Card>
	</main>
	<Notifications />
</div>-->

<style windi:preflights:global windi:safelist:global>
	:global(html) {
		@apply h-screen font-sans;
	}

	:global(.accent) {
		color: var(--accent-color);
	}

	#app {
		@apply h-screen;
	}

	#wrapper {
		/*bg-gradient-to-r from-primary to-secondary */
		@apply absolute flex h-screen w-screen justify-center items-center bg-gray-700/40;
	}

	.blurred {
		@apply backdrop-filter backdrop-blur-md;
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
