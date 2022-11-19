<script>
    export let locales
</script>
{#each locales as locale}
	<a style="visability:hidden;" href="/{locale.code}/donations">/{locale.code}/donations</a>
	<a style="visability:hidden;" href="/{locale.code}/faq">/{locale.code}/faq</a>
{/each}