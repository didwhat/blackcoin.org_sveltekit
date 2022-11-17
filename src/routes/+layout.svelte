<script>
	import Navbar from '$lib/components/header/nav.svelte';
	import Footer from '$lib/components/footer/footer.svelte';
	import '$lib/styles.css';
	let lang = 'en';
	export let width
</script>

<svelte:window bind:innerWidth={width} />

<Navbar bind:lang bind:width />
<div>
	<slot />
</div>
<Footer {lang} />

<style>
	div {
		padding-top: 5rem;
	}
</style>
