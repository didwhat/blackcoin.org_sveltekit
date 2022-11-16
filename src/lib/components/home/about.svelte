<script>
	import aboutI18n from './about.i18n';
	import Item from './about-item.svelte';

	export let lang;
</script>

<section class="section">
	<header>
		<h2 class="golden" id="about">{aboutI18n.about_blackcoin[lang] || aboutI18n.about_blackcoin['en']}</h2>
	</header>
	<div class="container">
		<div class="about-section">
			<Item
				side="left"
				h3={aboutI18n.proof_of_stake_v3[lang] || aboutI18n.proof_of_stake_v3['en']}
				p={aboutI18n.users_who_stake[lang] || aboutI18n.users_who_stake['en']}
				a={aboutI18n.read_more[lang] || aboutI18n.read_more['en']}
				url="https://blackcoin.org/faq/"
				icon="🔥"
			/>
			<Item
				side="left"
				h3={aboutI18n.eco_friendly[lang] || aboutI18n.eco_friendly['en']}
				p={aboutI18n.no_mining[lang] || aboutI18n.no_mining['en']}
				icon="🌲"
				a={aboutI18n.read_more[lang] || aboutI18n.read_more['en']}
				url="https://blackcoin.org/faq/"
			/>
			<Item
				side="left"
				h3={aboutI18n.transparent_ledger[lang] || aboutI18n.transparent_ledger['en']}
				p={aboutI18n.entirely_transparent[lang] || aboutI18n.entirely_transparent['en']}
				icon="📄"
				a={aboutI18n.read_more[lang] || aboutI18n.read_more['en']}
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
				h3={aboutI18n.open_source[lang] || aboutI18n.open_source['en']}
				p={aboutI18n.can_be_audited[lang] || aboutI18n.can_be_audited['en']}
				a={aboutI18n.read_more[lang] || aboutI18n.read_more['en']}
				url="https://blackcoin.org/faq/"
			/>

			<Item
				side="right"
				icon="⚡"
				h3={aboutI18n.fast[lang] || aboutI18n.fast['en']}
				p={aboutI18n.to_anyone_in_seconds[lang] || aboutI18n.to_anyone_in_seconds['en']}
				a={aboutI18n.read_more[lang] || aboutI18n.read_more['en']}
				url="https://blackcoin.org/faq/"
			/>

			<Item
				side="right"
				icon="👁️"
				h3={aboutI18n.anonymous[lang] || aboutI18n.anonymous['en']}
				p={aboutI18n.no_identifying_information[lang] || aboutI18n.no_identifying_information['en']}
				a={aboutI18n.read_more[lang] || aboutI18n.read_more['en']}
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
