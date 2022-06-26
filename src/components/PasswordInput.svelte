<script lang="ts">
import { createEventDispatcher } from 'svelte';

import { themeSettings } from '../store/settings';

    import Icon from './Icon.svelte';

    export let password: string;
    export let icon: string;

    const dispatch = createEventDispatcher();

    const onKeypress = (event) => {
        if (event.charCode === 13) submit();
    }

    const submit = () => {
        dispatch('enter')
    }    
</script>

<div class="container">
    <div class="icon">
        <Icon {icon} />
    </div>
    <input type="password" bind:value={password} on:keypress={onKeypress} placeholder="Password" autofocus required>
    <button type="submit" on:click={submit}>
        <Icon icon="ArrowRight16" />
    </button>
</div>

<style>
    .container {
        @apply relative w-full rounded-lg;
    }

    .icon {
        @apply flex absolute inset-y-0 left-0 items-center pl-4 fill-white pointer-events-none;
    }

    input {
        @apply block p-3 pl-12 w-full z-20 text-sm rounded-lg bg-transparent border-1 border-white placeholder-light-300 text-white focus:outline-none;
    }

    button {
        @apply flex absolute h-full items-center top-0 right-0 p-4 text-sm font-medium fill-white focus:outline-none;
    }
</style>