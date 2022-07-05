<script lang="ts">
    import { themeSettings } from "../store/settings";
    import {toHex} from "../utils/color";
    import ColorPicker from "./ColorPicker.svelte";
    import Icon from "./Icon.svelte";
    import Switch from "./Switch.svelte";
    
    const colorCallback = (rgba: any) => {
        let rgb: number[] = [rgba.detail.r, rgba.detail.g, rgba.detail.b];
        $themeSettings.colors.accent_color = toHex(rgb);
    }

</script>

<span>
    <Icon icon="Gear24" /> General
</span>

<div class="picker">
    <ColorPicker on:colorChange={colorCallback} startColor={$themeSettings.colors.accent_color}/>
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