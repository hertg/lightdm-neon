<script lang="ts">
    import { onMount } from "svelte";
    import { themeSettings } from "../store/settings";
    import Router, {replace} from "svelte-spa-router";
    import Container from "../components/Container.svelte";
    import MenuButton from "../components/MenuButton.svelte";
    import NeonSign from "../components/NeonSign.svelte";
    import SettingsBackground from "../components/SettingsBackground.svelte";
    import SettingsGeneral from "../components/SettingsGeneral.svelte";
    import SettingsSplashscreen from "../components/SettingsSplashscreen.svelte";

    const prefix = '/settings'
    const routes = {
        '/splashscreen': SettingsSplashscreen,
        '/background': SettingsBackground,
        '/general': SettingsGeneral,
    }

    onMount(async() => {
        replace('/settings/general')
    });

</script>

<Container>
    <div id="settings">
        <div id="menu">
            <MenuButton text="General" icon="Gear24" on:click={() => replace('/settings/general')} />
            <MenuButton text="Background" icon="Image24" on:click={() => replace('/settings/background')} />
            <MenuButton text="Splashscreen" icon="Home24" on:click={() => replace('/settings/splashscreen')} />
        </div>
        <div id="content">
            <Router {routes} {prefix}></Router>
        </div>
    </div>
</Container>

<style>
    #sign {
        @apply w-screen flex items-center justify-center py-10;
    }

    #settings {
        @apply text-white fill-white flex flex-col gap-4 m-auto;
    }

    #menu {
        @apply flex gap-4;
    }

    #content {
        @apply p-4 flex-grow;
    }
</style>