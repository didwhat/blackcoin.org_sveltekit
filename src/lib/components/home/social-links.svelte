<script>
	import home from '$lib/data/home';
	import socialLinks from '$lib/data/social-links';
</script>

<!-- Social Links -->
<div class="testimonials-parallax">
	<div class="bg-overlay">
		<div class="container">
			<div class="footer-social-links">
				<div class="row">
					<ul>
						{#each socialLinks as l}
							<li><a href={l.url}>{l.text}</a></li>
						{/each}
					</ul>
				</div>
			</div>
			<!-- / .container -->
		</div>
		<!-- / .dark-bg -->
	</div>
</div>
