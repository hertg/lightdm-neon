<script lang="ts">
    export let value: string;
    export let type: string = "text";

    const handleInput = (event) => {
        event.type = type;
    }
</script>

<input use:handleInput bind:value={value} />

<style>
    input {
        @apply border-gray-500 border-4;
    }
</style>