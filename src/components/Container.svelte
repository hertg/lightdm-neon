<script lang="ts">
    import { slide, fly, fade } from 'svelte/transition';
	import { quadInOut } from 'svelte/easing';
    import Menu from './Menu.svelte';

    export let hideMenu: boolean = false;

</script>

{#if !hideMenu}
<Menu />
{/if}
<div in:fade="{{ duration: 340, easing: quadInOut }}">
    <slot></slot>
</div>

<style>

</style>