<script lang="ts">
    import Input from "./Input.svelte";
    import { themeSettings } from "../store/settings";
    import NeonSign from "./NeonSign.svelte";
    import Radio from "./Radio.svelte";
    import Icon from "./Icon.svelte";
    import Switch from "./Switch.svelte";

    const fontOptions: RadioOption[] = [
        {value: "Neonderthaw", text: "Neonderthaw", icon: "Typography24"},
        {value: "Neoneon",text: "Neoneon",icon: "Pencil24"},
        {value: "Beon",text: "Beon",icon: "Pencil24"},
        {value: "Higher Monday",text: "Higher Monday",icon: "Pencil24"},
        {value: "Selfie",text: "Selfie",icon: "Pencil24"},
        {value: "Hastron",text: "Hastron",icon: "Pencil24"},
        {value: "Neon Sans",text: "Neon Sans",icon: "Pencil24"}
    ]

</script>



<style>

</style>