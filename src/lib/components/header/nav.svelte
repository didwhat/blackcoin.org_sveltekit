<script>
	import { Hamburger } from 'svelte-hamburgers';
	import i18n from '$lib/i18n';
	import navI18n from './nav.i18n';
	import LangSelect from './lang-select.svelte';

	export let lang;
	let width = 0;

	let open = false;

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
	$: links = false;
	$: markets = false;
</script>

<svelte:window bind:innerWidth={width} />
<nav id="navbar">
	<div class="bar">
		<a id="nav-logo" href="/{i18n(navI18n, 'locale', lang)}/">
			<img src="/images/blkb.png" alt="Blackcoin - Logo" />
		</a>

		<div id="opened">
			{#if open || width > 600}
				<div>
					<ul id="main-menu">
						<li>
							<a
								on:click={() => (!!open ? (open = false) : (open = true))}
								href="/{i18n(navI18n, 'locale', lang)}/#about"
							>
								{i18n(navI18n, 'about', lang)}
							</a>
						</li>
						<!-- <li>
                    <a on:click={()=>""}>
                        {i18n(navI18n,'community',lang)}
                    </a>
                </li> -->

						<li>
							<a
								on:click={() => (!!open ? (open = false) : (open = true))}
								href="/{i18n(navI18n, 'locale', lang)}/#downloads"
							>
								{i18n(navI18n, 'download', lang)}
							</a>
						</li>
						<li on:click={() => (!!markets ? (markets = false) : (markets = true))}>
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
						<!-- <li>
                    <a  
						on:click={()=>!!open ? open = false : open = true}
						href="/#" on:click={()=>""}>
                    Twitter
                </a>
                    <ul id="menu-twitter">
                        {% include "home/twitter.svelte"
                    </ul>
                </li> -->
						<li>
							<a
								on:click={() => (!!open ? (open = false) : (open = true))}
								href="/{i18n(navI18n, 'locale', lang)}/donations"
							>
								{i18n(navI18n, 'donations', lang)}
							</a>
						</li>
						<li on:click={() => (!!links ? (links = false) : (links = true))}>
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
							</ul>
						</li>
					</ul>
				</div>
			{/if}
		</div>
		<div class="btns">
			<LangSelect {lang} />
			<div id="burger">
				<Hamburger bind:open --type="spin" --color="white" />
			</div>
		</div>
	</div>
</nav>

<style>
	a,
	li {
		color: #ddb77a;
	}

	#navbar {
		width: 100%;
		position: fixed;
		z-index: 100;
		height: auto;
		background-color: #000;
		margin-top: 0;
		display: flex;
		justify-content: space-around;
		align-items: center;
		flex-flow: row;
	}
	#opened {
		display: grid;
		align-content: center;
	}
	#main-menu li {
		margin: 1rem;
		text-shadow: 1px 1px 1px orange;
	}
	.bar {
		display: flex;
		justify-content: space-between;
		padding: 0 1rem 1rem 1rem;
		width: 100vw;
		position: absolute;
		top: 0;
		background-image: linear-gradient(#222, #111, #000, #000, transparent);
	}
	.bar img {
		width: 5rem;
	}
	.btns {
		display: flex;
		flex-direction: div;
	}

	#nav-logo img {
		width: 4rem;
		height: auto;
	}

	#navbar ul li ul {
		flex-flow: column;
		position: relative;
		padding: 1rem;
	}

	#navbar li {
		position: relative;
		list-style: none;
		font-weight: 100;
	}

	#navbar ul.nav-menu > li > ul > li ul {
		left: 0%;
		top: 0px;
	}

	#markets {
		position: fixed !important;
		left: 0;
		background-color: rgb(17, 17, 17);
		width: 100%;
		align-content: center;
		display: flex;
		justify-content: space-around;
		height: auto;
		overflow-y: scroll;
		-ms-overflow-style: none; /* IE and Edge */
		scrollbar-width: none; /* Firefox */
	}

	#navbar ul li ul {
		position: fixed;
		left: 0;
		background-color: #111;
		width: 100vw;
		text-align: center;
	}
	#navbar {
		justify-content: space-around;
	}

	.x {
		background-color: transparent;
		width: fit-content;
		color: white;
		position: absolute;
		right: 1rem;
		top: 0;
		border-color: #ddb77a;
		font-size: x-large;
		padding: 0 0.75rem;
	}

	@media (max-width: 700px) {
		#main-menu {
			position: absolute;
			top: 5rem;
			right: 0;
			width: 100vw;
			height: calc(100vh - 5rem);
			display: flex;
			flex-direction: column;
			font-size: xxx-large;
			background-color: black;
			line-height: 3rem;
			margin: 0;
			justify-content: space-around;
			display: flex;
		}
		#links {
			position: absolute;
			top: 5rem;
			height: calc(100vh - 5rem);
			justify-content: space-around;
		}
	}
	@media (min-width: 700px) {
		#main-menu {
			display: inline-flex;
			font-size: 1.2vw;
		}
	}
</style>
