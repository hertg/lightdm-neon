<script lang="ts">
    import { push } from "svelte-spa-router";
    import Button from "../components/Button.svelte";

    let select = (username: string) => {
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
<Button on:click={other}>Other</Button>

<style>

</style>
