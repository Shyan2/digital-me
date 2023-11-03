<script>
	import '../app.css';
	import { onHydrated } from '$lib';
	import { onMount } from 'svelte';
	import Navbar from '../lib/components/Navbar/Navbar.svelte';

	onMount(() => onHydrated());
</script>

<Navbar />

<main class="container max-w-4xl mx-auto px-2 mt-5 sm:px-6 lg:px-8">
	<slot />
</main>
