<script lang="ts">
    export let primary: boolean = false;
</script>

<button class:primary on:click>
    <slot></slot>
</button>

<style>
    button {
        @apply bg-gray-700 text-white p-3 py-2 rounded-md shadow-sm w-full my-1 focus:ring-4;
    }

    button.primary {
        @apply bg-gradient-to-r from-primary to-secondary focus:outline-none;
    }
</style>