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

<div id="background" class:blurred={$themeSettings.background_blur && $backgroundBlur} style="--bg-image: url('{image}')"></div>

<style>
    #background {
		@apply h-screen w-screen bg-cover bg-center absolute;
        height: calc(100% + 50px);
        width: calc(100% + 50px);
        left: -25px;
        top: -25px;
        background-image: var(--bg-image);
    }

    #background::before {
        @apply absolute top-0 right-0 bottom-0 left-0 bg-cover bg-center;
        content: "";
        transition: opacity 800ms linear;
        background-image: inherit;
        filter: blur(10px);
        opacity: 0;
    }

    #background.blurred::before {
        opacity: 1;
    }
</style>

