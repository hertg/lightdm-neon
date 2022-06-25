<script lang="ts">
    import { blend } from "../utils/color";
    import { slide, fly, fade } from 'svelte/transition';
	import { quadOut } from 'svelte/easing';

    export let text: string;
    export let flicker: boolean = false;
    export let color: string;
    export let font: string = "Neonderthaw"

    $: mixed = blend(color, '#ffffff', 0.75)
</script>

<span 
    in:fly="{{y: 60, duration: 600, opacity: 0, easing: quadOut}}"
    class:flicker style="--sign-color: {color}; --mixed-color: {mixed}; --sign-font: {font}">
    {text}
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
			0 0 80px var(--accent-color),
            0 0 140px var(--accent-color);
		}
		0% {
			/* A slightly smaller blur radius */
			text-shadow:
			0 0 4px var(--mixed-color),
			0 0 14px var(--accent-color),
            0 0 23px var(--accent-color),
			0 0 73px var(--accent-color),
            0 0 128px var(--accent-color);
		}
	}

	span {
        user-select: none;
		font-family: var(--sign-font);
		font-size: 8rem;
		font-weight: normal;
		color: var(--mixed-color);
        mix-blend-mode: lighten;
        text-shadow:
			0 0 4px var(--mixed-color),
			0 0 11px var(--accent-color),
            0 0 33px var(--accent-color),
			0 0 80px var(--accent-color),
            0 0 140px var(--accent-color);
		background-clip: text;
		margin-bottom: 4rem;
	}

	span.flicker {
		animation: flicker 0.11s ease-in-out infinite alternate; 
	}
</style>