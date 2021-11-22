<script lang="ts">
    export let notification: GreeterNotification;
    function close() {
        // self.destroy();
        // $self.destroy();
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
</div>

<style>
    .toast {
      border-bottom: 3px solid var(--color);
      @apply shadow-lg bg-light-50 p-3 rounded-sm;
    }
</style>