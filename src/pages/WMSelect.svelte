<script lang="ts">
    import { pop } from "svelte-spa-router";

    import { selectedSession } from "../store/runtime";

    const choose = (key: string) => {
        $selectedSession = key;
        pop();
    }
</script>

<div class="container">
    {#each window.lightdm.sessions as session}
        <button on:click={() => choose(session.key)}>{session.name}</button>
    {/each}
</div>

<!--
<select bind:value={$selectedSession}>
    {#each window.lightdm.sessions as session}
        <option value={session.key}>{session.name}</option>
    {/each}
</select>
-->

<style>
    .container {
        @apply w-screen h-screen flex flex-col items-center justify-center text-light-50 gap-4;
    }

    button {
        @apply px-2 py-1 cursor-pointer items-center select-none transition;
    }

    button:hover {
        background-color: var(--accent-color);
    }
</style>
