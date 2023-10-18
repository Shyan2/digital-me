<script>
	import '../app.css';
	import { onHydrated } from '$lib';
	import { onMount } from 'svelte';
	import Navbar from '../lib/components/Navbar/Navbar.svelte';

	onMount(() => onHydrated());
</script>

<Navbar />

<main class="container max-w-4xl mx-auto px-2 sm:px-6 lg:px-8 bg-blue-100 dark:bg-blue-300">
	<slot />
</main>
