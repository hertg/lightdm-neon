<script lang="ts">
    export let name: string;
    export let image: string;

    console.log(image)
    console.log(window.greeter_config.branding.user_image);
    $: img = image !== null && image !== undefined && image !== "" ? image : window.greeter_config.branding.user_image;
</script>

<div class="user-option">
    <img src={img} alt="profile picture of {name}" />
    <div class="text">
        <span>{name}</span>
    </div>
</div>

<style>
    .user-option {
        @apply flex overflow-hidden bg-white items-center;
    }

    img {
        @apply rounded-full;
    }

    .text {

    }

    .text span {

    }
</style>

