<script lang="ts">
    import Icon from './Icon.svelte';

    export let icon: string;
    export let text: string;
</script>

<div class="menu-button" on:click>
    <Icon {icon} />
    <span>{text}</span>
</div>

<style>
    .menu-button {
        @apply flex flex-col px-2 py-1 text-light-50 gap-4 cursor-pointer items-center select-none transition;
    }

    .menu-button:hover {
        @apply transform scale-110;
    }

    span {
        @apply text-lg;
    }
</style>