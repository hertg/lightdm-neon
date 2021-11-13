<script lang="ts">
    let username: string;
    let login = () => {
        window.lightdm.authenticate(username);
    };
</script>

<h1>Enter a username</h1>
<input type="text" name="username" bind:value={username}>
<button on:click={login}>Login</button>