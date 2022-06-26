<script lang="ts">
    import { push } from "svelte-spa-router";

    import Input from "../components/Input.svelte";
    import Menu from "../components/Menu.svelte";

    let username: string = "";
    const submit = () => {
        window.lightdm.authenticate(username);
    };

    const cancel = () => {
        window.lightdm.cancel_authentication();
        push("/select-user");
    };
</script>

<Menu />
<Input bind:value={username} on:enter={submit} icon="Person16" placeholder="Username" />
<!--<Button primary on:click={submit}>Login</Button>
<Button on:click={cancel}>Cancel</Button>-->
