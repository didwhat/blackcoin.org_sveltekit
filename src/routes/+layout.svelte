<script>
	import Navbar from '$lib/components/header/nav.svelte';
	import Footer from '$lib/components/footer/footer.svelte';
	import '$lib/styles.css';

	export let data;
	$: lang = data.lang || 'en';
</script>

<Navbar bind:lang />
<div class="slot-container">
	<slot />
</div>
<Footer {lang} />

