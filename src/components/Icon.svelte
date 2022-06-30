<script lang="ts">
    import * as Octicons from "svelte-octicons";
    export let icon: string;
    export let rotate: boolean = false;
</script>

<div class="icon-container" class:rotate>
    <svelte:component this={Octicons[icon]} />
</div>

<style>
    @keyframes spin { 
        100% { 
            -webkit-transform: rotate(360deg); 
            transform:rotate(360deg); 
        } 
    }

    .icon-container.rotate {
        animation: spin 4s linear infinite;
    }
</style>

