<script lang="ts">
    import type { LightDMUser } from "nody-greeter-types";

    export let user: LightDMUser;

    const chooseImage = () => {
        if (user.image !== null) {
            return user.image;
        }
        const fromConf = window.greeter_config.branding.user_image;
        if (fromConf !== null && fromConf !== undefined && fromConf !== "") {
            return fromConf;
        }
        return null;
    }

    let img = chooseImage();
</script>

<div class="picture">
    {#if img !== null}
        <img src={img} alt="profile picture of {user.display_name}" onerror='this.style.display = "none"' />
    {/if}
</div>

<style>
    .picture {
        @apply rounded-full bg-gradient-to-tl from-purple-500 to-pink-400 w-max-92px h-max-92px;
    }

    img {
        @apply w-full h-full;        
    }
</style>

