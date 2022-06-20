<script lang="ts">
    import UserOption from "../components/UserOption.svelte";
    import { slide, fly } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
import Menu from "../components/Menu.svelte";

    let select = (username: string) => {
        console.log(`selected ${username}`);
        console.log(window.lightdm);
        let s = window.lightdm?.authenticate(username);
        console.log(s);

        //if (s) lightdm.respond(username)
    };

    let other = () => {
        console.log(`select user`);
        window.lightdm?.authenticate(null);
    }
</script>

<Menu />
<div id="user-list" >
    {#each window.lightdm.users as user}
        <UserOption bind:user on:click={() => select(user.username)} />
    {/each}
</div>

<!-- login with a user that isn't listed here -->
<!--<p id="other-user" on:click={other}>Other</p>-->

<style>
    #user-list {
        @apply flex w-sm gap-8;
    }
    /*#other-user {
        @apply text-center cursor-pointer mt-4;
    }*/
</style>
