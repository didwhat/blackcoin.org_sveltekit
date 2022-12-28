<script>
	import i18n from '$lib/i18n';
	import heroI18n from './hero.i18n';
	import BreakingNews from './news.svelte';
	import HeroAnimation from './hero-animation.svelte';

	export let lang;
	export let width;
</script>

{#if width > 700}
	<div id="large-header">
		<HeroAnimation />
	</div>
{/if}
<div class="hero">
	<div class="bg-overlay">
		<div class="content-wrapper">
			<div class="content">
				<picture>
					<source srcset="/images/hero/blackcoin-logo.webp" type="image/webp" />
					<source srcset="/images/hero/blackcoin-logo.png" type="image/png" />
					<img
						id="logo"
						height="128"
						width="111"
						src="/images/hero/blackcoin-logo.png"
						alt="Blackcoin Logo"
					/>
				</picture>
				<h1 class="title">
					{i18n(heroI18n, 'blackcoin', lang)}
				</h1>
				<!-- <a href="#community" class="join-community">
					<img
					id="cta"
					height="176"
					width="550"
					src="/images/hero/banner.svg"
					alt="Join the Blackcoin Community!"
					/>
				</a> -->
				<hr />
				<h2 class="subtitle">{i18n(heroI18n, 'since2014', lang)}</h2>
			</div>
			<br />
			<BreakingNews {lang} />
			<br />
		</div>
	</div>
</div>

<style>
	hr {
		margin: 1.5rem;
		color: transparent;
		border: none;
	}
	.hero {
		background: url('/images/hero/tri.webp');
		background-size: cover;
		background-position: 50%;
		background-attachment: fixed;
	}
	.bg-overlay {
		background: rgba(17, 17, 17, 0.5);
		overflow: hidden;
		height: 100vh;
	}
	.hero .content-wrapper .content {
		text-align: center;
	}
	.hero {
		color: #ececec;
	}
	#logo {
		padding-top: 25%;
		height: auto;
	}
	#large-header {
		position: absolute;
		margin: o auto;
	}
	.title {
		margin-bottom: 0;
		letter-spacing: 10px;
	}
	.subtitle {
		margin-top: 0;
		font-size: large;
		letter-spacing: 10px;
	}

	@media (min-width: 700px) {
		#logo {
			padding-top: 10%;
			width: 10%;
		}
	}
</style>
