<script lang="ts">
    import Button from "../components/Button.svelte";
    import UserOption from "../components/UserOption.svelte";

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


{#each window.lightdm.users as user}
    <UserOption name={user.display_name} image={user.image} />
    <Button on:click={() => select(user.username)}>{user.display_name}</Button>
{/each}

<!-- login with a user that isn't listed here -->
<!--<p id="other-user" on:click={other}>Other</p>-->

<style>
    /*#other-user {
        @apply text-center cursor-pointer mt-4;
    }*/
</style>
