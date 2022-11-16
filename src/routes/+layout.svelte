<script>
	import Navbar from '$lib/components/header/nav.svelte';
	import Footer from '$lib/components/footer/footer.svelte';
	import '$lib/styles.css';
	let lang = 'en';
</script>

<Navbar bind:lang />
<slot />
<Footer {lang} />
