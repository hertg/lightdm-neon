<script lang="ts">
import { onMount } from "svelte";
import { backgroundBlur } from "../store/runtime";

    import { themeSettings } from "../store/settings";
    let defaultImage: string = "assets/img/backgrounds/arcade.jpg";
    $: image = $themeSettings.background_image !== null ? $themeSettings.background_image : defaultImage;

    const timeout: number = 150;

    onMount(async() => {
        setTimeout(() => {
            $backgroundBlur = true;
        }, timeout);
    });

</script>

<div id="background" style="--bg-image: url('{image}')"></div>

<style>
    #background {
		@apply h-screen w-screen bg-cover bg-center fixed;
        background-image: var(--bg-image);
    }
</style>

