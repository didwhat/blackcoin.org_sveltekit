<script>
	import Faq1 from '$lib/components/faq/faq1.svelte';
	import Faq2 from '$lib/components/faq/faq2.svelte';
	import Faq3 from '$lib/components/faq/faq3.svelte';
	export let data;
	$: lang = data.lang;
</script>

<div id="home" />
<Faq1 bind:lang />
<Faq2 bind:lang />
<Faq3 bind:lang />
