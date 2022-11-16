<script>
	import i18n from '$lib/i18n';
  	import { onMount } from 'svelte';
	import FAQ0 from './faq0';
	import FAQ1 from './faq1';
	// import FAQ2 from './faq2'
	export let lang;

	const doThese = [FAQ1]
	const titles = []
	const Qs = Array.from({length: doThese.length},()=>[])
	const As = Array.from({length: doThese.length},()=>[])
	let itterator = 0
	for (let [i, x] of doThese.entries()) {
		const {TITLE, SUBTITLE, qa} = x;
		titles.push({TITLE,SUBTITLE})
		for (let [key,obj] of Object.entries(qa)) {
			itterator % 2 === 0
				? Qs[i].push({obj,key})
				: As[i].push({obj,key})
			itterator++
		}
	}
</script>

{#each titles as faq,i }
	<div class="faq-group">
		<div>
			<h3>{i18n(faq,'TITLE',lang)}</h3>
			<p>{i18n(faq,'SUBTITLE',lang)}</p>
		</div>

		<div
			class="panel-group accordions-1 ws-s"
			id="faq-accordion-1"
			role="tablist"
			aria-multiselectable="true"
		>
		{#each Qs[i] as d,j }
			<div class="panel panel-default">
				<div class="panel-heading" role="tab" id="faq-1-h-1">
					<h4 class="panel-title">
						<span>
							<p>{i18n(d.obj, d.key, lang)}</p>
						</span>
					</h4>
					<div class="panel-body">
						{@html i18n(As[i][j].obj, As[i][j].key, lang)}
					</div>
				</div>
			</div>
		{/each}

		</div>
		<hr class="mb-sm-50" />
	</div>
{/each}

<style>
	.faq-group {
		padding: 1rem;
	}
</style>