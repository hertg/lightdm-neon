<script lang="ts">
    import Icon from './Icon.svelte';

    export let icon: string = null;
    export let image: string = null;
    export let text: string;
</script>

<div class="menu-button" on:click>
    {#if icon && !image}
        <Icon {icon} />
    {:else if image}
        <img src={image} alt="" onerror='this.style.display = "none"' />
    {/if}
    <span>{text}</span>
</div>

<style>
    .menu-button {
        @apply flex flex-col px-2 py-1 text-light-50 gap-4 cursor-pointer items-center select-none transition;
    }

    .menu-button:hover {
        @apply transform scale-105;
    }

    span {
        @apply text-lg;
    }

    img {
        @apply w-max-92px h-max-92px;
    }
</style>