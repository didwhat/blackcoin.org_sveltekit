<script>
	import footerLinks from './footer-links';
</script>

<div class="social">
	{#each footerLinks as s}
		<a target="_blank noreferrer" href={s.url}>
			{s.alt}
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
		padding: 1rem;
		font-size: x-large;
	}
	@media (min-width: 1080px) {
		.social {
			/* display: inline-flex;
			justify-content: center;
			flex-wrap: wrap; */
			width: 25%;
		}
	}
</style>
