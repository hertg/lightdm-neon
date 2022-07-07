<script lang="ts">
    import { createEventDispatcher, onMount } from 'svelte';
    import Icon from './Icon.svelte';

    export let value: string;
    export let type: string = "text";
    export let autofocus: boolean = false;
    export let icon: string = null;
    export let placeholder: string = "";
    export let withSubmit: boolean = false;
    export let loading: boolean = false;

    const dispatch = createEventDispatcher();

    const onKeypress = (event) => {
        if (event.charCode === 13) submit();
    }

    const submit = () => {
        dispatch('enter')
    }

    const typeAction = (node: HTMLInputElement) => {
        node.type = type;
    }
</script>

<div class="container">
    {#if icon}
    <div class="icon">
        <Icon {icon} />
    </div>
    {/if}
    <input use:typeAction 
        class:hasIcon={icon} 
        class:hasSubmit={withSubmit} 
        bind:value={value} on:keypress={onKeypress} 
        {placeholder} 
        {autofocus} 
        readonly={loading}>

    {#if withSubmit}
        <button type="submit" on:click={submit} disabled={loading}>
            <!--<Icon icon="ArrowRight16" />-->
            {#if loading}
                <Icon icon="IssueDraft16" rotate />
            {:else}
                <Icon icon="ArrowRight16" />
            {/if}
        </button>
    {/if}
</div>

<style>
    .container {
        @apply relative w-full rounded;
    }

    .icon {
        @apply flex absolute inset-y-0 left-0 items-center pl-4 fill-white pointer-events-none;
    } 

    input {
        @apply block p-3 w-full z-20 text-sm rounded-lg bg-transparent border-1 border-white placeholder-light-300 text-white focus:outline-none disabled:text-gray-500 disabled:placeholder-gray-500 read-only:text-gray-500;
    }

    input.hasIcon {
        @apply pl-12;
    }

    input.hasSubmit {
        @apply pr-12;
    }

    button {
        @apply flex absolute h-full items-center top-0 right-0 p-4 text-sm font-medium fill-white focus:outline-none disabled:cursor-default;
    }
</style>