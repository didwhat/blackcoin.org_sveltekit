<script>
	import home from '$lib/data/home';
	import Item from './about-item.svelte';

	export let lang;
</script>

<section class="section">
	<header>
		<h2 class="golden" id="about">{home.about_blackcoin[lang] || home.about_blackcoin['en']}</h2>
	</header>
	<div class="container">
		<div class="about-section">
			<Item
				side="left"
				h3={home.proof_of_stake_v3[lang] || home.proof_of_stake_v3['en']}
				p={home.users_who_stake[lang] || home.users_who_stake['en']}
				a={home.read_more[lang] || home.read_more['en']}
				url="https://blackcoin.org/faq/"
				icon="🔥"
			/>
			<Item
				side="left"
				h3={home.eco_friendly[lang] || home.eco_friendly['en']}
				p={home.no_mining[lang] || home.no_mining['en']}
				icon="🌲"
				a={home.read_more[lang] || home.read_more['en']}
				url="https://blackcoin.org/faq/"
			/>
			<Item
				side="left"
				h3={home.transparent_ledger[lang] || home.transparent_ledger['en']}
				p={home.entirely_transparent[lang] || home.entirely_transparent['en']}
				icon="📄"
				a={home.read_more[lang] || home.read_more['en']}
				url="https://blackcoin.org/faq/"
			/>
		</div>

		<div class="blkb about-section">
			<img src="/images/blkb.png" alt="Blackcoin B" />
		</div>

		<div class="about-section">
			<Item
				side="right"
				icon="🆓"
				h3={home.open_source[lang] || home.open_source['en']}
				p={home.can_be_audited[lang] || home.can_be_audited['en']}
				a={home.read_more[lang] || home.read_more['en']}
				url="https://blackcoin.org/faq/"
			/>

			<Item
				side="right"
				icon="⚡"
				h3={home.fast[lang] || home.fast['en']}
				p={home.to_anyone_in_seconds[lang] || home.to_anyone_in_seconds['en']}
				a={home.read_more[lang] || home.read_more['en']}
				url="https://blackcoin.org/faq/"
			/>

			<Item
				side="right"
				icon="👁️"
				h3={home.anonymous[lang] || home.anonymous['en']}
				p={home.no_identifying_information[lang] || home.no_identifying_information['en']}
				a={home.read_more[lang] || home.read_more['en']}
				url="https://blackcoin.org/faq/"
			/>
		</div>
	</div>
</section>

<style>
	.container {
		padding: 5vw;
		display: block;
		width: 80%;
	}
	.blkb {
		display: flex;
		align-self: center;
		justify-content: center;
	}
	.blkb img {
		height: 100%;
		width: 75%;
	}
	@media (min-width: 700px) {
		.container {
			display: flex;
			justify-content: center;
		}
		.about-section {
			width: 33%;
		}
	}
</style>
