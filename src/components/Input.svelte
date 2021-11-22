<script lang="ts">
    import { createEventDispatcher } from 'svelte';
    import Icon from './Icon.svelte';

    export let value: string;
    export let type: string = "text";
    export let autofocus: boolean = false;
    export let label: string = "";
    export let icon: string = "";
    export let placeholder: string = "";

    const dispatch = createEventDispatcher();

    const handleInput = (event) => {
        event.type = type;
    }

    const onKeypress = (event) => {
        if (event.charCode === 13) dispatch('enter');
    }
</script>

<div class="input-container">
    {#if label}
        <label>{label}</label>
    {/if}
    {#if icon}
        <div class="input-icon">
            <Icon {icon} />
        </div>
    {/if}
    <input use:handleInput bind:value={value} {autofocus} on:keypress={onKeypress} {placeholder} />
</div>

<style>
    .input-container {
        @apply relative;
    }

    .input-icon {
        @apply block w-6 h-6 absolute top-1/2 transform -translate-y-1/2 left-3 flex items-center;
    }

    input {
        @apply border-primary border-2 rounded-md p-2 w-full my-1 box-border focus:outline-none focus:ring focus:border-primary text-center;
    }
</style>