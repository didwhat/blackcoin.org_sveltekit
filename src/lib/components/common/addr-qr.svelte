<script>
  import QrCodeGen from "./qr-code-gen.svelte";


    export let address
    export let width
    export let qr
	if (typeof address === 'string') {
		let a = address
		address = ['BLK',a]
	}
</script>


{address[0]}: <span class="golden">{width < 1080 ? address[1].substring(0,8)+'...' : address[1]}</span>
    <img on:click={()=>{
        copyHTML(address[1])
    }} width="512" height="512" src='/images/svg/copy.svg' alt="Click to Copy"/>
{#if (qr !== address[1])}
    <img width="110" height="110" src='/images/svg/qr.svg' alt="Click for QR" on:click={()=>{
        qr = address[1]
    }}/>
{:else}
    <QrCodeGen value={qr} size={width > 1080 ? width*.1 : width*.5} />
{/if}

<style>
	img {
		width: 2rem;
		margin: .3rem;
		height: auto;
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