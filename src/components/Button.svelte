<script lang="ts">
    
</script>

<button on:click>
    <slot></slot>
</button>

<style>
    button {
        @apply bg-gradient-to-r from-primary to-secondary text-white p-3 py-2 rounded-l shadow-sm;
    }
</style>