<script lang="ts">
    import { pop } from "svelte-spa-router";
    import BigButton from "../components/BigButton.svelte";
    import Container from "../components/Container.svelte";
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
        "xmonad",
        "leftwm"
    ]
    const sessionLogo = (key: string) => {
        if (!availableLogos.includes(key)) {
            key = "session-default";
        }
        return "assets/img/sessions/" + key + ".png";
    }
</script>

<Container>
    <div class="container">
        {#each window.lightdm.sessions as session}
            <BigButton on:click={() => choose(session.key)} text={session.name} image={sessionLogo(session.key)} />
        {/each}
    </div>
</Container>

<style>
    .container {
        @apply w-screen h-screen p-10 flex flex-wrap row-auto justify-center content-center text-light-50 gap-4 gap-y-8;
    }
</style>
