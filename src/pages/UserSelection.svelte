<script lang="ts">
    import UserOption from "../components/UserOption.svelte";
    import { onMount } from "svelte";
    import type { LightDMUser } from "nody-greeter-types";
    import { push } from "svelte-spa-router";
    import Container from "../components/Container.svelte";
    import { themeSettings } from "../store/settings";
    import { userAutoSelectHappened } from "../store/runtime";

    let backFn = () => {push('/')};

    const select = (username: string) => {
        console.debug(`selected ${username}`);
        window.lightdm?.authenticate(username);
    };

    const other = () => {
        console.debug(`select 'other' user`);
        window.lightdm?.authenticate(null);
    }

    onMount(async () => {
        let default_user: LightDMUser = null;
        if (window.lightdm.users.length === 1) {
            default_user = window.lightdm.users[0];
        }
        if (default_user != null && !$userAutoSelectHappened) {
            $userAutoSelectHappened = true;
            window.lightdm.authenticate(default_user.username)
        }
        if ($themeSettings.skip_splashscreen) {
            backFn = null;
        }
    })

    
</script>

<Container {backFn}>
    <div id="user-list">
        {#each window.lightdm.users as user, i}
            <UserOption bind:user on:click={() => select(user.username)} tabindex={i+1} />
        {/each}
        <!--
        {#if window.lightdm.has_guest_account}
            <UserOption user={null} on:click={() => push('/user')} />
        {/if}
        -->
        {#if window.lightdm.show_manual_login_hint}
            <UserOption user={null} on:click={() => other()} tabindex={window.lightdm.users.length+1} />
        {/if}
    </div>
</Container>

<!-- login with a user that isn't listed here -->
<!--<p id="other-user" on:click={other}>Other</p>-->

<style>
    #user-list {
        @apply flex gap-8;
    }
    /*#other-user {
        @apply text-center cursor-pointer mt-4;
    }*/
</style>
