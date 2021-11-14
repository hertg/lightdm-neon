<script lang="ts">
import Input from "../components/Input.svelte";

    let username: string = "";
    let login = () => {
        window.lightdm.authenticate(username);
    };
</script>

<h1>Enter a username</h1>
<Input bind:value={username} />
<button on:click={login}>Login</button>