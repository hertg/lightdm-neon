<script lang="ts">
    export let primary: boolean = false;
</script>

<button class:primary on:click>
    <slot></slot>
</button>

<style>
    button {
        @apply bg-gray-700 text-white p-3 py-2 rounded-l shadow-sm w-full my-1;
    }

    button.primary {
        @apply bg-gradient-to-r from-primary to-secondary;
    }
</style>