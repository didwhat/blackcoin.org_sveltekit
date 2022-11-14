<script>
	import Hero from '$lib/components/home/hero.svelte';
	import About from '$lib/components/home/about.svelte';
	import Exchange from '$lib/components/home/exchange-list.svelte';
	import Downloads from '$lib/components/home/downloads.svelte';
	import SocialMedia from '$lib/components/home/social-media.svelte';
	import Donations from '$lib/components/home/donations.svelte';
	import SocialLinks from '$lib/components/home/social-links.svelte';
	let lang = 'en';
</script>

<svelte:head>
	<title>BlackcoinOrg</title>
	<meta name="description" content="BlackcoinOrg" />
	<meta name="lang" content={lang} />
</svelte:head>

<Hero {lang} />
<About {lang} />
<Exchange {lang} />
<Downloads {lang} />
<SocialMedia {lang} />
<Donations {lang} />
<SocialLinks {lang} />
