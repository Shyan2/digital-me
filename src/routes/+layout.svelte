<script>
	import '../app.css';
	import { onHydrated } from '$lib';
	import { onMount } from 'svelte';
	import Navbar from '../lib/components/Navbar/Navbar.svelte';

	onMount(() => onHydrated());
</script>

<Navbar />

<main class="container">
	<slot />
</main>

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.gray.100);
	}
</style>
