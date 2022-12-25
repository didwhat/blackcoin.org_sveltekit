<script>
	import aboutI18n from './about.i18n';
	import Item from './about-item.svelte';
	import i18n from '$lib/i18n';

	export let lang;

	const aboutItems = [
		{
			side: 'left',
			h3: i18n(aboutI18n, 'proof_of_stake_v3', lang),
			p: i18n(aboutI18n, 'users_who_stake', lang),
			a: i18n(aboutI18n, 'read_more', lang),
			url: 'https://blackcoin.org/faq/',
			icon: '🔥'
		},
		{
			side: 'left',
			h3: i18n(aboutI18n, 'eco_friendly', lang),
			p: i18n(aboutI18n, 'no_mining', lang),
			icon: '🌲',
			a: i18n(aboutI18n, 'read_more', lang),
			url: 'https://blackcoin.org/faq/'
		},
		{
			side: 'left',
			h3: i18n(aboutI18n, 'transparent_ledger', lang),
			p: i18n(aboutI18n, 'entirely_transparent', lang),
			icon: '📄',
			a: i18n(aboutI18n, 'read_more', lang),
			url: 'https://blackcoin.org/faq/'
		},
		{
			side: 'right',
			icon: '🆓',
			h3: i18n(aboutI18n, 'open_source', lang),
			p: i18n(aboutI18n, 'can_be_audited', lang),
			a: i18n(aboutI18n, 'read_more', lang),
			url: 'https://blackcoin.org/faq/'
		},
		{
			side: 'right',
			icon: '⚡',
			h3: i18n(aboutI18n, 'fast', lang),
			p: i18n(aboutI18n, 'to_anyone_in_seconds', lang),
			a: i18n(aboutI18n, 'read_more', lang),
			url: 'https://blackcoin.org/faq/'
		},
		{
			side: 'right',
			icon: '👁️',
			h3: i18n(aboutI18n, 'anonymous', lang),
			p: i18n(aboutI18n, 'no_identifying_information', lang),
			a: i18n(aboutI18n, 'read_more', lang),
			url: 'https://blackcoin.org/faq/'
		}
	];
</script>

<section class="section">
	<header>
		<h2 class="golden" id="about">{i18n(aboutI18n, 'about_blackcoin', lang)}</h2>
	</header>
	<div class="container">
		<div class="about-section">
			{#each aboutItems as item}
				{#if item.side === 'left'}
					<Item {...item} />
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
					<Item {...item} />
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
