<script>
	import exchangeI18n from './exchange.i18n';
	import exchangeList from './exchange-list';
	export let lang;
</script>

<div class="container">
	<center>
		<h3 id="buy">
			<span style="color: #FFFFFF;">{exchangeI18n.where_to_buy[lang] || exchangeI18n.where_to_buy['en']}</span>
		</h3>
	</center>
	<ul>
		{#each exchangeList as e}
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
					><i class="fa fa-info-circle" /> {exchangeI18n.check[lang] || exchangeI18n.check['en']}
				</span>
				<a
					rel="noopener"
					target="_blank noreferer"
					href="https://www.coingecko.com/en/coins/blackcoin"
					alt=""
				>
					{exchangeI18n.markets_volume[lang] || exchangeI18n.markets_volume['en']}
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
