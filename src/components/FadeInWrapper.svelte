<script lang="ts">
    import { slide, fly, fade } from 'svelte/transition';
	import { quadInOut } from 'svelte/easing';
</script>

<div in:fade="{{ duration: 340, easing: quadInOut }}">
    <slot></slot>
</div>

<style>

</style>