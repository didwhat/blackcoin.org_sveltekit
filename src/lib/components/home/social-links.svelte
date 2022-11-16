<script>
	import socialLinks from './social';
</script>

<!-- Social Links -->
<div class="testimonials-parallax">
	<div class="bg-overlay">
		<div class="container">
			<div class="footer-social-links">
				<div class="row">
					<ul>
						{#each socialLinks as l}
							<li><a href={l.url}>{l.alt}</a></li>
						{/each}
					</ul>
				</div>
			</div>
			<!-- / .container -->
		</div>
		<!-- / .dark-bg -->
	</div>
</div>
