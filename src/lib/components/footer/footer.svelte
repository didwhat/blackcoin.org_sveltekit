<script>
	import footerI18n from './footer.i18n';
	import FooterSocial from './footer-social.svelte';
	export let lang;
	const date = new Date()
</script>

<footer>
	<p>
		<a href="#home">{footerI18n.to_the_top[lang] || footerI18n.to_the_top['en']} ^ </a>
		<FooterSocial {lang} />
	</p>
	<div class="copyright">
		<small
			>&copy; 2014-{date.getFullYear()}
			<span id="copyright" />
			Blackcoin.org 
		</small>
		<small>
			- {footerI18n.all_rights_reserved[lang] || footerI18n.all_rights_reserved['en']}
		</small>
	</div>
</footer>

<style>
	footer {
		display: flex;
		flex-direction: column;
		width: 90%;
		margin: 0 auto;
	}
	a {
		float: right;
		color: goldenrod;
		padding: .2rem;
	}
	.copyright {
		width: 50%;
	}
	/* @media (min-aspect-ratio: 17/10) {}
	@media (min-width: 1080px) {}
	@media (min-aspect-ratio: 17/10) and (min-width: 1080px) {}
	@media (min-width: 2560px) {}
	@media (max-aspect-ratio: 5/1) and (min-width: 2560px) {} */
</style>
