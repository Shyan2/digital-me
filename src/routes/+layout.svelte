<script>
	import "../app.css"
</script>

<nav>
	<a href="/">home</a>
	<a href="/about">about</a>
	<a href='/playground'>playground</a>
</nav>


<slot />

<footer>
	Footer example
</footer>


<style lang="postcss">
  :global(html) {
    background-color: theme(colors.gray.100);
  }

</style>