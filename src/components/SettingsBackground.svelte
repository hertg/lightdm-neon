<script lang="ts">
import { themeSettings } from "../store/settings";
import Icon from "./Icon.svelte";
import Switch from "./Switch.svelte";


	let userImages: string[] = [];
	let themeImages: string[] = [];

	window.theme_utils.dirlist(window.greeter_config.branding.background_images_dir, true, (files) => {
		userImages = files;
	});

    window.theme_utils.dirlist("/usr/share/web-greeter/themes/neon/assets/img/backgrounds", true, (files) => {
		themeImages = files;
	});

	const onClick = (img: string) => {
		$themeSettings.background_image = img;
	}

</script>

<div class="flex flex-col gap-2 text-sm">
	<span class="flex gap-2 items-center">
		<Icon icon="Image16" />
		User Images
	</span>
	<div id="user-images" class="image-group">
		{#each userImages as img}
			<div class="image" style="--bg-image: url('{img}')" on:click={() => onClick(img)}></div>
		{/each}
		{#if userImages.length == 0}
			<span>No images found</span>
		{/if}
	</div>
</div>

<div class="flex flex-col gap-2 text-sm">
	<span class="flex gap-2 items-center">
		<Icon icon="Image16" />
		Theme Images
	</span>
	<div id="custom-images" class="image-group">
		{#each themeImages as img}
			<div class="image" style="--bg-image: url('{img}')" on:click={() => onClick(img)}></div>
		{/each}
	</div>
</div>

<style>
	h1 {
		@apply text-2xl;
	}

	.image-group {
		@apply flex flex-wrap gap-4;
	}

	.image {
		@apply w-256px h-144px hover:bg-gray-400 bg-cover bg-center border border-gray-400 bg-blend-overlay transition cursor-pointer;
        background-image: var(--bg-image);
	}

</style>