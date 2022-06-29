<script lang="ts">
import { createEventDispatcher } from "svelte";

import Icon from "./Icon.svelte";

    export let notification: GreeterNotification;

    const dispatch = createEventDispatcher();

    function close() {
        dispatch('close');
    }

    const getColor = (type: string) => {
        switch (type) {
            case "error":
                return "red";
        }
        return "blue";
    }
</script>

<div class="toast" style="--color: {getColor(notification.type)}">
    <div class="text">{notification.text}</div>
    <div class="icon" on:click={close}>
        <Icon icon="X16" />
    </div>
</div>

<style>
    .toast {
      @apply flex justify-between items-center shadow-lg border bg-gray-900 text-light-200 fill-light-200 border-gray-600 p-3 rounded-sm select-none;
      /*border-bottom: 1px solid var(--color);*/
    }

    .icon {
        @apply w-4 cursor-pointer;
    }

</style>