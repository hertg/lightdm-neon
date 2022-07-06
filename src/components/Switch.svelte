<script lang="ts">
    import Icon from './Icon.svelte';
    export let checked: boolean;
    export let color: string = "#000000";
    export let name: string = "switch";
    export let title: string = "Switch";
    export let subtitle: string = "Description";
    export let icon: string = null;
    export let disabled: boolean = false;
</script>

<label style="--color: {color}" for="{name}">
    {#if icon}
        <Icon {icon} />
    {/if}
    <div class="switch">
        <input type="checkbox" id="{name}" bind:checked disabled={disabled} />
        <span class="slider"></span>
    </div>
    <div class="text">
        <div class="title">{title}</div>
        <div class="subtitle">{subtitle}</div>
    </div>
</label>

<style>
    label {
        @apply box-border flex gap-4 items-center py-3 px-4 mb-2 rounded cursor-pointer select-none;
    }

    div.text {
        @apply flex flex-col mr-3 flex-grow;
    }

    .subtitle {
        @apply text-sm;
    }

    .switch {
        @apply relative inline-block w-40px h-20px;
        flex-basis: 40px;
        flex-shrink: 0;
    }

    .switch input {
        @apply opacity-0 w-0 h-0;
    }

    .switch input:checked + .slider {
        @apply border-white;
    }
    
    .switch input:checked + .slider:before {
        transform: translateX(18px);
        @apply bg-white;
    }

    .slider {
        @apply absolute h-20px w-40px bg-transparent transition rounded-20px border border-gray-400 box-border;
    }

    .slider:before {
        @apply absolute h-18px w-20px bg-gray-400 border border-gray-400 transition box-border;
        content: "";
        border-radius: 50%;
    }
</style>