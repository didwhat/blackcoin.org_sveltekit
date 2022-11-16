<script>
	import social from "./social";
	import socialI18n from "./social.i18n";
	export let lang;
</script>

<div class="container">
	<center>
		<h3>
			<a name="community" alt="Join the Blackcoin Community!">
				<span style="color: #FFFFFF;">{socialI18n.join_community[lang] || socialI18n.join_community['en']}</span
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
