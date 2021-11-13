<script lang="ts">
    import { onMount } from "svelte";
    import { navigateTo } from 'svelte-router-spa';

    // todo: allow disabling splash screen
    const TIMEOUT: number = 1000; // 1s

    onMount(async() => {
        setTimeout(() => {
            navigateTo('select-user');
        }, TIMEOUT);
    })
</script>

<div id="splash">
    <h1>SPLASHSCREEN</h1>
</div>

<style>
    #splash {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>