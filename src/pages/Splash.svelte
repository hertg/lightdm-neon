<script lang="ts">
    import { onMount } from "svelte";
    import { push } from 'svelte-spa-router'

    // todo: allow disabling splash screen
    const TIMEOUT: number = 1000; // 1s

    onMount(async() => {
        setTimeout(() => {
            push('/select-user');
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