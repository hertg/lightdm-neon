<script lang="ts">
    import { themeSettings } from "../store/settings";
    let defaultImage: string = "assets/img/backgrounds/arcade.jpg";
    $: image = $themeSettings.background_image !== null ? $themeSettings.background_image : defaultImage;
</script>

<div id="background" style="--bg-image: url('{image}')"></div>

<style>
    #background {
		@apply h-screen w-screen bg-cover bg-center fixed;
        background-image: var(--bg-image);
    }
</style>

