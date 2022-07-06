<script lang="ts">
    import { themeSettings } from "../store/settings";
    import {rgbToHex} from "../utils/color";
    import ColorPicker from "./ColorPicker.svelte";
    import Icon from "./Icon.svelte";
    import Switch from "./Switch.svelte";
    
    const colorCallback = (e: CustomEvent) => {
        $themeSettings.colors.accent_color = e.detail;
    }

</script>

<span>
    <Icon icon="Gear24" /> General
</span>

<div class="picker">
    <ColorPicker startColor={$themeSettings.colors.accent_color} on:colorChange={colorCallback}  />
</div>

<Switch bind:checked={$themeSettings.background_blur} title="Blur Background" subtitle="When enabled, the background images will be blurred (slight performane impact)" name="blur-background" icon="Image24" />



<style>
    span {
        @apply flex gap-2 py-4 text-xl items-center;
    }

    .picker {
        @apply text-black;
    }
</style>