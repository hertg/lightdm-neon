<script lang="ts">
    import { fade } from 'svelte/transition';
	import { quadInOut } from 'svelte/easing';
    import Menu from './Menu.svelte';
    import { push } from 'svelte-spa-router';

    export let hideMenu: boolean = false;
    export let backFn: () => void = () => {
        if (window.lightdm.in_authentication) {
            push('/login');
        } else {
            push('/select-user');
        }
    };
</script>

{#if !hideMenu}
    <Menu {backFn} />
{/if}
<div in:fade="{{ duration: 340, easing: quadInOut }}" id="container">
    <slot></slot>
</div>

<style>
    #container {
        @apply flex justify-center items-center w-full h-full p-24 lg:w-5xl;
    }
</style>