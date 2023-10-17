<script>
	import { toggleTheme } from '$lib';
</script>

<main class="p-5">
	<h1 class="text-center text-lg text-green-400">Hello World</h1>

	<div class="w-full h-10 bg-violet-200 border-violet-600 border-2 rounded-md my-4 p-2">
		<p class="text-center font-mono font-extrabold">A div</p>
	</div>

	<!-- layout -->
	<div class="fixed w-10 h-10 bg-red-500 top-0" />

	<div class="flex justify-between">
		<div class="h-16 w-16 rounded-full bg-blue-500" />
		<div class="h-16 w-16 rounded-full bg-blue-500" />
		<div class="h-16 w-16 rounded-full bg-blue-500" />
	</div>
	<div class="grid grid-cols-3 gap-2 mt-3">
		<div class="bg-violet-500 h-12" />
		<div class="bg-violet-500 h-12" />
		<div class="bg-violet-500 h-12" />
	</div>

	<div class="md:block hidden">
		<p>I will appear at > 768px</p>
	</div>

	<div class="max-md:block hidden">
		<p>I will appear at &lt; 768px</p>
	</div>

	<button
		class="my-2 rounded-lg bg-blue-500 px-4 py-2 text-white hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300 active:bg-blue-800"
		>Click Me
	</button>

	<ul class="my-2 space-y-2">
		<li class="bg-white-p2 first:bg-yellow-100">Item 1</li>
		<li class="bg-white-p2 first:bg-yellow-100 odd:bg-blue-200 even:bg-green-200">Item 1</li>
		<li class="bg-white-p2 first:bg-yellow-100 odd:bg-blue-200 even:bg-green-200">Item 2</li>
		<li class="bg-white-p2 first:bg-yellow-100 odd:bg-blue-200 even:bg-green-200">Item 3</li>
		<li class="bg-white-p2 first:bg-yellow-100 odd:bg-blue-200 even:bg-green-200">Item 4</li>
	</ul>

	<div class="card">
		<h3 class="text-base font-medium tracking-tight text-slate-900 dark:text-white">This is a text element</h3>
		<p class="mt-2 text-sm text-slate-900 dark:text-blue-100">this is an even longer p tag element</p>
		<button
			id="toggleDark"
			class="text-blue-900 px-4 py-2 text-sm font-medium mt-8 bg-blue-100 rounded-md"
			on:click={toggleTheme}
			>Toggle Dark mode
		</button>
	</div>

	<p class="text-2xl text-chestnut bg-stone-100 p-[16px]">Chestnut Color</p>
</main>
