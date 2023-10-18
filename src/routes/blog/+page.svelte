<script>
	import { BlogStories } from '$lib/stores';
</script>

<h1>Blog</h1>

<ul>
	{#each $BlogStories as { id, title }}
		<li><a href="/blog/{id}">{title}</a></li>
	{/each}
</ul>
