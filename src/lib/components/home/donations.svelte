<script>
	import donationsI18n from "./donations.i18n";
	export let lang;
</script>

<div class="testimonials-parallax">
	<div class="bg-overlay">
		<div class="container">
			<center>
				<h3 id="support">
					<span style="color: #ffffff;"
						>{donationsI18n.support_blackcoin[lang] || donationsI18n.support_blackcoin['en']}</span
					>
				</h3>
			</center>
			<center>
				<h4 class="golden">
					<a id="donation-link" alt="Link to Donations Page" href="donations/"
						>{donationsI18n.donations[lang] || donationsI18n.donations['en']}</a
					>
				</h4>
			</center>
		</div>
	</div>
</div>
