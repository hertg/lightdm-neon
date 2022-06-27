<script lang="ts">
    import { onMount } from "svelte";
    import { push } from "svelte-spa-router";
    import { slide, fly, fade } from 'svelte/transition';
	import { quadInOut } from 'svelte/easing';
    import Container from "../components/Container.svelte";
    import Input from "../components/Input.svelte";
    import UserImage from "../components/UserImage.svelte";
    import { selectedSession, sessionTouched } from "../store/runtime";

    let user = window.lightdm.users.find(u => u.username === window.lightdm.authentication_user);
    
    let password: string = "";

    onMount(async () => {
        if (user.session && $selectedSession !== user.session && !$sessionTouched) {
            $selectedSession = user.session;
        }
    });

    const submit = () => {
        window.lightdm.respond(password);
    };

    const cancel = () => {
        window.lightdm.cancel_authentication();
        push("/select-user");
    };
</script>

<Container>
    <div id="pw-prompt" in:fade="{{ duration: 340, easing: quadInOut }}">
        <UserImage bind:user />
        <p id="name">{user.display_name}</p>
        <Input type="password" placeholder="Password" bind:value={password} on:enter={submit} icon="Key16" withSubmit={true} autofocus />
        <p class="cancel-auth" on:click={cancel}>change user</p>
    </div>
</Container>

<style>
    #pw-prompt {
        @apply w-72 flex flex-col items-center gap-4;
    }

    p#name {
        @apply text-center text-2xl text-light-100;
    }

    .cancel-auth {
        @apply text-center cursor-pointer text-light-500 text-12px;
    }
</style>