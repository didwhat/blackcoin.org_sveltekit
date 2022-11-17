<script>
	import i18n from '$lib/i18n';
	import social from './social';
	import socialI18n from './social.i18n';
	export let lang;
</script>

<div class="container">
	<center>
		<h3>
			<a name="community" alt="Join the Blackcoin Community!">
				<span style="color: #FFFFFF;">{i18n(socialI18n, 'join_community', lang)}</span>
			</a>
		</h3>
	</center>
	<ul>
		{#each social as s}
			<li>
				<a href={s.url} target="_blank noreferer" rel="noopener">
					<img height="102" width="125" src={s.image} alt={s.alt} />
				</a>
			</li>
		{/each}
	</ul>
</div>

<style>
	.container {
		overflow: hidden;
	}
	ul {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
	}
	li {
		width: 30%;
		margin: 1%;
	}

	@media (min-width: 700px) {
		li {
			width: 5%;
			padding: 1rem;
		}		
	}
</style>