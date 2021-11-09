<script lang="ts">
	export let name: string;
	
	let username: string;
	let password: string;

	console.log(window.lightdm.users);

	window.lightdm.authenticate();

	let submit = () => {
		console.log("authentication");
	}
</script>

<main>
	<h1>Hello {name}!</h1>
	<input type="text" name="username" bind:value={username} />
	<input type="password" name="password" bind:value={password} />
	<button type="submit" on:click={submit}>Login</button>
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