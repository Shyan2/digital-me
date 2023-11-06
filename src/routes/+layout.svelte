<script>
	import '../app.css';
	import { onHydrated } from '$lib';
	import { onMount } from 'svelte';
	import Navbar from '../lib/components/Navbar/Navbar.svelte';

	onMount(() => onHydrated());
</script>

<div class="flex flex-col min-h-screen">
	<Navbar />
	<main class="flex-grow container max-w-4xl mx-auto px-2 mt-5 sm:px-6 lg:px-8">
		<slot />
	</main>
	<footer class="mt-auto p-4">
		<div class="text-center text-light-primary dark:text-dark-primary">
			<p class="text-light-primary dark:text-dark-primary text-center text-sm">
				Developed with <span class="text-red-500">&hearts;</span> using Svelte and Tailwind CSS
			</p>
			<p class="text-xs mt-4">
				© 2023 Shyan Chien. Check out <a
					class="underline hover:text-light-accent dark:text-dark-primary dark:hover:text-dark-accent transition-colors duration-200"
					href="https://github.com/Shyan2/digital-me"
					target="_blank"
					rel="noopener noreferrer">GitHub Repository</a
				> for more details.
			</p>
		</div>
	</footer>
</div>
