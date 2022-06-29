<script lang="ts">
    import Icon from './Icon.svelte';

    export let icon: string;
    export let text: string = null;
    export let disabled: boolean = false;
</script>

<div class="menu-button" class:disabled on:click>
    <Icon {icon} />
    {#if text}
        <span>{text}</span>
    {/if}
</div>

<style>
    .menu-button {
        @apply flex px-2 py-1 text-light-50 gap-2 items-center select-none transition;
    }

    .menu-button.disabled {
        @apply text-gray-500 fill-gray-500;
    }

    .menu-button:hover:not(.disabled) {
        background-color: var(--accent-color);
        cursor: pointer;
    }

    span {
        @apply text-lg;
    }
</style>