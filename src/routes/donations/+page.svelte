<script>
	import Projects from '$lib/components/donations/projects.svelte';
	// export let data;
	// $: lang = data.lang;
	$: lang = 'en';
</script>

<div id="home" />
<Projects bind:lang />
