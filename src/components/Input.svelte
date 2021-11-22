<script lang="ts">
    import { createEventDispatcher } from 'svelte';
    import Icon from './Icon.svelte';

    export let value: string;
    export let type: string = "text";
    export let autofocus: boolean = false;
    export let label: string = "";
    export let icon: string = "";

    const dispatch = createEventDispatcher();

    const handleInput = (event) => {
        event.type = type;
    }

    const onKeypress = (event) => {
        if (event.charCode === 13) dispatch('enter');
    }
</script>

<div class="input-container">
    <label>{label}</label>
    {#if icon}
        <Icon {icon} />
    {/if}
    <input use:handleInput bind:value={value} {autofocus} on:keypress={onKeypress} />
</div>

<style>
    .input-container {
        @apply relative;
    }

    input {
        @apply border-primary border-2 rounded-md p-2 pl-9 w-full my-4 box-border focus:outline-none focus:ring focus:border-primary;
    }
</style>