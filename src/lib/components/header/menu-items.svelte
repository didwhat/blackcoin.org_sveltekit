<script>
	export let lang;
	export let open;
	$: markets = false;
	$: links = false;
	const linkArr = [
		{
			url: 'https://chainz.cryptoid.info/blk/',
			title: `CryptoID ${i18n(navI18n, 'explorer', lang)}`
		},
		{
			url: `https://www.coingecko.com/${i18n(navI18n, 'locale', lang)}/coins/blackcoin`,
			title: 'Coingecko'
		},
		{
			url: 'https://coinmarketcap.com/currencies/blackcoin/#charts',
			title: 'CoinMarketCap'
		},
		{
			url: 'https://blackcoin.nl',
			title: 'BlackcoinNL'
		},
		{
			url: 'https://node.blackcoin.io/insight/',
			title: `Blacksight ${i18n(navI18n, 'explorer', lang)}`
		},
		{
			url: 'https://bitinfocharts.com/blackcoin/',
			title: `Bitinfocharts ${i18n(navI18n, 'explorer', lang)}`
		},
		{
			url: 'https://gihub.com/coinblack/',
			title: 'Github'
		},
		{
			url: 'https://gitlab.com/blackcoin/',
			title: 'Gitlab'
		}
	];
	import i18n from '$lib/i18n';
	import navI18n from './nav.i18n';
</script>

<ul id="main-menu">
	<li>
		<a
			on:click={() => (!!open ? (open = false) : (open = true))}
			href="/{i18n(navI18n, 'locale', lang)}/#about"
		>
			{i18n(navI18n, 'about', lang)}
		</a>
	</li>
	<li>
		<a
			on:click={() => (!!open ? (open = false) : (open = true))}
			href="/{i18n(navI18n, 'locale', lang)}/#downloads"
		>
			{i18n(navI18n, 'download', lang)}
		</a>
	</li>
	<li>
		<a
			on:click={() => (!!open ? (open = false) : (open = true))}
			href="/{i18n(navI18n, 'locale', lang)}/donations"
		>
			{i18n(navI18n, 'donations', lang)}
		</a>
	</li>
	<li id="faq">
		<a
			on:click={() => (!!open ? (open = false) : (open = true))}
			href="/{i18n(navI18n, 'locale', lang)}/faq"
		>
			<span>
				{i18n(navI18n, 'faq', lang)}
			</span>
		</a>
	</li>

	<!-- <li on:click={() => (!!markets ? (markets = false) : (markets = true))}>
        {i18n(navI18n, 'markets', lang)}
        <ul id="markets" style="display:{!!markets ? 'flex' : 'none'};">
            <button class="x">X</button>
            <a
                class="centered"
                href="https://www.coingecko.com/{i18n(navI18n, 'locale', lang)}/coins/blackcoin"
                rel="noopener"
                target="_blanknoreferer"
            >
                {i18n(navI18n, 'more_charts_on', lang)} CoinGecko
            </a>
        </ul>
    </li>
	 -->
	<li id="linksBtn" on:click={() => (!!links ? (links = false) : (links = true))}>
		{i18n(navI18n, 'links', lang)}

		<ul id="links" style="display:{!!links ? 'flex' : 'none'};">
			<button class="x">X</button>
			{#each linkArr as l}
				<li>
					<a rel="noopener" target="_blank noreferer" href={l.url}>
						{l.title}
					</a>
				</li>
			{/each}
		</ul>
	</li>
</ul>
