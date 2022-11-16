<script>
	import i18n from '$lib/i18n';
	import FAQ0 from './faq0';
	import FAQ1 from './faq1';
	export let lang;
	const data = [
		{
			question: i18n(FAQ1,'MORE_ABOUT_BLACKCOIN',lang),
			answer: i18n(FAQ1,'MORE_ABOUT_BLACKCOIN_ANSWER1',lang)
		},
		{
			question: i18n(FAQ1,'HOW_DOES_IT_WORK',lang),
			answer: i18n(FAQ1,'HOW_DOES_IT_WORK_ANSWER1',lang)
		},
		{
			question: i18n(FAQ1,'BLACKCOIN_VS_BITCOIN',lang),
			answer: i18n(FAQ1,'BLACKCOIN_VS_BITCOIN_ANSWER1',lang)
		},
		{
			question: i18n(FAQ1,'PROOF_OF_STAKE_VS_PROOF_OF_WORK',lang),
			answer: i18n(FAQ1,'PROOF_OF_STAKE_VS_PROOF_OF_WORK_ANSWER1',lang)
		},
		{
			question: i18n(FAQ1,'THE_ANNUAL_INFLATION_OF_BLACKCOIN',lang),
			answer: i18n(FAQ1,'THE_ANNUAL_INFLATION_OF_BLACKCOIN_ANSWER1',lang)
		},
		{
			question: i18n(FAQ1,'WHERE_CAN_I_CHECK_THE_NETWORK_WEIGHT',lang),
			answer: i18n(FAQ1,'WHERE_CAN_I_CHECK_THE_NETWORK_WEIGHT_ANSWER1',lang)
		},
		{
			question: i18n(FAQ1,'WHERE_CAN_I_BUY_BLACKCOIN',lang),
			answer: i18n(FAQ1,'WHERE_CAN_I_BUY_BLACKCOIN_ANSWER1',lang)
		},
		{
			question: i18n(FAQ1,'STAKING',lang),
			answer: i18n(FAQ1,'STAKING_ANSWER1',lang)
		},
		{
			question: i18n(FAQ1,'WHAT_KIND_OF_COMPUTING_POWER_IS_REQUIRED_FOR_STAKING',lang),
			answer: i18n(FAQ1,'WHAT_KIND_OF_COMPUTING_POWER_IS_REQUIRED_FOR_STAKING_ANSWER',lang)
		},
		{
			question: i18n(FAQ1,'HOW_BIG_ARE_BLOCK_REWARDS',lang),
			answer: i18n(FAQ1,'HOW_BIG_ARE_BLOCK_REWARDS_ANSWER',lang)
		},
		{
			question: i18n(FAQ1,'HOW_OFTEN_WILL_I_RECEIVE_A_BLOCK_REWARD',lang),
			answer: i18n(FAQ1,'HOW_OFTEN_WILL_I_RECEIVE_A_BLOCK_REWARD_ANSWER1',lang)
		},
		{
			question: i18n(FAQ1,'WHAT_ARE_THE_OFFICIAL_BLACKCOIN_WEBSITES',lang),
			answer: i18n(FAQ1,'WHAT_ARE_THE_OFFICIAL_BLACKCOIN_WEBSITES',lang)
		},
	]
</script>

<!-- FAQ Group 1 -->
<div class="faq-group">
	<div>
		<h3>General</h3>
		<p>General questions about Blackcoin.</p>
	</div>

	<!-- FAQ Accordion -->
	<div
		class="panel-group accordions-1 ws-s"
		id="faq-accordion-1"
		role="tablist"
		aria-multiselectable="true"
	>
	{#each data as d }
		<div class="panel panel-default">
			<div class="panel-heading" role="tab" id="faq-1-h-1">
				<h4 class="panel-title">
					<span>
						<p>{d.question}</p>
					</span>
				</h4>
				<div class="panel-body">
					{@html d.answer}
				</div>
			</div>
		</div>
	{/each}

	</div>
	<hr class="mb-sm-50" />
</div>
