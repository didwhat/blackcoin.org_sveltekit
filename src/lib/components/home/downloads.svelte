<script>
	import home from '../../data/home';
	export let lang;
</script>

<!-- ========== Downloads ========== -->

<div class="gray-bg">
	<header class="sec-heading">
		<h2 class="golden" id="downloads">{home.downloads[lang] || home.downloads['en']}</h2>
		<span class="subheading">{home.official_files[lang] || home.official_files['en']}</span>
	</header>
	<section id="services" class="container section ft-boxed-hover">
		<ul class="col-row">
			<!-- Item 1 -->
			<li>
				<div class="hover-label">
					<h3>{home.more_wallet[lang] || home.more_wallet['en']}</h3>
				</div>
				<div class="hover-content">
					<a alt="Blackcoin More Website" href="https://blackcoinmore.org"
						><img src="/images/logo-more-bw-sm.png" alt="Blackcoin More" /></a
					>
					<p>
						<span style="color: #aaa;"
							>{home.blackcoin_more[lang] || home.blackcoin_more['en']} v2.13.2.8</span
						>
					</p>
					<p class="pd-15px">{home.community_supported[lang] || home.community_supported['en']}</p>
				</div>
				<!-- / .hover-content -->
			</li>
			<!-- Item 2 -->
			<li>
				<div class="hover-label">
					<h3>{home.mobile_wallets[lang] || home.mobile_wallets['en']}</h3>
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
					<h3>{home.blackhalo[lang] || home.blackhalo['en']}</h3>
				</div>
				<div class="hover-content">
					<a href="https://blackhalo.info/#section-call-to-actiontwo"
						><img src="/images/blackhalo2.png" alt="BlackHalo Logo" /></a
					>
					<p><span style="color: #aaa;">{home.blackhalo[lang] || home.blackhalo['en']}</span></p>
				</div>
				<!-- / .hover-content -->
			</li>
			<!-- Item 4 -->
			<li>
				<div class="hover-label">
					<h3>{home.legacy_wallet[lang] || home.legacy_wallet['en']}</h3>
				</div>
				<div class="hover-content">
					<p>
						<span style="color: #aaa;"
							>{home.legacy_wallet[lang] || home.legacy_wallet['en']} v1.2.x
						</span>
					</p>
					<a href="https://gitlab.com/blackcoin/blackcoin/-/blob/master/README.md"
						><span>{home.legacy_gitlab[lang] || home.legacy_gitlab['en']}</span></a
					>
				</div>
				<!-- / .hover-content -->
			</li>
		</ul>
	</section>
	<!-- / .cotnainer -->
</div>
<!-- / .gray-bg -->
