<script lang="ts">
	import routes from "./router";
	import Router from "svelte-spa-router";
	import Background from "./components/Background.svelte";
	import { themeSettings } from "./store/settings";

	let blurred: boolean = false;
	setTimeout(() => {
		blurred = true;
	}, 20);

</script>

<div id="app" style="--accent-color: {$themeSettings.colors.accent_color}">
	<Background />
	<div id="wrapper" class:blurred>
		<span class="neon" class:pulsate={$themeSettings.sign.pulsate}>
			{$themeSettings.sign.text}
		</span>
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


	/* https://css-tricks.com/how-to-create-neon-text-with-css/ */
	@keyframes pulsate {
		100% {
			/* Larger blur radius */
			text-shadow:
			0 0 4px #fff,
			0 0 11px #e15df5,
			0 0 80px #e15df5;
		}
		0% {
			/* A slightly smaller blur radius */
			text-shadow:
			0 0 4px #fff,
			0 0 14px #e15df5,
			0 0 73px #e15df5;
		}
	}

	.neon {
		font-family: 'Neonderthaw';
		font-size: 8rem;
		font-weight: normal;
		color: #ffc9f4;
		text-shadow: rgba(255,255,255,0.5) 0px 0px 4px, #e15df5 0px 0px 8px;
		background-clip: text;
		margin-bottom: 4rem;
	}

	.neon.pulsate {
		animation: pulsate 0.11s ease-in-out infinite alternate; 
	}
</style>
