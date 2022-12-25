<script>
	import Hero from '$lib/pages/home/hero.svelte';
	import About from '$lib/pages/home/about.svelte';
	import Exchange from '$lib/pages/home/exchange.svelte';
	import Downloads from '$lib/pages/home/downloads.svelte';
	import SocialMedia from '$lib/pages/home/social.svelte';
	import Donations from '$lib/pages/home/donations.svelte';

	export let data;
	$: lang = data.lang || 'en';

	export let width;
	export let height;
</script>

<svelte:window bind:innerWidth={width} bind:innerHeight={height} />

<svelte:head>
	<title>BlackcoinOrg</title>
	<meta name="description" content="BlackcoinOrg" />
	<meta name="lang" content={lang} />
</svelte:head>

<div id="home" />
<Hero bind:lang bind:width bind:height />
<About bind:lang />
<Exchange bind:lang />
<Downloads bind:lang />
<SocialMedia bind:lang />
<Donations bind:lang bind:width />
