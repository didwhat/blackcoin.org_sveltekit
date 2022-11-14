<script>
	import home from '../../data/home';
	export let lang;
	const social = [
		{
			url: 'https://twitter.com/BlackcoinOrg',
			image: '/images/twitterORG.png',
			alt: 'BlackcoinOrg Twitter'
		},
		{
			url: 'https://twitter.com/BlackcoinNL',
			image: '/images/twitterNL.png',
			alt: 'BlackcoinNL Twitter'
		},
		{
			url: 'https://t.me/blackcoin',
			image: '/images/telegramORG.png',
			alt: 'Telegram'
		},
		{
			url: 'https://t.me/blackcoinNL',
			image: '/images/telegramNL.png',
			alt: 'BlackcoinNL Telegram'
		},
		{
			url: 'https://keybase.io/team/blackcoin',
			image: '/images/keybase.png',
			alt: 'Keybase'
		},
		{
			url: 'https://discord.gg/hjNUgWD',
			image: '/images/discord.png',
			alt: 'Discord'
		},
		{
			url: 'https://bitcointalk.org/index.php?topic=3017838.new#new',
			image: '/images/bitcointalk.png',
			alt: 'Bitcointalk'
		},
		{
			url: 'https://webchat.freenode.net/?channels=%23blackcoin',
			image: '/images/irc.png',
			alt: 'IRC'
		},
		{
			url: 'https://gitter.im/BlackCoin_Hub',
			image: '/images/gitter.png',
			alt: 'Gitter'
		},
		{
			url: 'https://facebook.com/BlackcoinOrg',
			image: '/images/facebook.png',
			alt: 'Facebook'
		}
	];
</script>

<div class="container">
	<center>
		<h3>
			<a name="community" alt="Join the Blackcoin Community!">
				<span style="color: #FFFFFF;">{home.join_community[lang] || home.join_community['en']}</span
				>
			</a>
		</h3>
	</center>
	<ul>
		{#each social as s}
			<li>
				<a href={s.url} target="_blank noreferer" rel="noopener">
					<img src={s.image} alt={s.alt} />
				</a>
			</li>
		{/each}
	</ul>
</div>

<style>
	ul {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
	}
</style>
