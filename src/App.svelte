<script lang="ts">
	import Router, { location, push } from "svelte-spa-router";
	import Background from "./components/Background.svelte";
	import { themeSettings } from "./store/settings";
	import { backgroundBlur } from "./store/runtime";
	import Splash from "./pages/Splash.svelte";
	import UserSelection from "./pages/UserSelection.svelte";
	import PasswordPrompt from "./pages/PasswordPrompt.svelte";
	import UserPrompt from "./pages/UserPrompt.svelte";
	import Sessions from "./pages/Sessions.svelte";
	import PowerMenu from "./pages/PowerMenu.svelte";
	import Settings from "./pages/Settings.svelte";
	import Notifications from "./components/Notifications.svelte";

	const routes = {
		'/': Splash,
		'/select-user': UserSelection,
		'/login': PasswordPrompt,
		'/user': UserPrompt,
		'/sessions': Sessions,
		'/powermenu': PowerMenu,
		'/settings': Settings,
		'/settings/*': Settings, // uses a nested router
	}

	if ($themeSettings.skip_splashscreen) {
		if ($location === '/') {
			push('/select-user');
		}
	}
</script>

<div id="app" style="--accent-color: {$themeSettings.colors.accent_color}">
	<Background />
	<div id="wrapper" class:blurred={$backgroundBlur}>
		<Notifications />
		<Router {routes} />
	</div>
</div>

<style windi:preflights:global windi:safelist:global>
	:global(html) {
		@apply h-screen font-sans;
	}

	:global(body) {
		@apply h-screen overflow-hidden;
	}

	:global(.accent) {
		color: var(--accent-color);
	}

	#app {
		@apply h-screen;
	}

	#wrapper {
		@apply absolute flex flex-col h-screen w-screen justify-center items-center bg-gray-900/40;
		backdrop-filter: blur(4px) opacity(0);
		transition: backdrop-filter .75s;
	}

	#wrapper.blurred {
		backdrop-filter: blur(8px) opacity(1);
	}
</style>
