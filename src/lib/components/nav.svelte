<script>
	import nav from '$lib/data/nav';
	import LangSelect from './lang-select.svelte';
	export let lang;

	const links = [
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
	$: burgerOpen = false;
</script>

<nav id="navbar" role="navigation">
	<a id="nav-logo" href="/{nav[lang].locale || nav['en'].locale}/">
		<img src="/images/blkb.png" alt="Blackcoin - Logo" />
	</a>
	<row>
		<a
			id="hamburger-toggle"
			href="#"
			on:click={() => (!!burgerOpen ? (burgerOpen = false) : (burgerOpen = true))}
		>
			<img src="/images/svg/hamburger.svg" alt="Hamburger Icon" />
		</a>
		<ul id="menu-main">
			<li>
				<a href="#" on:click={() => (!!burgerOpen ? (burgerOpen = false) : (burgerOpen = true))}>
					{nav[lang].explore || nav['en'].explore}
				</a>
			</li>
			<ul id="menu">
				<li>
					<a on:click={() => (!!burgerOpen ? (burgerOpen = false) : (burgerOpen = true))}>
						{nav[lang].about || nav['en'].about}
					</a>
				</li>
				<li>
					<a on:click={() => (!!burgerOpen ? (burgerOpen = false) : (burgerOpen = true))}>
						{nav[lang].community || nav['en'].community}
					</a>
				</li>
			</ul>

			<li>
				<a href="#" on:click={() => (!!burgerOpen ? (burgerOpen = false) : (burgerOpen = true))}>
					{nav[lang].links || nav['en'].links}
				</a>
				<ul id="menu-right">
					{#each links as l}
						<li>
							<a rel="noopener" target="_blank noreferer" href={l.url}>
								{l.title}
							</a>
						</li>
					{/each}
				</ul>
			</li>
			<li>
				<a on:click={() => (!!burgerOpen ? (burgerOpen = false) : (burgerOpen = true))}>
					{nav[lang].download || nav['en'].download}
				</a>
			</li>
			<li>
				<a href="#" on:click={() => (!!burgerOpen ? (burgerOpen = false) : (burgerOpen = true))}>
					{nav[lang].markets || nav['en'].markets}
				</a>
				<ul>
					<div id="nav-markets">
						<div>
							<a
								class="centered"
								href="https://www.coingecko.com/{nav[lang].locale ||
									nav['en'].locale}/coins/blackcoin"
								rel="noopener"
								target="_blanknoreferer"
							>
								{nav[lang].more_charts_on || nav['en'].more_charts_on} CoinGecko
							</a>
						</div>
					</div>
				</ul>
			</li>
			<!-- <li>
                <a href="#" on:click={()=>!!burgerOpen ? burgerOpen = false : burgerOpen = true}>
                Twitter
            </a>
                <ul id="menu-twitter">
                    {% include "home/twitter.svelte"
                </ul>
            </li> -->
			<li>
				<a on:click={() => (!!burgerOpen ? (burgerOpen = false) : (burgerOpen = true))}>
					{nav[lang].donations || nav['en'].donations}
				</a>
			</li>
			<li>
				<a on:click={() => (!!burgerOpen ? (burgerOpen = false) : (burgerOpen = true))}>
					<span>{nav[lang].faq || nav['en'].faq} </span></a
				>
			</li>
		</ul>
	</row>
	<LangSelect {lang} />
</nav>

<style>
	a {
		color: #ddb77a;
	}

	#hamburger-toggle {
		fill: #ddd;
	}

	#navbar {
		width: 100%;
		position: fixed;
		z-index: 100;
		height: auto;
		background-color: #111;
		margin-top: 0;
		display: flex;
		justify-content: space-around;
		align-items: center;
		flex-flow: row;
	}

	#nav-logo img {
		width: 5vw;
		height: auto;
	}

	#navbar ul.nav-main {
		display: none;
		width: 100%;
		background-color: rgb(17, 17, 17);
		flex-flow: wrap;
		position: absolute;
		left: 0;
		padding: 0.5rem;
		margin: 0;
		justify-content: start;
		box-sizing: border-box;
	}

	#menu-main a {
		margin: 1rem;
	}

	#navbar ul li ul {
		display: none;
		flex-flow: column;
		position: relative;
		padding: 1rem;
	}

	#navbar ul.nav-menu {
		display: block;
	}
	#navbar li {
		position: relative;
		list-style: none;
		font-weight: 100;
	}
	#menu {
		position: absolute;
		display: none;
		left: 0;
	}
	#menu a {
		margin: 1.5rem;
	}

	#navbar ul.nav-menu > li > ul > li ul {
		left: 0%;
		top: 0px;
	}

	#nav-markets {
		position: fixed !important;
		left: 0;
		background-color: rgb(17, 17, 17);
		padding: 5vw;
		width: 100%;
		align-content: center;
		display: flex;
		justify-content: space-around;
		height: auto;
		overflow-y: scroll;
		-ms-overflow-style: none; /* IE and Edge */
		scrollbar-width: none; /* Firefox */
	}

	#nav-markets::-webkit-scrollbar {
		display: none;
	}

	#menu-twitter {
		display: none;
		left: 0 !important;
		width: 100vw;
		position: fixed !important;
		justify-content: space-around;
		background-color: rgba(17, 17, 17, 0.9);
	}

	#nav-twitter {
		position: fixed;
		top: 15vh;
		background-color: rgba(17, 17, 17, 0.9);
		left: 0;
		width: 100vw;
		align-content: center;
		display: flex;
		justify-content: space-around;
		height: auto;
		overflow-y: scroll;
		-ms-overflow-style: none; /* IE and Edge */
		scrollbar-width: none; /* Firefox */
		font-size: 80%;
	}

	#nav-twitter::-webkit-scrollbar {
		display: none;
		flex-flow: row;
	}

	.ccc-widget {
		width: 33%;
	}

	#hamburger-toggle {
		display: none;
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
	#navbar ul.nav-main {
		justify-content: space-around;
		font-size: 1.2vw;
		margin: 1.15vw 0 0 0;
	}
	#menu-main {
		top: 0;
		right: 1rem;
		display: flex;
		font-size: 1.2vw;
	}
	#nav-twitter {
		height: 86vh;
		top: 14vh;
	}
	@media (max-width: 770px) {
	}
	@media (min-aspect-ratio: 17/10) {
	}
	@media (min-width: 1080px) {
	}
	@media (min-aspect-ratio: 17/10) and (min-width: 1080px) {
	}
	@media (min-width: 2560px) {
	}
	@media (max-aspect-ratio: 5/1) and (min-width: 2560px) {
	}
</style>
