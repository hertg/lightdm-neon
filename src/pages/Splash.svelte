<script lang="ts">
    import { onMount } from "svelte";
    import { push, replace } from 'svelte-spa-router'
    import NeonSign from "../components/NeonSign.svelte";
    import { themeSettings } from "../store/settings";
    import { quintOut } from "svelte/easing";
    import { fly } from "svelte/transition";

    let delay: number = 50;

    let showSign: boolean = false;

    const onClick = (e: Event) => {
        forward();
    }

    const forward = () => {
        push('/select-user');
    }

    const onKeypress = (e: KeyboardEvent) => {
        if (e.key === 'Enter') {
            forward();
        }
    }

    onMount(async() => {
        document.getElementById('splash').focus();
        setTimeout(() => {
            showSign = true;
        }, delay);
    })
</script>

<!-- tabindex is so we can focus the div and grab keypress to continue on pressing enter -->
<div id="splash" on:click={onClick} tabindex="0" on:keypress={onKeypress}>
    {#if showSign}
    <div in:fly={{duration: 800, y: 60, easing: quintOut}}>
        <NeonSign font={$themeSettings.sign.font} 
            text={$themeSettings.sign.text} 
            flicker={$themeSettings.sign.flicker} 
            color={$themeSettings.colors.accent_color} 
            showClock={$themeSettings.sign.show_clock} />
    </div>
    {/if}
</div>

<style>
    #splash {
        position: absolute;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        flex-direction: column;
        outline: none;
    }

    #splash:focus {
        outline: none;
    }
</style>