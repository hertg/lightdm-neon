<script lang="ts">
    import { onMount } from "svelte";
    import { push, replace } from "svelte-spa-router";
    import { fade } from 'svelte/transition';
	import { quadInOut } from 'svelte/easing';
    import Container from "../components/Container.svelte";
    import Input from "../components/Input.svelte";
    import UserImage from "../components/UserImage.svelte";
    import { authenticating, selectedSession, sessionTouched } from "../store/runtime";

    let user = window.lightdm.users.find(u => u.username === window.lightdm.authentication_user);
    
    let password: string = "";

    onMount(async () => {
        // if we go to the '/login' page (which can happen when going back in history), 
        // but lightdm is currently not in an authentication process, the current user is 'undefined'.
        // In this case, we redirect back to the user-selection page.
        if (!user) {
            replace('/select-user');
            return;
        }

        console.log(user);

        // if the user has a preferred session, automatically select it if
        // the session switcher hasn't been touched yet.
        if (user.session && $selectedSession !== user.session && !$sessionTouched) {
            $selectedSession = user.session;
        }
    });

    const submit = () => {
        if (!$authenticating) {
            $authenticating = true;
            window.lightdm.respond(password);
        }
    };

    const cancel = () => {
        $authenticating = false;
        window.lightdm.cancel_authentication();
        push("/select-user");
    };
</script>

<Container backFn={cancel}>
    {#if user !== undefined}
        <div id="pw-prompt">
            <UserImage bind:user />
            <p id="name">{user.display_name}</p>
            <Input type="password" placeholder="Password" bind:value={password} on:enter={submit} icon="Key16" withSubmit={true} autofocus loading={$authenticating} />
            <p class="cancel-auth" on:click={cancel}>change user</p>
        </div>
    {/if}
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