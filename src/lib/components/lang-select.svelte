<!-- {% set 'pageUrl' = page.url.split('/').slice(2).join('/') %} -->
<script>
	import locales from '$lib/data/locales';
	import SELECT_LANGUAGE from '$lib/data/lang-select';
	export let lang;
	$: menuOpen = false;
</script>

<ul id="lang-select">
	<button id="menuOpener" on:click={() => (!!menuOpen ? (menuOpen = false) : (menuOpen = true))}
		>{SELECT_LANGUAGE[lang] || SELECT_LANGUAGE['en']}</button
	>
	<ul id="menu-locale" style="display: {!!menuOpen ? 'flex' : 'none'};">
		{#each locales as locale}
			<a
				on:click={() => (menuOpen = false)}
				href="/{locale.code}"
				rel="/{locale.code} {lang}"
				hreflang={locale.code}><li>{locale.label}</li></a
			>

			<!-- <button on:click={()=>lang = locale.code}>{locale.code}</button> -->
		{/each}
	</ul>
</ul>

<style>
	* {
		color: gold;
	}
	#lang-select {
		margin: 0;
		padding: 0.5rem 1rem 0 1rem;
		display: flex;
		align-content: center;
	}
	#menuOpener {
		float: right;
		font-size: x-large;
		background-color: transparent;
		border: none;
		padding-bottom: 1rem;
	}
	#menu-locale {
		width: 100vw;
		position: absolute;
		right: 0;
		top: 6rem;
		flex-wrap: wrap;
		background-color: #111;
	}
	/* #menu-locale button, */
	#menu-locale a {
		background-color: #000;
		width: 33vw;
		padding: 2rem;
	}
	@media (min-width: 700px) {
		#menu-locale {
			top: 7.5rem;
		}
		#menu-locale a {
			padding: 3rem;
			width: 9vw;
			font-size: xxx-large;
		}
	}
</style>
