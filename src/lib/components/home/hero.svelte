<script>
	import i18n from '$lib/i18n';
	import heroI18n from './hero.i18n';
	import BreakingNews from './news.svelte';
	let height;
	let width;
	export let lang;
	let config = {
		hex: [''],
		xy: [{ x: 0, y: 0 }],
		transp: [0]
	};
	$: config = config;
</script>

<svelte:window bind:innerWidth={width} bind:innerHeight={height} />

<header id="page-hero">
	<div id="home" class="hero">
		<div class="bg-overlay">
			<div id="page-hero" class="content-wrapper">
				<div class="content">
					<img src="/images/hero/ag2-logo.png" alt="Blackcoin Logo" />
					<h1>
						{i18n(heroI18n, 'blackcoin', lang)}
					</h1>
					<h2>{i18n(heroI18n, 'since2014', lang)}</h2>
					<a href="#community" class="join-community">
						<img src="/images/joincommunity.png" alt="Join the Blackcoin Community!" />
					</a>
				</div>
			</div>
			<br />
			<BreakingNews {lang} />
			<br />
		</div>
	</div>
	<hr />
</header>

<style>
	.hero {
		background: url(/images/hero/tri.jpg);
		background-size: cover;
		background-position: 50%;
		background-attachment: fixed;
	}
	.hero .bg-overlay {
		background: rgba(17, 17, 17, 0.5);
	}
	.hero .content-wrapper .content {
		text-align: center;
	}
	.hero {
		color: #ececec;
	}

	.content img {
		padding-top: 25%;
		width: 50%;
		height: auto;
	}

	.join-community img {
		width: 80%;
		padding: 1rem;
	}
	@media (min-width: 700px) {
		.join-community img {
			width: 20%;
			padding: 1rem;
		}
		.content img {
			padding-top: 10%;
			width: 10%;
		}
	}
</style>
