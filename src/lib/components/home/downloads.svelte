<script>
	import i18n from '$lib/i18n';
	import downloadsI18n from './downloads.i18n';
	export let lang;
	const downloadGroups = [
		{
		title: i18n(downloadsI18n, 'more_wallet', lang),
		subtitle: i18n(downloadsI18n, 'community_supported', lang),
		links: [
			{
				url: "https://blackcoinmore.org",
				img: "/images/logo-more-bw-sm.png",
				alt: i18n(downloadsI18n, 'blackcoin_more', lang),
			}
		],
	},
	{
		title: i18n(downloadsI18n, 'mobile_wallets', lang),
		links: [
			{
				url: "https://coinomi.com/",
				img: "/images/coinomi.png",
				alt: "Coinomi Multicoin Wallet",
			},
			{
				url: "https://abra.com/",
				img: "/images/svg/abra-logo-white.svg",
				alt: "Abra Multicoin Wallet"
			}
		],
	},
	{
		title: i18n(downloadsI18n, 'blackhalo', lang),
		links: [
			{
				url: "https://blackhalo.info/#section-call-to-actiontwo",
				img: "/images/blackhalo2.png",
				alt: "BlackHalo Logo"
			},
		],
	},
	{
		title: i18n(downloadsI18n, 'legacy_wallet', lang),
		links: [
			{
				url: "https://gitlab.com/blackcoin/blackcoin/-/blob/master/README.md",
				alt: i18n(downloadsI18n, 'gitlab_source', lang),
			},
		],
	},
]
</script>
<div class="gray-bg">
	<section id="services" class="container section ft-boxed-hover">
		<header>
			<h2 class="golden" id="downloads">{i18n(downloadsI18n, 'downloads', lang)}</h2>
			<span class="subheading">{i18n(downloadsI18n, 'official_files', lang)}</span>
		</header>
		<ul class="col-row">
			{#each downloadGroups as dl }			
				<li class="item">
					<div class="label">
						<h3>{dl.title}</h3>
					</div>
					{#each dl.links as link }
						<a href={link.url}>
							<div class="content">
									<img src={link.img} alt={link.alt} />
									<p>
									<span style="color: #aaa;">{link.alt}</span>
									</p>
								</div>
							{#if (!!dl.subtitle)}
							<p class="pd-15px">{dl.subtitle}</p>
							{/if}
						</a>
					{/each}
				</li>
				<br />
			{/each}
		</ul>
	</section>
</div>

<style>
	.col-row {
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;
		text-align: center;
		margin: 1rem auto;
	}
	.item {
		margin: 1rem auto;
		width: 100%;
		padding: 1rem;
		background-color: rgba(0, 0, 0, .5);
	}
	a {
		justify-self: center;
	}

	@media (min-width: 700px) {
		.col-row {
			flex-direction: row;
		}
		.item {
			width: calc(25% - 2rem);
			margin: 1rem;
		}
	}
</style>