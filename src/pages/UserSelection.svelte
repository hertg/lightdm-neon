<script lang="ts">
    import { push } from 'svelte-spa-router'

    $: users = window.lightdm.users;
    let select = (username: string) => {
        window.lightdm.authenticate(username);
    }
</script>

<h1>Select user</h1>
<li>
    {#each users as user}
        <button on:click={() => select(user.username)}>{user.display_name}</button>
    {/each}
    
    <!-- login with a user that isn't listed here -->
    <button class="bg-teal-500" on:click={() => push('/user')}>Other</button>
</li>