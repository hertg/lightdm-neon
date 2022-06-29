<script lang="ts">
    import type { LightDMUser } from "nody-greeter-types";
import { createEventDispatcher } from "svelte";
    import UserImage from "./UserImage.svelte";

    export let user: LightDMUser;
    export let tabindex: number = null;

    const dispatch = createEventDispatcher()

    const triggerClick = () => {
        dispatch('click');
    }

    const onKeypress = (e: KeyboardEvent) => {
        if (e.key === 'Enter') {
            triggerClick();
        }
    }
</script>

<div class="user-option" on:click {tabindex} on:keypress={onKeypress} >
    <UserImage bind:user />
    <span class="text">{user?.display_name || "Other"}</span>
</div>

<style>
    .user-option {
        @apply flex flex-col overflow-hidden cursor-pointer select-none items-center gap-4 p-2 text-white transform transition hover:scale-105 focus:scale-105;
    }

    .text {
        @apply text-center;
    }
</style>

