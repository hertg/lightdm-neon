<script lang="ts">
    import { themeSettings } from "../store/settings";
    import ColorPicker from "./ColorPicker.svelte";
    import Icon from "./Icon.svelte";
    import Input from "./Input.svelte";
    import Radio from "./Radio.svelte";
import SettingsBackground from "./SettingsBackground.svelte";
    import Switch from "./Switch.svelte";
    
    const fontOptions: RadioOption[] = [
        {value: "Neonderthaw", text: "Neonderthaw", icon: "Typography24"},
        {value: "Neoneon",text: "Neoneon",icon: "Pencil24"},
        {value: "Beon",text: "Beon",icon: "Pencil24"},
        {value: "Higher Monday",text: "Higher Monday",icon: "Pencil24"},
        {value: "Selfie",text: "Selfie",icon: "Pencil24"},
        {value: "Hastron",text: "Hastron",icon: "Pencil24"},
        {value: "Neon Sans",text: "Neon Sans",icon: "Pencil24"}
    ]

    const colorCallback = (e: CustomEvent) => {
        $themeSettings.colors.accent_color = e.detail;
    }

</script>

<div class="flex flex-col gap-8">

    <hr>

    <div class="flex flex-wrap">
        <div class="w-full lg:w-1/2">
            <Switch bind:checked={$themeSettings.skip_splashscreen} title="Skip Splashscreen" subtitle="Whether the splashscreen should be skipped" name="skip-splashscreen" icon="EyeClosed24" />
        </div>
        <div class="w-full lg:w-1/2">
            <Switch bind:checked={$themeSettings.sign.flicker} title="Sign Flicker" subtitle="Enable a flickering animation (may be hardware resource intensive)" name="flicker" icon="LightBulb24" />
        </div>
        <div class="w-full lg:w-1/2">
            <Switch bind:checked={$themeSettings.sign.show_clock} title="Show Clock" subtitle="Display the current time instead of the custom text" name="show-clock" icon="Clock24" />
        </div>
        <div class="w-full lg:w-1/2">
            <Switch bind:checked={$themeSettings.background_blur} title="Blur Background" subtitle="When enabled, the background images will be blurred (slight performane impact)" name="blur-background" icon="Image24" />
        </div>
        <div class="w-full p-4">
            <div class="flex flex-col gap-2 text-sm">
                <span class="flex gap-2 items-center">
                    <Icon icon="Pencil16" />
                    Neon Sign Text
                </span>
                <Input bind:value={$themeSettings.sign.text} />
            </div>
            
        </div>
        <div class="flex gap-4 w-full p-4">
            <div class="flex flex-col gap-2 text-sm">
                <span class="flex gap-2 items-center">
                    <Icon icon="Paintbrush16" />
                    Accent Color
                </span>
                <ColorPicker startColor={$themeSettings.colors.accent_color} on:colorChange={colorCallback} width={300} height={220}  />
            </div>

            <div class="flex flex-col gap-2 text-sm">
                <span class="flex gap-2 items-center">
                    <Icon icon="Typography16" />
                    Font
                </span>
                <Radio id="font" bind:value={$themeSettings.sign.font} options={fontOptions} />    
            </div>
            
        </div>
    </div>

    <hr>

    <div class="flex flex-col gap-4 w-full">
        <SettingsBackground />
    </div>
</div>

<style>
</style>