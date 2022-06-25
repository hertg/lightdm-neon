<script lang="ts">
	import routes from "./router";
	import Router from "svelte-spa-router";
	import Background from "./components/Background.svelte";
	import { themeSettings } from "./store/settings";
	import NeonSign from "./components/NeonSign.svelte";

	let blurred: boolean = false;
	setTimeout(() => {
		blurred = true;
	}, 20);

</script>

<div id="app" style="--accent-color: {$themeSettings.colors.accent_color}">
	<Background />
	<div id="wrapper" class:blurred>
		<!--<input type="color" bind:value={$themeSettings.colors.accent_color} />-->
		<NeonSign font={$themeSettings.sign.font} text={$themeSettings.sign.text} flicker={$themeSettings.sign.flicker} color={$themeSettings.colors.accent_color} />
		<Router {routes} />
	</div>
</div>

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
		@apply absolute flex flex-col h-screen w-screen justify-center items-center bg-gray-900/40;
		backdrop-filter: blur(4px) opacity(0);
		transition: backdrop-filter .75s;
	}

	#wrapper.blurred {
		backdrop-filter: blur(8px) opacity(1);
	}
</style>
