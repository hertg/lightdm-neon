<script lang="ts">
    import { onMount } from "svelte";
    import { themeSettings } from "../store/settings";
    import Router, {replace, pop} from "svelte-spa-router";
    import Container from "../components/Container.svelte";
    import MenuButton from "../components/MenuButton.svelte";
    import NeonSign from "../components/NeonSign.svelte";
    import SettingsBackground from "../components/SettingsBackground.svelte";
    import SettingsGeneral from "../components/SettingsGeneral.svelte";
    import SettingsSplashscreen from "../components/SettingsSplashscreen.svelte";

    const prefix = '/settings'
    const routes = {
        '/background': SettingsBackground,
        '/general': SettingsGeneral,
    }

    onMount(async() => {
        replace('/settings/general')
    });

</script>

<Container backFn={() => pop()}>
    <div id="settings">
        <div class="preview">
            <NeonSign 
            font={$themeSettings.sign.font} 
            text={$themeSettings.sign.text} 
            flicker={$themeSettings.sign.flicker} 
            color={$themeSettings.colors.accent_color} 
            showClock={$themeSettings.sign.show_clock}
            size="4rem" />
        </div>

        <!--<div id="menu">
            <MenuButton text="General" icon="Gear24" on:click={() => replace('/settings/general')} />
            <MenuButton text="Background" icon="Image24" on:click={() => replace('/settings/background')} />
        </div>-->
        <div id="content">
            <SettingsGeneral />
            <!--<SettingsSplashscreen />
            <SettingsBackground />

            <Router {routes} {prefix}></Router>-->
        </div>
    </div>
</Container>

<style>
    .preview {
        @apply p-8;
        /*@apply border border-white p-8 relative rounded;*/
        will-change: contents;
    }

    .preview::before {
        /*@apply absolute top-1 left-1 text-xs;
        content: 'live preview';*/
    }

    #settings {
        @apply text-white fill-white flex flex-col gap-4 w-5/6 h-5/6 overflow-auto;
        will-change: scroll-position; /* this helps with performance */
    }

    #menu {
        @apply flex gap-4 justify-center;
    }

    #content {
        @apply p-4 flex-grow;
    }
</style>