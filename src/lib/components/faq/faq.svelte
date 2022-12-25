<script>
	import i18n from '$lib/i18n';
	import { onMount } from 'svelte';
	import layout from './faq-layout.i18n';
	import generalI18n from './general.i18n';
	import walletI18n from './wallet.i18n';
	import otherI18n from './other.i18n';
	import Group from './group.svelte';
	export let lang;

	const doThese = [generalI18n, walletI18n, otherI18n];
	const titles = [];
	const Qs = Array.from({ length: doThese.length }, () => []);
	const As = Array.from({ length: doThese.length }, () => []);
	let itterator = 0;
	for (let [i, x] of doThese.entries()) {
		const { TITLE, SUBTITLE, qa } = x;
		titles.push({ TITLE, SUBTITLE });
		for (let [key, obj] of Object.entries(qa)) {
			itterator % 2 === 0 ? Qs[i].push({ obj, key }) : As[i].push({ obj, key });
			itterator++;
		}
	}
</script>

{#each titles as faq, i}
	<div class="container">
		<div>
			<h3>{i18n(faq, 'TITLE', lang)}</h3>
			<p>{i18n(faq, 'SUBTITLE', lang)}</p>
		</div>

		<div class="panel-group">
			{#each Qs[i] as d, j}
				<Group {lang} {As} {d} {i} {j} />
			{/each}
		</div>
		<hr />
	</div>
{/each}

<span class="faq-contact-links"
	><i class="fa fa-info-circle" /> If you have more questions
	<a href="https://gitter.im/BlackCoin_Hub" target="_blank norefer">contact us on Gitter. </a>
</span>

<style>
	.container {
		padding: 1rem;
		width: 95%;
		max-width: 1440px;
		margin: 0 auto;
	}
</style>
