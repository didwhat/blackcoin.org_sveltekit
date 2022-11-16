<script>
	import downloadsI18n from "./downloads.i18n";
	export let lang;
</script>

<div class="gray-bg">
	<header class="sec-heading">
		<h2 class="golden" id="downloads">{downloadsI18n.downloads[lang] || downloadsI18n.downloads['en']}</h2>
		<span class="subheading">{downloadsI18n.official_files[lang] || downloadsI18n.official_files['en']}</span>
	</header>
	<section id="services" class="container section ft-boxed-hover">
		<ul class="col-row">
			<!-- Item 1 -->
			<li>
				<div class="hover-label">
					<h3>{downloadsI18n.more_wallet[lang] || downloadsI18n.more_wallet['en']}</h3>
				</div>
				<div class="hover-content">
					<a alt="Blackcoin More Website" href="https://blackcoinmore.org"
						><img src="/images/logo-more-bw-sm.png" alt="Blackcoin More" /></a
					>
					<p>
						<span style="color: #aaa;"
							>{downloadsI18n.blackcoin_more[lang] || downloadsI18n.blackcoin_more['en']} v2.13.2.8</span
						>
					</p>
					<p class="pd-15px">{downloadsI18n.community_supported[lang] || downloadsI18n.community_supported['en']}</p>
				</div>
				<!-- / .hover-content -->
			</li>
			<!-- Item 2 -->
			<li>
				<div class="hover-label">
					<h3>{downloadsI18n.mobile_wallets[lang] || downloadsI18n.mobile_wallets['en']}</h3>
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
					<h3>{downloadsI18n.blackhalo[lang] || downloadsI18n.blackhalo['en']}</h3>
				</div>
				<div class="hover-content">
					<a href="https://blackhalo.info/#section-call-to-actiontwo"
						><img src="/images/blackhalo2.png" alt="BlackHalo Logo" /></a
					>
					<p><span style="color: #aaa;">{downloadsI18n.blackhalo[lang] || downloadsI18n.blackhalo['en']}</span></p>
				</div>
				<!-- / .hover-content -->
			</li>
			<!-- Item 4 -->
			<li>
				<div class="hover-label">
					<h3>{downloadsI18n.legacy_wallet[lang] || downloadsI18n.legacy_wallet['en']}</h3>
				</div>
				<div class="hover-content">
					<p>
						<span style="color: #aaa;"
							>{downloadsI18n.legacy_wallet[lang] || downloadsI18n.legacy_wallet['en']} v1.2.x
						</span>
					</p>
					<a href="https://gitlab.com/blackcoin/blackcoin/-/blob/master/README.md"
						><span>{downloadsI18n.legacy_gitlab[lang] || downloadsI18n.legacy_gitlab['en']}</span></a
					>
				</div>
				<!-- / .hover-content -->
			</li>
		</ul>
	</section>
	<!-- / .cotnainer -->
</div>
<!-- / .gray-bg -->
