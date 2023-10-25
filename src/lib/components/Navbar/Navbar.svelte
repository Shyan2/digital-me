<script>
	import { theme, toggleTheme } from '$lib';
	import NavLink from './NavLink.svelte';
	import { page } from '$app/stores';
	import DarkModeIcon from './DarkModeIcon.svelte';

	$: isCurrentPage = (path) => $page.url.pathname === path;
</script>

<nav class="bg-gray-800 p-2 dark:bg-black fixed top-0 left-0 w-full">
	<div class="mx-auto max-w-4xl sm:px-6 lg:px-8 flex justify-between items-center">
		<!-- Logo -->
		<div class="flex-shrink-0">
			<img
				class="h-6 w-auto"
				src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
				alt="Your Company"
			/>
		</div>
		<!-- Centered menu list -->
		<ul class="list-none flex space-x-4">
			<li><NavLink href="/" isActive={isCurrentPage('/')}>Home</NavLink></li>
			<li><NavLink href="/about" isActive={isCurrentPage('/about')}>About</NavLink></li>
			<!-- <li><NavLink href="/blog" isActive={isCurrentPage('/blog')}>Blog</NavLink></li> -->
			<li><NavLink href="/contact" isActive={isCurrentPage('/contact')}>Contact</NavLink></li>
			<!-- <li><NavLink href="/playground" isActive={isCurrentPage('/playground')}>Playground</NavLink></li> -->
		</ul>
		<!-- Dark mode icon-->
		<button
			id="toggleDark"
			class="text-blue-900 text-sm font-medium bg-blue-100 rounded-md"
			style="background: transparent; border: none;"
			on:click={toggleTheme}
			>{#if $theme}
				<DarkModeIcon icon="moon" />
			{:else}
				<DarkModeIcon icon="sun" />
			{/if}
		</button>
	</div>
</nav>

<!-- Main content -->
<div class="pt-10 sm:pt-10 lg:pt-10">
	<!-- padding to prevent items going under the navbar -->
	<slot />
</div>
