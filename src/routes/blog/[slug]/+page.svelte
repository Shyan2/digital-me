<script>
	import { page } from '$app/stores';
	import { BlogStories } from '$lib/stores';

	$: id = $page.params.slug;
	$: blog = $BlogStories.find((r) => String(r.id) === id);
</script>

<h1>{blog?.title}</h1>
<div>{blog?.date}</div>
<div>{@html blog?.text || ''}</div>
