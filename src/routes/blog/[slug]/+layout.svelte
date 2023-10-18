<script>
	import { BlogStories } from '$lib/stores';
</script>

<div class="layout">
	<main>
		<slot />
	</main>

	<aside>
		<h2>Read more</h2>
		<ul>
			{#each $BlogStories as { id, title }}
				<li>
					- <a href="/blog/{id}">{title}</a>
				</li>
			{/each}
		</ul>
	</aside>
</div>

<style>
	.layout {
		display: grid;
		grid-template-columns: 1fr 16em;
	}
</style>
