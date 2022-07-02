<script lang="ts">
    import Input from "./Input.svelte";
    import { themeSettings } from "../store/settings";
    import NeonSign from "./NeonSign.svelte";
    import Radio from "./Radio.svelte";
    import Icon from "./Icon.svelte";

    const fontOptions: RadioOption[] = [
        {value: "Neonderthaw", text: "Neonderthaw", icon: "Typography24"},
        {value: "Neoneon",text: "Neoneon",icon: "Pencil24"},
        {value: "Beon",text: "Beon",icon: "Pencil24"},
        {value: "Higher Monday",text: "Higher Monday",icon: "Pencil24"},
        {value: "Selfie",text: "Selfie",icon: "Pencil24"},
        {value: "Hastron",text: "Hastron",icon: "Pencil24"},
        {value: "Neon Sans",text: "Neon Sans",icon: "Pencil24"}
    ]

</script>

    <Input icon="Pencil24" bind:value={$themeSettings.sign.text} />

    <span><Icon icon="Typography24" /> Font</span>
    <Radio id="font" bind:value={$themeSettings.sign.font} options={fontOptions} />

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