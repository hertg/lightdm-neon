<script lang="ts">
    import { onMount } from "svelte";
    import { replace } from 'svelte-spa-router'

    // todo: allow disabling splash screen
    const TIMEOUT: number = 1000; // 1s

    onMount(async() => {
        replace('/select-user');
        //if ($splashscreenSeen || TIMEOUT < 1) {
        //    push('/select-user');
        //} else {
        //    setTimeout(() => {
        //        splashscreenSeen.update(o => o = true);
        //        push('/select-user');
        //    }, TIMEOUT);
        //}
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