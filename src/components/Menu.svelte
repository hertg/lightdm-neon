<script lang="ts">
    import { push } from "svelte-spa-router";
    import { selectedSession } from "../store/runtime";
    import MenuButton from "./MenuButton.svelte";

    export let backFn: () => void = null;

    let sessionName = "";

    selectedSession.subscribe(s => {
        sessionName = window.lightdm.sessions.find(k => k.key === $selectedSession)?.name; 
    })

    const showSessionList = () => {
        push('/sessions')
    }

    const showPowerMenu = () => {
        push('/powermenu')
    }

    const showSettings = () => {
        push('/settings')
    }

    const showBackgrounds = () => {
        push('/backgrounds')
    }
</script>

<div class="menu menu-tl">
    {#if backFn}
        <MenuButton icon="ArrowLeft24" on:click={backFn} />
    {/if}
</div>
<div class="menu menu-tr">
    <MenuButton icon="Gear24" text="" on:click={showSettings} />
    <MenuButton icon="Image24" text="" on:click={showBackgrounds} />
    <MenuButton icon="Plug24" text="" on:click={showPowerMenu} />
</div>
<div class="menu menu-bl">
    <MenuButton icon="Browser24" text={sessionName} on:click={showSessionList} />
</div>


<style>
    .menu {
        @apply flex absolute fill-light-400 gap-3;
    }

    .menu-bl {
        @apply bottom-4 left-4;
    }

    .menu-tl {
        @apply top-4 left-4;
    }

    .menu-tr {
        @apply top-4 right-4;
    }
</style>