<script lang="ts">
    import { fly } from 'svelte/transition';
    import { notifications } from '../store/runtime';
    import Toast from "./Toast.svelte";
</script>

<div id="notifications">
    {#each $notifications as notification}
    <div class="notification-container" in:fly={{ y: -90, duration: 150 }} out:fly={{ y: 90, duration: 150 }}>
        <Toast {notification} />
    </div>       
    {/each}
    <!--
    {#each $notifications as notification}
        <div
            class="notification-container"
            in:fly={{ x: 90, duration: 150 }}
            out:fly={{ x: 90, duration: 150 }}
        >
            <Toast {notification} />
        </div>
    {/each}-->
</div>

<style>
    #notifications {
        position: fixed;
        width: 300px;
        height: 100%;
        padding: 12px;
        box-sizing: border-box;
        top: 0;
        right: auto;
        left: auto;
        display: flex;
        flex-direction: column;
        justify-content: flex;
        gap: 6px;
        pointer-events: none;
    }

    .notification-container {
        pointer-events: auto;
    }
</style>
