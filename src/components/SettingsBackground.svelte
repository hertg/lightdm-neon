<script lang="ts">


    window.theme_utils.dirlist(window.greeter_config.branding.background_images_dir, true, (files) => {
		console.log(files);
	});

    /*window.theme_utils.dirlist("assets/img/backgrounds", true, (files) => {
		console.log(files);
	});*/

    window.theme_utils.dirlist("/usr/share/web-greeter/themes/neon/assets/img/backgrounds", true, (files) => {
		console.log(files);
	});

</script>

<h1>Background</h1>
<p>TODO: Background Images</p>

<style>

</style>