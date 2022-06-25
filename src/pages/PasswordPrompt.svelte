<script lang="ts">
    import { onMount } from "svelte";
    import { push } from "svelte-spa-router";
    import { slide, fly, fade } from 'svelte/transition';
	import { quadInOut } from 'svelte/easing';
    import Menu from "../components/Menu.svelte";
    import PasswordInput from "../components/PasswordInput.svelte";
    import UserImage from "../components/UserImage.svelte";
    import { selectedSession, sessionTouched } from "../store/runtime";

    let user = window.lightdm.users.find(u => u.username === window.lightdm.authentication_user);
    
    let password: string = "";

    onMount(async () => {
        if (user.session && $selectedSession !== user.session && !$sessionTouched) {
            $selectedSession = user.session;
        }
        // this doesn't work right now
        /*if (window.lightdm.authentication_user === null) {
            push("/select-user");
        }*/
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

<Menu />
<div id="pw-prompt" in:fade="{{ duration: 340, easing: quadInOut }}">
    <UserImage bind:user />
    <p id="name">{user.display_name}</p>
    <PasswordInput bind:password icon="Key16" on:enter={submit} />
    <!--<Input type="password" placeholder="Password" bind:value={password} on:enter={submit} autofocus icon="Key16" />-->
    <!--<Button primary on:click={submit}>Login</Button>-->
    <p class="cancel-auth" on:click={cancel}>change user</p>
</div>

<style>
    #pw-prompt {
        @apply w-72 flex flex-col items-center gap-4;
    }

    p#name {
        @apply text-center text-2xl text-light-100;
    }

    .cancel-auth {
        @apply text-center cursor-pointer text-white text-sm;
    }
</style>