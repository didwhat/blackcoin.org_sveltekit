<script>
	import Hero from '$lib/components/home/hero.svelte';
	import About from '$lib/components/home/about.svelte';
	import Exchange from '$lib/components/home/exchange.svelte';
	import Downloads from '$lib/components/home/downloads.svelte';
	import SocialMedia from '$lib/components/home/social.svelte';
	import Donations from '$lib/components/home/donations.svelte';
	export let data;
	$: lang = data.lang;
</script>

<svelte:head>
	<title>BlackcoinOrg</title>
	<meta name="description" content="BlackcoinOrg" />
	<meta name="lang" content={lang} />
</svelte:head>

<div id="home" />
<Hero bind:lang />
<About bind:lang />
<Exchange bind:lang />
<Downloads bind:lang />
<SocialMedia bind:lang />
<Donations bind:lang />
