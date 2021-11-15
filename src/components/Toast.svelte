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
      background-color: white;
      color: black;
      border-radius: 2px;
      padding: 12px;
      font-size: 14px;
      border-bottom: 3px solid var(--color);
    }
</style>