<script lang="ts">
    import { push } from "svelte-spa-router";
    import { selectedSession } from "../store/runtime";
    import MenuButton from "./MenuButton.svelte";

    let sessionName = "";

    //let sessionName = selectedSession.;
    selectedSession.subscribe(s => {
        sessionName = window.lightdm.sessions.find(k => k.key === $selectedSession)?.name; 
    })

    const showSessionList = () => {
        push('/session')
    }

    const showPowerMenu = () => {
        push('/power-menu')
    }
</script>

<div class="menu menu-bl">
    <MenuButton icon="Browser24" text={sessionName} on:click={showSessionList} />
    <!--<MenuButton icon="Gear24" text="Settings" />-->
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

</style>