<script lang="ts">
    import { push } from "svelte-spa-router";

    import Button from "../components/Button.svelte";
    import Input from "../components/Input.svelte";

    let username: string = "";
    const submit = () => {
        window.lightdm.authenticate(username);
    };

    const cancel = () => {
        window.lightdm.cancel_authentication();
        push("/select-user");
    };
</script>

<h1>Username</h1>
<Input bind:value={username} on:enter={submit} icon="Person16" />
<Button primary on:click={submit}>Login</Button>
<Button on:click={cancel}>Cancel</Button>
