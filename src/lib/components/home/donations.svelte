<script>
	import i18n from '$lib/i18n';
	import donationsI18n from './donations.i18n';
	export let lang;
</script>

<div class="testimonials-parallax">
	<div class="bg-overlay">
		<div class="container">
			<center>
				<h3 id="support">
					<span style="color: #ffffff;">{i18n(donationsI18n, 'support_blackcoin', lang)}</span>
				</h3>
			</center>
			<center>
				<h4 class="golden">
					<a id="donation-link" alt="Link to Donations Page" href="donations/"
						>{i18n(donationsI18n, 'donations', lang)}</a
					>
				</h4>
			</center>
		</div>
	</div>
</div>
