<script lang="ts">
    import { pop } from "svelte-spa-router";
import FadeInWrapper from "../components/FadeInWrapper.svelte";

    import { selectedSession, sessionTouched } from "../store/runtime";

    const choose = (key: string) => {
        $selectedSession = key;
        $sessionTouched = true;
        pop();
    }
</script>

<FadeInWrapper>
    <div class="container">
        {#each window.lightdm.sessions as session}
            <button on:click={() => choose(session.key)}>{session.name}</button>
        {/each}
    </div>
</FadeInWrapper>

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
