<script>
	export let locales;
</script>

{#each locales as locale}
	<a style="display:none;" href="/{locale.code}/donations">/{locale.code}/donations</a>
	<a style="display:none;" href="/{locale.code}/faq">/{locale.code}/faq</a>
{/each}
