<script lang="ts">
    import { onMount } from "svelte";
    import { push } from "svelte-spa-router";
    import Button from "../components/Button.svelte";
    import Input from "../components/Input.svelte";
    import { validating } from "../store/LightDMStore";

    const user = window.lightdm.users.find(u => u.username === window.lightdm.authentication_user);
    const defaultAvatar: string = window.greeter_config.branding.user_image;
    const userImageUrl: string = user && user.image !== null && user.image !== "" ? user.image : defaultAvatar;
    
    let password: string = "";

    onMount(async () => {
        if (window.lightdm.authentication_user === null) {
            push("/select-user");
        }
    });

    const submit = () => {
        window.lightdm.respond(password);
        //window.lightdm.authenticate();
    };

    const cancel = () => {
        window.lightdm.cancel_authentication();
        push("/select-user");
    };
</script>


<img id="avatar" src={userImageUrl} alt="avatar" />
<p id="name">{user.display_name}</p>
<Input type="password" placeholder="Password" bind:value={password} on:enter={submit} autofocus icon="Key16" />
<Button primary on:click={submit}>Login</Button>
<!--<Button on:click={cancel}>Cancel</Button>-->
<p class="cancel-auth" on:click={cancel}>Cancel</p>

<style>
    img#avatar {
        max-width: 150px;
        max-height: 150px;
        @apply rounded-full mx-auto my-2 mb-8 shadow;
    }

    p#name {
        @apply text-center underline decoration-pink-500 decoration-4 text-2xl font-bold;
    }

    .cancel-auth {
        @apply text-center cursor-pointer mt-4;
    }
</style>