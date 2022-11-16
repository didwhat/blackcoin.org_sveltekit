<script>
	import footerI18n from './footer.i18n';
  	import i18ncommon from '$lib/i18n-common';
	import FooterSocial from './footer-social.svelte';
	export let lang;
</script>

<footer>
	<FooterSocial {lang} />
	<div class="copyright">
		<small
			>&copy; 2014
			<span id="copyright" />
			{i18ncommon.blackcoin[lang] || i18ncommon.blackcoin['en']}Org - {footerI18n.all_rights_reserved[lang] || footerI18n.all_rights_reserved['en']}
		</small>
		<small>
			<a href="#footer">{footerI18n.to_the_top[lang] || footerI18n.to_the_top['en']} ^ </a>
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
