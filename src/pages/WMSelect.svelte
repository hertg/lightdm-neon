<script lang="ts">
    import { pop } from "svelte-spa-router";
    import BigButton from "../components/BigButton.svelte";
    import FadeInWrapper from "../components/FadeInWrapper.svelte";

    import { selectedSession, sessionTouched } from "../store/runtime";

    const choose = (key: string) => {
        $selectedSession = key;
        $sessionTouched = true;
        pop();
    }

    const availableLogos: string[] = [
        "awesome",
        "bspwm",
        "budgie",
        "cinnamon",
        "deepin",
        "elementary",
        "enlightenment",
        "gnome",
        "i3-with-shmlog",
        "i3",
        "liri",
        "lxde",
        "mate",
        "plasma",
        "qtile",
        "sway",
        "ubuntu",
        "xfce",
        "xmonad"
    ]
    const sessionLogo = (key: string) => {
        if (!availableLogos.includes(key)) {
            key = "session-default";
        }
        return "assets/img/sessions/" + key + ".png";
    }
</script>

<FadeInWrapper>
    <div class="container">
        {#each window.lightdm.sessions as session}
            <BigButton on:click={() => choose(session.key)} text={session.name} image={sessionLogo(session.key)} />
        {/each}
    </div>
</FadeInWrapper>

<style>
    .container {
        @apply w-screen h-screen p-10 flex flex-wrap items-center justify-center text-light-50 gap-4;
    }

    button {
        @apply px-2 py-1 cursor-pointer items-center select-none transition;
    }

    button:hover {
        background-color: var(--accent-color);
    }
</style>
