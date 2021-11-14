<script lang="ts">
    
</script>

<button on:click>
    <slot></slot>
</button>

<style>
    button {
        @apply bg-primary text-white p-3 py-2 rounded-l;
    }
</style>