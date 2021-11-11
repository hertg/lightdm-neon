<script lang="ts">
	import Greeter from "./components/Greeter.svelte";
	let username: string;
	let password: string;

	//window.lightdm.authenticate();

	let submit = () => {
		lightdm.authenticate(username);
		//window.lightdm.authenticate(username);
	};
</script>

<main>
	<Greeter />
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
