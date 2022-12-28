<script>
	import { Hamburger } from 'svelte-hamburgers';
	import i18n from '$lib/i18n';
	import navI18n from './nav.i18n';
	import LangSelect from './lang-select.svelte';
	import MenuItems from './menu-items.svelte';

	export let lang;

	$: open = false;
</script>

<nav id="navbar">
	<div class="bar">
		<a id="nav-logo" href="/{i18n(navI18n, 'locale', lang)}/">
			<picture>
				<source srcset="/images/blkb.webp" type="image/webp" />
				<source srcset="/images/blkb.png" type="image/png" />
				<img height="526" width="402" src="/images/blkb.png" alt="Blackcoin - Logo" />
			</picture>
		</a>

		{#if open}
			<MenuItems {lang} bind:open />
		{/if}
		<div class="display-fullscreen">
			<MenuItems {lang} bind:open />
		</div>

		<div class="btns">
			<LangSelect {lang} />
			<div id="burger">
				<Hamburger bind:open --type="spin" --color="white" />
			</div>
		</div>
	</div>
</nav>
