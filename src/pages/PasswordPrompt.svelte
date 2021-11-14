<script lang="ts">
    import { onMount } from "svelte";
    import { push, link } from "svelte-spa-router";
    import Input from "../components/Input.svelte";

    const userImageUrl: string = window.config.get_str("branding", "user_image");
    let password: string = "";

    onMount(async () => {
        if (window.lightdm.authentication_user === null) {
            push("/select-user");
        }
    });

    let submit = () => {
        window.lightdm.respond(password);
        //window.lightdm.authenticate();
    };

    let cancel = () => {
        window.lightdm.cancel_authentication();
        push("/select-user");
    };
</script>


<img src={userImageUrl} />
<h1>Enter password!</h1>
<Input type="password" bind:value={password} />
<!--<input type="password" bind:value={password}>-->
<button on:click={submit}>Login</button>
<button on:click={cancel}>cancel</button>

<style>
    img {
        @apply rounded-full;
    }
</style>