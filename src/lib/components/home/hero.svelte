<script>
	import home from '../../data/home';
	import BreakingNews from './news.svelte';
	let height;
	let width;
	export let lang;
	let n = 200;
	let config = {
		hex: [''],
		xy: [{ x: 0, y: 0 }],
		transp: [0]
	};
	$: config = config;
</script>

<svelte:window bind:innerWidth={width} bind:innerHeight={height} />

<header id="page-hero">
	<div id="home" class="agency2-hero">
		<div class="bg-overlay">
			<div id="page-hero" class="hero-content-wrapper">
				<div class="hero-content">
					<img src="/images/hero/ag2-logo.png" alt="Blackcoin Logo" />
					<h1>{home.blackcoin[lang] || home.blackcoin['en']}</h1>
					<h2>{home.since2014[lang] || home.since2014['en']}</h2>
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
	.agency2-hero {
		background: url(/images/hero/tri.jpg);
		background-size: cover;
		background-position: 50%;
		background-attachment: fixed;
	}
	.agency2-hero .bg-overlay {
		background: rgba(17, 17, 17, 0.5);
	}
	.agency2-hero .hero-content-wrapper .hero-content {
		text-align: center;
	}
	.agency2-hero {
		color: #ececec;
	}

	.hero-content img {
		padding-top: 10%;
		width: 10%;
		height: auto;
	}

	.join-community img {
		width: 20%;
		padding: 1rem;
	}
</style>
