<script>
	import i18n from '$lib/i18n';
	import downloadsI18n from './downloads.i18n';
	export let lang;
</script>

<div class="gray-bg">
	<header class="sec-heading">
		<h2 class="golden" id="downloads">{i18n(downloadsI18n, 'downloads', lang)}</h2>
		<span class="subheading">{i18n(downloadsI18n, 'official_files', lang)}</span>
	</header>
	<section id="services" class="container section ft-boxed-hover">
		<ul class="col-row">
			<!-- Item 1 -->
			<li>
				<div class="hover-label">
					<h3>{i18n(downloadsI18n, 'more_wallet', lang)}</h3>
				</div>
				<div class="hover-content">
					<a alt="Blackcoin More Website" href="https://blackcoinmore.org"
						><img src="/images/logo-more-bw-sm.png" alt="Blackcoin More" /></a
					>
					<p>
						<span style="color: #aaa;">{i18n(downloadsI18n, 'blackcoin_more', lang)} v2.13.2.8</span
						>
					</p>
					<p class="pd-15px">{i18n(downloadsI18n, 'community_supported', lang)}</p>
				</div>
				<!-- / .hover-content -->
			</li>
			<!-- Item 2 -->
			<li>
				<div class="hover-label">
					<h3>{i18n(downloadsI18n, 'mobile_wallets', lang)}</h3>
				</div>
				<div class="hover-content">
					<a href="https://coinomi.com/"
						><span><img src="/images/coinomi.png" alt="Coinomi Multicoin Wallet" /> </span></a
					>
					<a href="https://abra.com/"
						><span
							><img src="/images/svg/abra-logo-white.svg" alt="Abra Multicoin Wallet" />
						</span></a
					>
				</div>
				<!-- / .hover-content -->
			</li>

			<!-- Item 3 -->
			<li>
				<div class="hover-label">
					<h3>{i18n(downloadsI18n, 'blackhalo', lang)}</h3>
				</div>
				<div class="hover-content">
					<a href="https://blackhalo.info/#section-call-to-actiontwo"
						><img src="/images/blackhalo2.png" alt="BlackHalo Logo" /></a
					>
					<p><span style="color: #aaa;">{i18n(downloadsI18n, 'blackhalo', lang)}</span></p>
				</div>
				<!-- / .hover-content -->
			</li>
			<!-- Item 4 -->
			<li>
				<div class="hover-label">
					<h3>{i18n(downloadsI18n, 'legacy_wallet', lang)}</h3>
				</div>
				<div class="hover-content">
					<p>
						<span style="color: #aaa;">{i18n(downloadsI18n, 'legacy_wallet', lang)} v1.2.x </span>
					</p>
					<a href="https://gitlab.com/blackcoin/blackcoin/-/blob/master/README.md"
						><span>{i18n(downloadsI18n, 'legacy_gitlab', lang)}</span></a
					>
				</div>
				<!-- / .hover-content -->
			</li>
		</ul>
	</section>
	<!-- / .cotnainer -->
</div>
<!-- / .gray-bg -->
