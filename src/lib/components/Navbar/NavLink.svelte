<script>
	export let href = '';
	export let isActive = false;
</script>

<a
	{href}
	class={`no-underline  dark:text-dark-primary py-2 px-4 rounded transition ease-in hover:bg-dark-background hover:text-dark-primary dark:hover:bg-light-background dark:hover:text-light-primary focus:outline-none focus:bg-dark-background ${
		isActive
			? 'bg-dark-background text-dark-primary dark:bg-light-background dark:text-light-primary'
			: 'text-light-primary'
	}`}
>
	<slot />
</a>
