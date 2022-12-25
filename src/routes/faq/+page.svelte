<script>
	import Faq from '$lib/pages/faq/faq.svelte';

	// export let data;
	// $: lang = data.lang;
	$: lang = 'en';
</script>

<div id="home" />
<Faq bind:lang />
