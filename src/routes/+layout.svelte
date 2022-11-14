<script>
	import Navbar from '$lib/components/nav-hamburger.svelte';
	import Footer from '$lib/components/footer.svelte';
	import '$lib/styles.css';
	export const prerender = true;
	let lang = 'en';
</script>

<Navbar bind:lang />
<slot />
<Footer {lang} />
