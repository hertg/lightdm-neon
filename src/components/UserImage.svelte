<script lang="ts">
    import type { LightDMUser } from "nody-greeter-types";
    import { themeSettings } from "../store/settings";
    import { blend } from "../utils/color";
    import Icon from "./Icon.svelte";

    export let user: LightDMUser;

    const chooseImage = () => {
        if (user !== null && user.image !== null) {
            return user.image;
        }
        const fromConf = window.greeter_config.branding.user_image;
        if (fromConf !== null && fromConf !== undefined && fromConf !== "") {
            return fromConf;
        }
        return null;
    }

    $: colA = blend($themeSettings.colors.accent_color, '#ffffff', 0.3)
    $: colB = blend($themeSettings.colors.accent_color, '#000000', 0.6)

    let img = chooseImage();
</script>

<div class="picture" class:other={user === null} style="--custom-from: {colA}; --custom-to: {colB}">
    {#if user !== null && img !== null}
        <img src={img} alt="profile picture of {user?.display_name}" onerror='this.style.display = "none"' />
    {/if}
    {#if user === null}
        <Icon icon="KebabHorizontal24" />
    {/if}
</div>

<style>
    .picture {
        /*--tw-gradient-from: rgba(142, 45, 226, var(--tw-from-opacity, 1));*/
        --tw-gradient-stops: var(--custom-from), var(--custom-to, rgba(255, 255, 255, 0));
        /*--tw-gradient-to: rgba(74, 0, 224, var(--tw-to-opacity, 1));*/
        @apply rounded-full overflow-hidden bg-gradient-to-br w-max-92px h-max-92px;
    }

    .picture.other {
        @apply border-2 border-gray-200 bg-none flex fill-gray-200 items-center justify-center;
    }

    img {
        @apply w-full h-full;        
    }
</style>

