<script lang="ts">
import { onMount } from "svelte";

    import { themeSettings } from "../store/settings";
    import Icon from "./Icon.svelte";

    let colorPicker: HTMLInputElement;

    /*onMount(async() => {
        colorPicker.add
    });*/

    const changeColor = (e: Event) => {
        $themeSettings.colors.accent_color = e.target.value;
    }

</script>


<span>
    <Icon icon="Gear24" /> General
</span>
<input bind:this={colorPicker} 
    type="color"
    value={$themeSettings.colors.accent_color} 
    on:change={changeColor}>

<style>
    span {
        @apply flex gap-2 py-4 text-xl items-center;
    }
</style>