<script lang="ts">
    import { pop, push, replace } from "svelte-spa-router";
    import { selectedSession } from "../store/runtime";
    import MenuButton from "./MenuButton.svelte";

    let sessionName = "";

    //let sessionName = selectedSession.;
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

    const back = () => {
        pop()
    }
</script>

<div class="menu menu-tl">
    <MenuButton icon="ArrowLeft24" on:click={back} />
</div>
<div class="menu menu-bl">
    <MenuButton icon="Gear24" text="Settings" on:click={showSettings} />
    <MenuButton icon="Browser24" text={sessionName} on:click={showSessionList} />
</div>
<div class="menu menu-br">
    <MenuButton icon="Plug24" text="Power" on:click={showPowerMenu} />
</div>


<style>
    .menu {
        @apply flex absolute fill-light-400 gap-3;
    }

    .menu-br {
        @apply bottom-4 right-4;
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