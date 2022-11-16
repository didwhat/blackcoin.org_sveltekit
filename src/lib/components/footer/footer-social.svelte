<script>
	import metadata from '$lib/components/metadata';
</script>

<div class="social">
	{#each metadata.author.social as s}
		<a target="_blank noreferrer" href={s.url}>
			<i class={s.class}>{s.name}</i>
		</a>
	{/each}
</div>

<style>
	.social {
		display: inline-flex;
		justify-content: center;
		flex-wrap: wrap;
	}
	a {
		padding-right: 1rem;
	}
</style>
