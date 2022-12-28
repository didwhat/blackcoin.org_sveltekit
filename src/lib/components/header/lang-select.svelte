<!-- {% set 'pageUrl' = page.url.split('/').slice(2).join('/') %} -->
<script>
	import locales from './locales';
	import SELECT_LANGUAGE from './lang-select.i18n';
	import HiddenLinks from './hidden-links.svelte';
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
		<!-- placeholder for where the open chat button is -->
		<a href="/" class="space-on-mobile" />
	</ul>
</ul>

<!-- HIDDEN - FOR STATIC BUILD -->
<HiddenLinks {locales} />
