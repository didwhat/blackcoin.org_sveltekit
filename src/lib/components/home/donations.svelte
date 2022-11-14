<script>
	import home from '../../data/home';
	export let lang;
</script>

<div class="testimonials-parallax">
	<div class="bg-overlay">
		<div class="container">
			<center>
				<h3 id="support">
					<span style="color: #ffffff;"
						>{home.support_blackcoin[lang] || home.support_blackcoin['en']}</span
					>
				</h3>
			</center>
			<center>
				<h4 class="golden">
					<a id="donation-link" alt="Link to Donations Page" href="donations/"
						>{home.donations[lang] || home.donations['en']}</a
					>
				</h4>
			</center>
		</div>
	</div>
</div>
