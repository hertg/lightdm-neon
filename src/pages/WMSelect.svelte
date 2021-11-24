<script lang="ts">
    import { selectedSession } from "../store/LightDMStore";
</script>

<select bind:value={$selectedSession}>
    {#each window.lightdm.sessions as session}
        <option value={session.key}>{session.name}</option>
    {/each}
</select>
