<script lang="ts">
    import { onMount } from "svelte";
    import { inAuthentication } from "../store/LightDMStore";
    import { lightdm } from "../utils/LightDMProvider";

    let username: string = null;
    let password: string = null;
    
    let submit = () => {
        lightdm.authenticate(username);
        setTimeout(() => lightdm.respond(password), 500);
    };

    setInterval(() => {
        //console.log(lightdm);
        //console.log(`interval: ${lightdm.authentication_user}`);
    }, 1000);
</script>

<h1>junge ({$inAuthentication})</h1>
<input type="text" name="username" bind:value={username} />
<input type="password" name="password" bind:value={password} />
<input type="checkbox" bind:checked={$inAuthentication} />
<button on:click={submit}>Login</button>
