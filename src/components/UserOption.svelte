<script lang="ts">
    import type { LightDMUser } from "nody-greeter-types";
    import UserImage from "./UserImage.svelte";

    export let user: LightDMUser;
</script>

<div class="user-option" on:click>
    <div class="picture">
        <UserImage bind:user />
    </div>
    <div class="text">
        <span>{user.display_name}</span>
        <span class="weak">Some text</span>
    </div>
</div>

<style>
    .user-option {
        @apply flex overflow-hidden cursor-pointer select-none bg-white items-center gap-4 rounded-xl p-2 transition duration-200 hover:shadow-lg;
    }

    .picture {
        @apply rounded-full h-12 w-12 bg-gradient-to-tl from-purple-500 to-pink-400;
    }

    img {
        @apply w-full h-full;        
    }

    .text span {
        @apply block leading-tight;
    }

    .text span.weak {
        @apply text-gray-600 text-sm;
    }
</style>

