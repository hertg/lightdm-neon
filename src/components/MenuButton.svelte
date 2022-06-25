<script lang="ts">
    import Icon from './Icon.svelte';

    export let icon: string;
    export let text: string = null;
</script>

<div class="menu-button" on:click>
    <Icon {icon} />
    {#if text}
        <span>{text}</span>
    {/if}
</div>

<style>
    .menu-button {
        @apply flex px-2 py-1 text-light-50 gap-2 cursor-pointer items-center select-none transition;
    }

    .menu-button:hover {
        background-color: var(--accent-color);
    }

    span {
        @apply text-lg;
    }
</style>