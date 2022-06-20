<script lang="ts">
    import MenuButton from "./MenuButton.svelte";

    export let show: boolean;

    const setSession = (session: string) => {
        alert(session)
    }
</script>

{#if show}
    <div class="container">
        {#each window.lightdm.sessions as session}
            <button on:click={() => setSession(session.key)}>{session.name}</button>
        {/each}
    </div>
{/if}

<!--
{#each window.lightdm.sessions as session}
    <option value={session.key}>{session.name}</option>
{/each}
-->

<style>
    .container {
        @apply absolute flex flex-col items-center w-full h-full top-0 left-0 bg-dark-50 bg-opacity-50 backdrop-filter backdrop-blur-lg z-20;
    }
</style>