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
			<MenuItems {lang} {open} />
		</div>

		<div class="btns">
			<LangSelect {lang} />
			<div id="burger">
				<Hamburger bind:open --type="spin" --color="white" />
			</div>
		</div>
	</div>
</nav>

<style>
.hamburger-inner,
.hamburger-inner::before,
.hamburger-inner::after {
	background-color: #f3d36a !important;
}
a {
	color: #ddb77a;
	text-shadow: 1px 1px 1px orange;
}

#burger {
	display: flex;
	align-content: center;
}

#navbar {
	width: 100%;
	position: fixed;
	z-index: 100;
	height: auto;
	background-color: #000;
	margin-top: 0;
	display: flex;
	justify-content: space-around;
	align-items: center;
	flex-flow: row;
}

.display-fullscreen {
	display: none;
}

.bar {
	display: flex;
	justify-content: space-between;
	padding: 0 1rem 1rem 1rem;
	width: 100vw;
	position: absolute;
	top: 0;
	left: 0;
	background-image: linear-gradient(#222, #111, #000, #000, transparent);
}

.btns {
	display: flex;
	flex-direction: div;
}

#nav-logo img {
	width: 4rem;
	height: auto;
}

#navbar {
	justify-content: space-around;
}

@media (min-width: 300px) {
	.bar {
		padding: 0 15vw 1rem 20vw;
	}
}

@media (min-width: 1080px) {
	.bar {
		padding: 0 1vw 1rem 5vw;
	}

	#burger {
		display: none;
	}

	.display-fullscreen {
		display: block;
	}
}

@media (min-width: 1440px) {
	.bar {
		padding: 0 1rem 1rem 5vw;
	}
}

@media (min-width: 2560px) {
	.bar {
		padding: 0 15vw 1rem 15vw;
	}
}
</style>