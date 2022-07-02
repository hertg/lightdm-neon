<script lang="ts">
    import { push } from "svelte-spa-router";
    import Container from "../components/Container.svelte";
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

<Container backFn={cancel}>
    <div id="user-prompt">
        <Input type="text" placeholder="Username" bind:value={username} on:enter={submit} icon="Person24" withSubmit={true} autofocus />
        <p class="cancel-auth" on:click={cancel}>cancel</p>
    </div>
</Container>

<style>
    #user-prompt {
        @apply w-72 flex flex-col items-center gap-4;
    }

    .cancel-auth {
        @apply text-center cursor-pointer text-light-500 text-12px;
    }
</style>
