<script lang="ts">
    import { push } from "svelte-spa-router";
import Button from "../components/Button.svelte";

    $: users = window.lightdm.users;
    let select = (username: string) => {
        window.lightdm.authenticate(username);
    };
</script>

{#each users as user}
    <Button on:click={() => select(user.username)}>{user.display_name}</Button>
{/each}

<!-- login with a user that isn't listed here -->
<Button on:click={() => push("/user")}>Other</Button>

<style>

</style>
