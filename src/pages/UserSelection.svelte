<script lang="ts">
import { lightdm } from "nody-greeter-types";

    import Button from "../components/Button.svelte";

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
