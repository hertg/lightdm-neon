<script lang="ts">
    import * as Octicons from "svelte-octicons";

    export let icon: string = "";
</script>

<div class="icon-container">
    <svelte:component this={Octicons[icon]}  />
</div>

<style>
    .icon-container {
        /*@apply block w-6 h-6 absolute top-1/2 transform -translate-y-1/2 left-3 flex items-center;*/
        /*@apply block w-6 h-6 absolute top-1/2 left-3 flex items-center;*/
    }

    /*svg {
        @apply w-full h-full;
    }*/
</style>

