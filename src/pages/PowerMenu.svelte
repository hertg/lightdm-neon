<script lang="ts">
    import BigButton from "../components/BigButton.svelte";
    import Container from "../components/Container.svelte";
</script>

<Container>
    <div class="container">
        {#if window.lightdm.can_hibernate}
            <BigButton icon="Moon24" text="Hibernate" on:click={() => window.lightdm.hibernate()} />
        {/if}
    
        {#if window.lightdm.can_suspend}
            <BigButton icon="NoEntry24" text="Suspend" on:click={() => window.lightdm.suspend()} />
        {/if}
    
        {#if window.lightdm.can_restart}
            <BigButton icon="Sync24" text="Restart" on:click={() => window.lightdm.restart()} />
        {/if}
    
        {#if window.lightdm.can_shutdown}
            <BigButton icon="Plug24" text="Shutdown" on:click={() => window.lightdm.shutdown()} />
        {/if}
    </div>
</Container>


<style>
    .container {
        @apply w-screen h-screen flex items-center justify-center text-light-50 gap-8 fill-white;
    }
</style>
