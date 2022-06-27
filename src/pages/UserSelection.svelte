<script lang="ts">
    import UserOption from "../components/UserOption.svelte";
    import { onMount } from "svelte";
    import type { LightDMUser } from "nody-greeter-types";
    import { push } from "svelte-spa-router";
    import Container from "../components/Container.svelte";

    let select = (username: string) => {
        console.debug(`selected ${username}`);
        window.lightdm?.authenticate(username);
    };

    let other = () => {
        console.log(`select user`);
        window.lightdm?.authenticate(null);
    }

    onMount(async () => {
        let default_user: LightDMUser = null;
        if (window.lightdm.users.length === 1) {
            default_user = window.lightdm.users[0];
        }
        if (default_user != null) {
            window.lightdm.authenticate(default_user.username)
        }
    })
</script>

<Container>
    <div id="user-list">
        {#each window.lightdm.users as user}
            <UserOption bind:user on:click={() => select(user.username)} />
        {/each}
        <!--
        {#if window.lightdm.has_guest_account}
            <UserOption user={null} on:click={() => push('/user')} />
        {/if}
        -->
        {#if window.lightdm.show_manual_login_hint}
            <UserOption user={null} on:click={() => push('/user')} />
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
