<script>
	import { onMount } from 'svelte';

	export let value;
	export let size;

	let qrcode;

	onMount(() => {
		let script = document.createElement('script');
		script.src = '/js/qrcode.min.js';
		document.head.append(script);

		script.onload = function () {
			qrcode = new QRCode(value, {
				text: value,
				width: size,
				height: size,
				colorDark: '#000000',
				colorLight: '#ffffff',
				correctLevel: QRCode.CorrectLevel.L
			});
		};
	});
</script>

<div id={value} class="qrcode" />

<style>
	.qrcode {
		display: flex;
		justify-content: center;
	}
</style>
