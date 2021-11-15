<script lang="ts">
    import { createEventDispatcher } from 'svelte';

    export let value: string;
    export let type: string = "text";
    export let autofocus: boolean = false;
    export let label: string = "";

    const dispatch = createEventDispatcher();

    const handleInput = (event) => {
        event.type = type;
    }

    const onKeypress = (event) => {
        if (event.charCode === 13) dispatch('enter');
    }
</script>

<label>{label}</label>
<input use:handleInput bind:value={value} {autofocus} on:keypress={onKeypress} />

<style>
    input {
        @apply border-primary border-2 rounded-md p-2 w-full my-4 box-border focus:outline-none focus:ring focus:border-primary;
    }
</style>