<script>
	import { Hamburger } from 'svelte-hamburgers';

	let open = true;

	import nav from '$lib/data/nav';
	import LangSelect from './lang-select.svelte';
	export let lang;

	const linkArr = [
		{
			url: 'https://chainz.cryptoid.info/blk/',
			title: `CryptoID ${nav[lang].explorer || nav['en'].explorer}`
		},
		{
			url: `https://www.coingecko.com/${nav[lang].locale}/coins/blackcoin`,
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
			title: `Blacksight ${nav[lang].explorer || nav['en'].explorer}`
		},
		{
			url: 'https://bitinfocharts.com/blackcoin/',
			title: `Bitinfocharts ${nav[lang].explorer || nav['en'].explorer}`
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

<nav id="navbar" role="navigation">
	<div class="bar">
		<a id="nav-logo" href="/{nav[lang].locale || nav['en'].locale}/">
			<img src="/images/blkb.png" alt="Blackcoin - Logo" />
		</a>

		<div id="opened">
			{#if open}
				<div>
					<ul id="main-menu">
						<li>
							<a href="/#about">
								{nav[lang].about || nav['en'].about}
							</a>
						</li>
						<!-- <li>
                    <a on:click={()=>""}>
                        {nav[lang].community || nav['en'].community}
                    </a>
                </li> -->

						<li>
							<a href="/#downloads">
								{nav[lang].download || nav['en'].download}
							</a>
						</li>
						<li on:click={() => (!!markets ? (markets = false) : (markets = true))}>
							{nav[lang].markets || nav['en'].markets}
							<ul id="markets" style="display:{!!markets ? 'flex' : 'none'};">
								<a
									class="centered"
									href="https://www.coingecko.com/{nav[lang].locale ||
										nav['en'].locale}/coins/blackcoin"
									rel="noopener"
									target="_blanknoreferer"
								>
									{nav[lang].more_charts_on || nav['en'].more_charts_on} CoinGecko
								</a>
							</ul>
						</li>
						<!-- <li>
                    <a href="/#" on:click={()=>""}>
                    Twitter
                </a>
                    <ul id="menu-twitter">
                        {% include "home/twitter.svelte"
                    </ul>
                </li> -->
						<li>
							<a href="/donations">
								{nav[lang].donations || nav['en'].donations}
							</a>
						</li>
						<li on:click={() => (!!links ? (links = false) : (links = true))}>
							{nav[lang].links || nav['en'].links}

							<ul style="display:{!!links ? 'flex' : 'none'};">
								{#each linkArr as l}
									<li>
										<a rel="noopener" target="_blank noreferer" href={l.url}>
											{l.title}
										</a>
									</li>
								{/each}
							</ul>
						</li>
						<li id="faq">
							<a href="/faq">
								<span>
									{nav[lang].faq || nav['en'].faq}
								</span>
							</a>
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
	#main-menu {
		line-height: 2rem;
		margin: 0;
		display: inline-flex;
		justify-content: space-around;
		top: 0;
		right: 1rem;
		display: flex;
		font-size: 1.2vw;
	}
	#main-menu li {
		margin: 1rem;
		text-shadow: 1px 1px 1px orange;
	}
	.bar {
		display: flex;
		justify-content: space-between;
		padding: 0 1rem;
		width: 100vw;
	}
	.bar img {
		width: 5rem;
	}
	.btns {
		display: flex;
		flex-direction: div;
	}

	#nav-logo img {
		width: 5vw;
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
	@media (min-aspect-ratio: 17/10) {
		#burger {
			display: none;
		}
	}
</style>
