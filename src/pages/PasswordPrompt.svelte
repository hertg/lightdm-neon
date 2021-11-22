<script lang="ts">
    import { onMount } from "svelte";
    import { push, link } from "svelte-spa-router";
    import Button from "../components/Button.svelte";
    import Input from "../components/Input.svelte";

    const user = window.lightdm.users.find(u => u.username === window.lightdm.authentication_user);
    const defaultAvatar: string = window.config.get_str("branding", "user_image");
    const userImageUrl: string = user && user.image !== null ? user.image : defaultAvatar;
    
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

    .cancel-auth {
        @apply text-center cursor-pointer mt-4;
    }
</style>