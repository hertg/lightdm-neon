<script lang="ts">
    import { blend } from "../utils/color";
    import { slide, fly, fade } from 'svelte/transition';
	import { quadOut } from 'svelte/easing';

    export let text: string;
	export let showClock: boolean = false;
    export let flicker: boolean = false;
    export let color: string;
    export let font: string = "Neonderthaw"
	export let size: string = "8rem";

    $: mixed = blend(color, '#ffffff', 0.75)

	const getTime = () => {
        // changing it to lower-case because the uppercase AM/PM looks bad with some "neon" fonts
        return window.theme_utils.get_current_localized_time().toLowerCase();
    }

	let time = getTime();
	setInterval(() => {
		if (showClock) time = getTime();
    }, 1000);
</script>

<span class:flicker style="--sign-color: {color}; --mixed-color: {mixed}; --sign-font: {font}; --size: {size};">
	{#if showClock}
		{time}
	{:else}
    	{text}
	{/if}
</span>

<style>
    /* attribution: https://css-tricks.com/how-to-create-neon-text-with-css/ */
	@keyframes flicker {
		100% {
			/* Larger blur radius */
			text-shadow:
			0 0 4px var(--mixed-color),
			0 0 11px var(--accent-color),
            0 0 33px var(--accent-color),
			0 0 60px var(--accent-color);
		}
		0% {
			/* A slightly smaller blur radius */
			text-shadow:
			0 0 4px var(--mixed-color),
			0 0 14px var(--accent-color),
            0 0 23px var(--accent-color),
			0 0 49px var(--accent-color);
		}
	}

	span {
		@apply block select-none bg-clip-text text-center;
		font-family: var(--sign-font);
		font-size: var(--size);
		line-height: var(--size);
		font-weight: normal;
		color: var(--mixed-color);
        text-shadow:
			0 0 4px var(--mixed-color),
			0 0 11px var(--accent-color),
            0 0 33px var(--accent-color),
			0 0 60px var(--accent-color);
	}

	span.flicker {
		animation: flicker 0.11s ease-in-out infinite alternate; 
	}
</style>