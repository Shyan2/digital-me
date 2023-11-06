<script>
	import { toggleTheme } from '$lib';
	import NavLink from './NavLink.svelte';
	import { page } from '$app/stores';

	$: isCurrentPage = (path) => $page.url.pathname === path;
</script>

<nav class="mt-2 bg-navbar-light p-2 dark:bg-navbar-dark fixed top-0 left-0 w-full">
	<div class="mx-auto max-w-4xl sm:px-6 lg:px-8 flex justify-between items-center">
		<!-- Logo Placeholder-->
		<div class="flex-shrink-0 invisible">
			<!-- <img class="h-6 w-auto" src="" alt="Logo" /> -->
			<p class="h-6 w-auto">Logo</p>
		</div>
		<!-- Centered menu list -->
		<div class="flex-grow">
			<ul class="list-none flex justify-center space-x-4">
				<li><NavLink href="/" isActive={isCurrentPage('/')}>Home</NavLink></li>
				<li><NavLink href="/about" isActive={isCurrentPage('/about')}>About</NavLink></li>
				<!-- <li><NavLink href="/blog" isActive={isCurrentPage('/blog')}>Blog</NavLink></li> -->
				<li><NavLink href="/contact" isActive={isCurrentPage('/contact')}>Contact</NavLink></li>
				<!-- <li><NavLink href="/playground" isActive={isCurrentPage('/playground')}>Playground</NavLink></li> -->
			</ul>
		</div>

		<!-- Dark mode icon-->
		<div class="flex-shrink-0">
			<button
				id="toggleDark"
				class="text-blue-900 text-sm font-medium bg-blue-100 rounded-md"
				style="background: transparent; border: none;"
				on:click={toggleTheme}
				><svg
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
					stroke-width="2"
					stroke-linecap="round"
					class="w-6 h-6"
				>
					<path
						d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
						class="fill-light-background stroke-dark-background dark:stroke-light-background dark:fill-light-background"
					/>
					<path
						d="M12 4v1M17.66 6.344l-.828.828M20.005 12.004h-1M17.66 17.664l-.828-.828M12 20.01V19M6.34 17.664l.835-.836M3.995 12.004h1.01M6 6l.835.836"
						class=" stroke-dark-background dark:stroke-light-background"
					/>
				</svg>
			</button>
		</div>
	</div>
</nav>

<!-- Main content -->
<div class="pt-10 sm:pt-10 lg:pt-10">
	<!-- padding to prevent items going under the navbar -->
	<slot />
</div>
