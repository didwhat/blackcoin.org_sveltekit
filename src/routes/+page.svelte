<script>
	import Hero from '$lib/components/home/hero.svelte';
	import About from '$lib/components/home/about.svelte';
	import Exchange from '$lib/components/home/exchange.svelte';
	import Downloads from '$lib/components/home/downloads.svelte';
	import SocialMedia from '$lib/components/home/social.svelte';
	import Donations from '$lib/components/home/donations.svelte';
	let lang = 'en';
</script>

<svelte:head>
	<title>BlackcoinOrg</title>
	<meta name="description" content="BlackcoinOrg" />
	<meta name="lang" content={lang} />
</svelte:head>

<div id="home"></div>
<Hero {lang} />
<About {lang} />
<Exchange {lang} />
<Downloads {lang} />
<SocialMedia {lang} />
<Donations {lang} />
