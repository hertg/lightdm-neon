<script lang="ts">
    import { onMount } from "svelte";
    import { push } from 'svelte-spa-router'

    let password: string;

    onMount(async() => {
        if (window.lightdm.authentication_user === null) {
            push('/select-user');
        }
    });

    let submit = () => {
        window.lightdm.respond(password);
    }
</script>

<h1>Enter password!</h1>
<input type="password" bind:value={password}>
<button on:click={submit}>Login</button>