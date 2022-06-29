<script lang="ts">
    import { fly, fade } from 'svelte/transition';
    import { flip } from 'svelte/animate';
    import { notifications } from '../store/runtime';
    import Toast from "./Toast.svelte";

    const del = (id: number) => {
        notifications.update((n) => n.filter(n => n.id != id));
    }
</script>

<div id="notifications">
    {#each $notifications as notification (notification.id)}
        <div class="notification-container" 
            in:fly={{ x: 90, duration: 150 }} 
            out:fade={{ duration: 150 }} 
            animate:flip="{{duration: 200}}">

            <Toast {notification} on:close={() => del(notification.id)} />
        </div>      
    {/each}
</div>

<style>
    #notifications {
        @apply fixed flex flex-col gap-2 pointer-events-none right-2 top-12 w-80 h-screen p-4 box-border;
    }

    .notification-container {
        pointer-events: auto;
    }
</style>
