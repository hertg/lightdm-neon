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
	import Backgrounds from "./pages/Backgrounds.svelte";

	const routes = {
		'/': Splash,
		'/select-user': UserSelection,
		'/login': PasswordPrompt,
		'/user': UserPrompt,
		'/sessions': Sessions,
		'/powermenu': PowerMenu,
		'/backgrounds': Backgrounds,
		'/settings': Settings,
	}

	if ($themeSettings.skip_splashscreen) {
		if ($location === '/') {
			push('/select-user');
		}
	}
</script>

<div id="app" style="--accent-color: {$themeSettings.colors.accent_color}">
	<Background />
	<div id="wrapper">
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
	}
</style>
