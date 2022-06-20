<script lang="ts">
	import routes from "./router";
	import Router, { replace } from "svelte-spa-router";
	import Container from "./components/Container.svelte";
	import Notifications from "./components/Notifications.svelte";
	import WmSelect from "./pages/WMSelect.svelte";
	import Background from "./components/Background.svelte";
	import { themeSettings } from "./store/settings";
import Icon from "./components/Icon.svelte";
import Menu from "./components/Menu.svelte";

	let blurred: boolean = false;
	setTimeout(() => {
		blurred = true;
	}, 20);

</script>

<div id="app" style="--accent-color: {$themeSettings.colors.accent_color}">
	<Background />
	<div id="wrapper" class:blurred>
		
		<Router {routes} />
		
		<!--<Icon icon="Heart24" />
		<Icon icon="Pulse24" />
		<Icon icon="Person24" />

		<Icon icon="Gear24" />
		<Icon icon="Stack24" />
		<Icon icon="ArrowSwitch24" />
		<Icon icon="Browser24" />
		<Icon icon="Calendar24" />
		<Icon icon="Clock24" />
		<Icon icon="Code24" />

		<Icon icon="Moon24" />
		<Icon icon="Columns24" />
		<Icon icon="Plug24" />
		<Icon icon="Sync24" />
		<Icon icon="Copy24" />
		
		<Icon icon="FileMedia24" /> 
		<Icon icon="Globe24" />
		<Icon icon="Package24" />-->
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
		@apply absolute flex flex-col h-screen w-screen justify-center items-center bg-gray-700/40;
		backdrop-filter: blur(4px) opacity(0);
		transition: backdrop-filter .75s;
	}

	#wrapper.blurred {
		backdrop-filter: blur(8px) opacity(1);
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
