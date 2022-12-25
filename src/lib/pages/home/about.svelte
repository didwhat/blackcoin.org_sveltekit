<script>
	import aboutI18n from './about.i18n';
	import Item from './about-item.svelte';
	import i18n from '$lib/i18n';
	import aboutItems from './about-items';

	export let lang;
</script>

<section class="section">
	<header>
		<h2 class="golden" id="about">{i18n(aboutI18n, 'about_blackcoin', lang)}</h2>
	</header>
	<div class="container">
		<div class="about-section">
			{#each aboutItems as item}
				{#if item.side === 'left'}
					<Item {...item} {lang} />
				{/if}
			{/each}
		</div>

		<div class="blkb about-section">
			<picture>
				<source srcset="/images/blkb.webp" type="image/webp" />
				<source srcset="/images/blkb.png" type="image/png" />
				<img height="526" width="402" src="/images/blkb.png" alt="Blackcoin B" />
			</picture>
		</div>

		<div class="about-section">
			{#each aboutItems as item}
				{#if item.side === 'right'}
				<Item {...item} {lang} />
				{/if}
			{/each}
		</div>
	</div>
</section>

<style>
	.container {
		display: block;
		margin: 0 auto;
	}
	.blkb img {
		height: auto;
		width: 50%;
		margin-left: 25%;
	}
	@media (min-width: 300px) {
		.about-section {
			width: 95%;
			margin: 0 auto;
		}
	}
	@media (min-width: 700px) {
		.container {
			display: flex;
			justify-content: center;
			width: 80%;
		}
		.about-section {
			width: 33%;
		}
		.blkb {
			display: flex;
			align-self: center;
			justify-content: center;
		}
	}
	@media (min-width: 1080px) {
		.container {
			display: flex;
			justify-content: center;
			width: 80%;
		}
		.about-section {
			width: 33%;
		}
		.blkb img {
			width: 70%;
			margin-left: 15%;
		}
	}
	@media (min-width: 1440px) {
		.container {
			display: flex;
			justify-content: center;
			width: 80%;
		}
		.about-section {
			width: 33%;
		}
		.blkb img {
			width: 95%;
			margin-left: 2.5%;
		}
	}
	@media (min-width: 2856px) {
		.container {
			display: flex;
			justify-content: center;
			width: 80%;
		}
		.about-section {
			width: 33%;
		}
		.blkb img {
			width: 100%;
			margin-left: 0;
		}
	}
</style>
