<script>
	import copyHTML from './copyHTML';
	import QrCodeGen from './qr-code-gen.svelte';

	export let address;
	export let width;
	export let qr;
	if (typeof address === 'string') {
		let a = address;
		address = ['BLK', a];
	}
	$: copied = false;
</script>

<div class="rel">
	{address[0]}:
	<span class="golden">{width < 1080 ? address[1].substring(0, 8) + '...' : address[1]}</span>
	<p class="copied" style="display: {!!copied ? 'flex' : 'none'};">Copied!</p>
<br />
	<img
		on:click={() => {
			copied = !copied;
			setTimeout(() => (copied = !copied), 1000);
			copyHTML(address[1]);
		}}
		width="512"
		height="512"
		src="/images/common/copy.svg"
		alt="Click to Copy"
	/>
	{#if qr !== address[1]}
		<img
			width="110"
			height="110"
			src="/images/common/qr.svg"
			alt="Click for QR"
			on:click={() => {
				qr = address[1];
			}}
		/>
	{:else}
		<QrCodeGen value={qr} size={width > 1080 ? width * 0.1 : width * 0.5} />
	{/if}
</div>

<style>
	.golden {
		font-size: x-large;
	}
	.rel {
		width: fit-content;
		position: relative;
	}
	img {
		width: 2rem;
		margin: 0.3rem;
		height: auto;
	}
	.copied {
		position: absolute;
		right: 1rem;
		top: 1rem;
		background-color: rgba(0, 0, 0, 0.6);
		padding: 0.25rem;
		box-shadow: 1px 1px 1rem black;
		z-index: 100;
	}
	@media (min-width: 700px) {
		img {
			width: 2.5rem;
		}
	}
	@media (min-width: 1440px) {
		img {
			width: 2.75rem;
			height: auto;
		}
	}
</style>
