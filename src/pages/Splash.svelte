<script lang="ts">
    import { onMount } from "svelte";
    import { push, replace } from 'svelte-spa-router'
    import NeonSign from "../components/NeonSign.svelte";
    import { themeSettings } from "../store/settings";
    import { backgroundBlur } from "../store/runtime";

    let text: string = $themeSettings.sign.text;
    let delay: number = 0;

    const getTime = () => {
        // changing it to lower-case because the uppercase AM/PM looks bad with some "neon" fonts
        return window.theme_utils.get_current_localized_time().toLowerCase();
    }

    if ($themeSettings.sign.show_clock) {
        text = getTime();
        setInterval(() => {
            text = getTime();
        }, 1000);
    }   

    let showSign: boolean = false;

    const onClick = (e: Event) => {
        push('/select-user');
    }

    onMount(async() => {
        if ($themeSettings.skip_splashscreen) {
            replace('/select-user');
        }
        setTimeout(() => {
            $backgroundBlur = true;
            setTimeout(() => {showSign = true}, 50);
        }, delay);
    })
</script>

<div id="splash" on:click={onClick}>
    {#if showSign}
        <NeonSign font={$themeSettings.sign.font} text={text} flicker={$themeSettings.sign.flicker} color={$themeSettings.colors.accent_color} />
    {/if}
</div>

<style>
    #splash {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    }
</style>