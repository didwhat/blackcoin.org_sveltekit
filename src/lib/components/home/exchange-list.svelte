<script>
	import home from '../../data/home';
	export let lang;
	let exchanges = [
		{
			url: 'https://bittrex.com/Market/Index?MarketName=BTC-BLK',
			image: '/images/e1.png',
			alt: 'Link to Bittrex Exchange'
		},
		{
			url: 'https://www.aex.com/page/trade.html#/?symbol=blk_btc',
			image: '/images/aex.png',
			alt: 'Link to AEX Exchange'
		},
		{
			url: 'https://vinex.network/trading/advanced/BTC_BLK',
			image: '/images/vinex.png',
			alt: 'Link to Vinex'
		},
		{
			url: 'https://holytransaction.com/',
			image: '/images/e3.png',
			alt: 'Link to HolyTransaction Exchange'
		},
		{
			url: 'https://shapeshift.io/',
			image: '/images/shapeshift.png',
			alt: 'Link to ShapeShift Exchange'
		}
	];
</script>

<div class="container">
	<center>
		<h3 id="buy">
			<span style="color: #FFFFFF;">{home.where_to_buy[lang] || home.where_to_buy['en']}</span>
		</h3>
	</center>
	<ul>
		{#each exchanges as e}
			<li>
				<a href={e.url} target="_blank noreferer" rel="noopener">
					<img src={e.image} alt={e.alt} />
				</a>
			</li>
		{/each}
	</ul>
	<center>
		<h4>
			<span>
				<span style="color: #CCC;"
					><i class="fa fa-info-circle" /> {home.check[lang] || home.check['en']}
				</span>
				<a
					rel="noopener"
					target="_blank noreferer"
					href="https://www.coingecko.com/en/coins/blackcoin"
					alt=""
				>
					{home.markets_volume[lang] || home.markets_volume['en']}
				</a>
			</span>
		</h4>
	</center>
</div>

<style>
	ul {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		padding: 3rem 0;
	}
	li {
		padding: 3rem;
	}
</style>
