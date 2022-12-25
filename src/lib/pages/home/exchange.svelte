<script>
	import exchangeI18n from './exchange.i18n';
	import exchangeList from './exchange-list';
	import i18n from '$lib/i18n';
	export let lang;
</script>

<div class="container">
	<center>
		<h3 id="buy">
			<span style="color: #FFFFFF;">{i18n(exchangeI18n, 'where_to_buy', lang)}</span>
		</h3>
	</center>
	<ul>
		{#each exchangeList as e}
			<li>
				<a href={e.url} target="_blank noreferer" rel="noopener">
					<picture>
						<source srcset={e.image.split('.')[0] + '.webp'} type="image/webp" />
						<source srcset={e.image} type="image/png" />
						<img src={e.image} alt={e.name} />
					</picture>
				</a>
			</li>
		{/each}
	</ul>
	<center>
		<h4>
			<span>
				<span style="color: #CCC;"
					><i class="fa fa-info-circle" /> {i18n(exchangeI18n, 'check', lang)}
				</span>
				<a
					rel="noopener"
					target="_blank noreferer"
					href="https://www.coingecko.com/en/coins/blackcoin"
					alt=""
				>
					{i18n(exchangeI18n, 'markets_volume', lang)}
				</a>
			</span>
		</h4>
	</center>
</div>

<style>
	img {
		width: 200px;
	}
	ul {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		padding: 3rem 0;
	}
	li {
		padding: 1rem;
	}
	@media (min-width: 700px) {
		li {
			padding: 3rem;
		}
	}
</style>
