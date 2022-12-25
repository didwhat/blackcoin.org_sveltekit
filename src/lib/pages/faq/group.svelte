<script>
	import i18n from '$lib/i18n';

	export let lang;
	export let As;
	export let i;
	export let d;
	export let j;
	let open = false;
</script>

<div class="panel">
	<div>
		<h4 class="title golden" on:click={() => (open = !open)}>
			<span>
				<p>{i18n(d.obj, d.key, lang)}</p>
			</span>
		</h4>
		{#if open}
			<div class="body">
				{@html i18n(As[i][j].obj, As[i][j].key, lang)}
			</div>
		{/if}
	</div>
</div>

<style>
	.panel {
		background-color: #111;
		box-shadow: 1px 1px 1rem #111;
		padding: 1rem;
	}
	.title {
		margin: 0;
		padding-bottom: 0;
	}
</style>
