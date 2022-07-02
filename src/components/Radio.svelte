<script lang="ts">
    import Icon from "./Icon.svelte";

    export let id: string;
    export let value: any;
    export let options: RadioOption[];
</script>

<div>
    <span class="buttonset">
        {#each options as option, index}
            <input type="radio" id="{id}_{index}" value="{option.value}" bind:group={value} />
            <label for="{id}_{index}">
                    <!--<Icon icon={option.icon} />-->
                    <div class="text">
                        {option.text}
                    </div>
            </label>
        {/each}
    </span>
</div>

<style>
    span.buttonset {
        @apply flex relative gap-2;
    }

    span.buttonset > label {
        @apply mb-2;
    }

    label {
        @apply flex border border-white text-white gap-2 p-2 rounded-sm cursor-pointer transition;
    }

    input:checked + label {
        @apply bg-gray-100 text-black fill-black;
        /*background-color: var(--accent-color);*/
    }

    input[type="radio"] {
        display: none;
    }
</style>