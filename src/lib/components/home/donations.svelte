<script type='ts'>
	import i18n from '$lib/i18n';
	import donationsI18n from './donations.i18n';
	export let lang;
	export let width;
	import donationQuickAddresses from './donation-quick-addresses';
	import QrCodeGen from './qr-code-gen.svelte'
	$: qr = ''
	function copyHTML(content: string) {
		navigator.clipboard.writeText(content);
	}
</script>

<section>
	<div class="bg-overlay">
		<div class="container">
			<center>
				<h3 id="support">
					<span style="color: #ffffff;">{i18n(donationsI18n, 'support_blackcoin', lang)}</span>
				</h3>
				<h4 class="golden">
					{i18n(donationsI18n, 'donations', lang)}
				</h4>
			</center>
			<center>
				<p>
					Donate to a <a alt="Link to Donations Page" href="/donations">Person or Project</a>.
				</p>
				<p>
					or simply send to one of the addresses below.
				</p>
				<ul>
					{#each donationQuickAddresses as address}
						<li>
								{address[0]}: <span class="golden">{width < 1080 ? address[1].substring(0,8)+'...' : address[1]}</span>
								<img on:click={()=>{
									copyHTML(address[1])
								}} width="512" height="512" src='/images/svg/copy.svg' alt="Click to Copy"/>
							{#if (qr !== address[1])}
								<img width="110" height="110" src='/images/svg/qr.svg' alt="Click for QR" on:click={()=>{
									qr = address[1]
								}}/>
							{:else}
								<QrCodeGen value={qr} size={width*.9} />
							{/if}
						</li>
					{/each}
				</ul>
			</center>
		</div>
	</div>
</section>
<style>
	p  {
		font-size: 1.5rem;
	}
	h3 {
		font-size: 3vw;
	}
	li {
		font-size: 1.7rem;
		padding: .5rem 0;
	}
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
	p  {
		font-size: 1.7rem;
	}
	li {
		font-size: 2rem;
	}
	img {
		width: 2.75rem;
		height: auto;
	}
	}
</style>