<script>
	import Projects from '$lib/pages/donations/projects.svelte';
	// export let data;
	// $: lang = data.lang;
	$: lang = 'en';

	export let width;
</script>

<svelte:window bind:innerWidth={width} />

<div id="home" />
<Projects bind:lang {width} />
