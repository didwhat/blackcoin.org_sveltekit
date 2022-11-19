<script type='ts'>
	import i18n from '$lib/i18n';
	import donationsI18n from './donations.i18n';
	export let lang;
	export let width;
	import donationQuickAddresses from './donation-quick-addresses';
	import QrCodeGen from '../common/qr-code-gen.svelte'
  import DonationsAddrQr from '../common/addr-qr.svelte';
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
					{i18n(donationsI18n, 'donate_to', lang)}
					 <a alt="Link to Donations Page" href="/donations">{i18n(donationsI18n, 'person_project', lang)}</a>.
				</p>
				<p>
					{i18n(donationsI18n, 'simply_send', lang)}
				</p>
				<ul>
					{#each donationQuickAddresses as address}
						<li>
							<DonationsAddrQr {address} {width} {qr} />
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
	@media (min-width: 1440px) {
		p  {
			font-size: 1.7rem;
		}
		li {
			font-size: 2rem;
		}
	}
</style>