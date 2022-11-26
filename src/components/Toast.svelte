<script lang="ts">
import { createEventDispatcher } from "svelte";

import Icon from "./Icon.svelte";

    export let notification: GreeterNotification;

    const dispatch = createEventDispatcher();

    function close() {
        dispatch('close');
    }
</script>

<div class="toast" class:error={notification.type==1}>
    <div class="text">{notification.text}</div>
    <div class="icon" on:click={close}>
        <Icon icon="X16" />
    </div>
</div>

<style>
    .toast {
      @apply flex justify-between items-center shadow-lg border bg-gray-900 text-light-200 fill-light-200 border-gray-600 p-3 rounded-sm select-none;
    }

    .toast.error {
        @apply bg-red-900 border-red-700;
    }

    .icon {
        @apply w-4 cursor-pointer;
    }

</style>