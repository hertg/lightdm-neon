<script lang="ts">
    import { push } from "svelte-spa-router";
    import Menu from "../components/Menu.svelte";
    import FadeInWrapper from "../components/FadeInWrapper.svelte";
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

<FadeInWrapper>
    <Menu />
    <div id="user-prompt">
        <Input type="text" placeholder="Username" bind:value={username} on:enter={submit} icon="Person24" withSubmit={true} />
        <p class="cancel-auth" on:click={cancel}>cancel</p>
    </div>
</FadeInWrapper>

<style>
    #user-prompt {
        @apply w-72 flex flex-col items-center gap-4;
    }

    .cancel-auth {
        @apply text-center cursor-pointer text-light-500 text-12px;
    }
</style>
