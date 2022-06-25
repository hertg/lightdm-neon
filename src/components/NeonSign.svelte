<script lang="ts">
    import { blend } from "../utils/color";

    export let text: string;
    export let flicker: boolean = false;
    export let color: string;

    $: mixed = blend(color, '#ffffff', 0.75)
</script>

<span class:flicker style="--sign-color: {color}; --mixed-color: {mixed}">
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
			0 0 80px var(--accent-color);
		}
		0% {
			/* A slightly smaller blur radius */
			text-shadow:
			0 0 4px var(--mixed-color),
			0 0 14px var(--accent-color),
            0 0 23px var(--accent-color),
			0 0 73px var(--accent-color);
		}
	}

	span {
		font-family: 'Neonderthaw';
		font-size: 8rem;
		font-weight: normal;
		color: var(--mixed-color);
        mix-blend-mode: lighten;
		text-shadow: rgba(255,255,255,0.5) 0px 0px 4px, var(--accent-color) 0px 0px 8px;
		background-clip: text;
		margin-bottom: 4rem;
	}

	span.flicker {
		animation: flicker 0.11s ease-in-out infinite alternate; 
	}
</style>