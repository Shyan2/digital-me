<script>
	export let href = '';
	export let isActive = false;
</script>

<a
	{href}
	class={`no-underline text-white py-2 px-4 rounded transition ease-in hover:bg-gray-700 focus:outline-none focus:bg-gray-700 ${
		isActive ? 'bg-gray-700' : ''
	}`}
>
	<slot />
</a>
