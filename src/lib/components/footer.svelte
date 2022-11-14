<script>
	import FooterSocial from './footer-social.svelte';
	export let lang;
	import home from '$lib/data/home';
</script>

<footer>
	<FooterSocial {lang} />
	<div class="copyright">
		<small
			>&copy; 2014
			<span id="copyright" />
			{home.blackcoin[lang] || home.blackcoin['en']}Org - {home.all_rights_reserved[lang] ||
				home.all_rights_reserved['en']}
		</small>
		<small>
			<a href="#page-top">{home.to_the_top[lang] || home.to_the_top['en']} ^ </a>
		</small>
	</div>
</footer>

<style>
	footer {
		display: flex;
		flex-direction: column;
		width: 80vw;
		margin: 0 auto;
	}
	a {
		float: right;
		color: goldenrod;
	}
</style>
