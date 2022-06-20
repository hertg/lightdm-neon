<script lang="ts">
    import type { LightDMUser } from "nody-greeter-types";
    import UserImage from "./UserImage.svelte";

    export let user: LightDMUser;
</script>

<div class="user-option" on:click>
    <UserImage bind:user />
    <span class="text">{user.display_name}</span>
</div>

<style>
    .user-option {
        @apply flex flex-col overflow-hidden cursor-pointer select-none items-center gap-4 p-2 text-white transform transition hover:scale-110;
    }

    .picture {
        @apply rounded-full h-12 w-12 bg-gradient-to-tl from-purple-500 to-pink-400;
    }

    img {
        @apply w-full h-full shadow-md;
    }

    .text {
        @apply text-center;
    }
</style>

