<script lang="ts">
    import Button from "../components/Button.svelte";

    let select = (username: string) => {
        console.log("selected");
        window.lightdm.authenticate(username);
    };

    let other = () => {
        window.lightdm.authenticate();
    }
</script>


{#each window.lightdm.users as user}
    <Button on:click={() => select(user.username)}>{user.display_name}</Button>
{/each}

<!-- login with a user that isn't listed here -->
<p id="other-user" on:click={other}>Other</p>
<!--<Button on:click={other}>Other</Button>-->

<style>
    #other-user {
        @apply text-center cursor-pointer mt-4;
    }
</style>
