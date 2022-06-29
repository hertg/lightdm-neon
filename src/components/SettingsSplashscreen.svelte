<script lang="ts">
    import Input from "./Input.svelte";
    import { SignFont, themeSettings } from "../store/settings";
    import NeonSign from "./NeonSign.svelte";
import App from "../App.svelte";
</script>

    <Input icon="Pencil24" bind:value={$themeSettings.sign.text} />

    <select bind:value={$themeSettings.sign.font}>
    {#each Object.values(SignFont) as font}
        <option value={font}>{font}</option>
    {/each}
    </select>

    <p>TODO: Splashscreen Font</p> <!-- Typography24 -->
    <p>TODO: Splashscreen Skip</p> <!-- EyeClosed24 -->
    <p>TODO: Splashscreen Show Clock</p> <!-- Clock24 -->
    <p>TODO: Splashscreen Flicker</p> <!-- Star24 / Flame24 -->

    <span>preview</span>
    <div class="preview">
        <NeonSign 
        font={$themeSettings.sign.font} 
        text={$themeSettings.sign.text} 
        flicker={$themeSettings.sign.flicker} 
        color={$themeSettings.colors.accent_color} 
        showClock={$themeSettings.sign.show_clock}
        size="4rem" />
    </div>
    

<style>
    .preview {
        @apply border border-white p-8;
    }

</style>