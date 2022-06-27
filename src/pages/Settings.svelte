<script lang="ts">
    import Container from "../components/Container.svelte";
import Input from "../components/Input.svelte";
import { themeSettings } from "../store/settings";


</script>

<Container>
    <div id="settings">
    <p>Splashscreen Text</p>
    <Input bind:value={$themeSettings.sign.text} />
    
    <p>TODO: Splashscreen Font</p>
    <p>TODO: Splashscreen Skip</p>
    <p>TODO: Splashscreen Show Clock</p>
    <p>TODO: Splashscreen Flicker</p>
    <p>TODO: Background Images</p>
    <p>TODO: Accent Color</p>
    </div>
</Container>

<style>
    #settings {
        @apply text-white;
    }
</style>