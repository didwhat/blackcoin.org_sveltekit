<script>
	import FAQ3 from '$lib/data/faq3';
</script>

<!-- FAQ Group 3 -->
<div class="faq-group">
	<div>
		<h3>Other</h3>
		<p>Links and downloads.</p>
	</div>

	<!-- FAQ Accordion -->
	<div
		class="panel-group accordions-1 ws-s"
		id="faq-accordion-3"
		role="tablist"
		aria-multiselectable="true"
	>
		<!-- Item 1 -->
		<div class="panel panel-default">
			<div onclick="return toggleDisplay(this)" class="panel-heading" role="tab" id="faq-3-h-1">
				<h4 class="panel-title">
					<span>
						<p>{FAQ3.BLACKCOIN_FAUCETS}</p>
					</span>
				</h4>
				<div class="panel-body">
					<p>{FAQ3.BLACKCOIN_FAUCETS_ANSWER1}</p>
					<p>{FAQ3.BLACKCOIN_FAUCETS_ANSWER2}</p>
				</div>
			</div>
		</div>
		<!-- / .panel -->

		<!-- Item 2 -->
		<div class="panel panel-default">
			<div onclick="return toggleDisplay(this)" class="panel-heading" role="tab" id="faq-3-h-2">
				<h4 class="panel-title">
					<span>
						<p>{FAQ3.BOOTSTRAP}</p>
					</span>
				</h4>
				<div class="panel-body">
					<p>{FAQ3.BOOTSTRAP_ANSWER1}</p>
					<p>{FAQ3.BOOTSTRAP_ANSWER2}</p>
					<p>{FAQ3.BOOTSTRAP_ANSWER3}</p>
					<p>{FAQ3.BOOTSTRAP_ANSWER4}</p>
					<p>{FAQ3.BOOTSTRAP_ANSWER5}</p>
					<p>{FAQ3.BOOTSTRAP_ANSWER6}</p>
					<p>{FAQ3.BOOTSTRAP_ANSWER7}</p>
					<p>{FAQ3.BOOTSTRAP_ANSWER8}</p>
					<p>{FAQ3.BOOTSTRAP_ANSWER9}</p>
					<p>{FAQ3.BOOTSTRAP_ANSWER10}</p>
					<p>{FAQ3.BOOTSTRAP_ANSWER11}</p>
					<p>{FAQ3.BOOTSTRAP_ANSWER12}</p>
					<p>{FAQ3.BOOTSTRAP_ANSWER13}</p>
					<p>{FAQ3.BOOTSTRAP_ANSWER14}</p>
					<p>{FAQ3.BOOTSTRAP_ANSWER15}</p>
					<p>{FAQ3.BOOTSTRAP_ANSWER16}</p>
				</div>
			</div>
		</div>
		<!-- / .panel -->

		<!-- Item 3 -->
		<div class="panel panel-default">
			<div onclick="return toggleDisplay(this)" class="panel-heading" role="tab" id="faq-3-h-3">
				<h4 class="panel-title">
					<span>
						<p>{FAQ3.INTEGRATING_BLACKCOIN_PAYMENTS}</p>
					</span>
				</h4>
				<div class="panel-body">
					<p>{FAQ3.INTEGRATING_BLACKCOIN_PAYMENTS_ANSWER}</p>
				</div>
			</div>
		</div>
		<!-- / .panel -->
	</div>
	<!-- / .panel-group .accordion-1 -->

	<span class="faq-contact-links"
		><i class="fa fa-info-circle" /> If you have more questions
		<a href="https://gitter.im/BlackCoin_Hub" target="_blank">contact us on Gitter.</a></span
	>
</div>
<!-- / .faq-group -->
