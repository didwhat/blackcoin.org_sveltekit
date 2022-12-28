<script>
	import i18n from '$lib/i18n';
	import downloadsI18n from './downloads.i18n';
	export let lang;
	import downloadGroups from './download-groups';
</script>

<div class="bg">
	<section id="services" class="container section ft-boxed-hover">
		<header>
			<h2 class="golden" id="downloads">{i18n(downloadsI18n, 'downloads', lang)}</h2>
			<span class="subheading">{i18n(downloadsI18n, 'official_files', lang)}</span>
		</header>
		<ul class="col-row">
			{#each downloadGroups as dl}
				<li class="item">
					<div class="label">
						<h3>{i18n(downloadsI18n, dl.title, lang)}</h3>
					</div>
					{#each dl.links as link}
						<a href={link.url}>
							<div class="content">
								{#if link.img}
									<picture>
										{#if link.img.split('.')[1] !== 'svg'}
											<source srcset={link.img.split('.')[0] + '.webp'} type="image/webp" />
										{/if}
										<source srcset={link.img} type="image/png" />
										<img height={link.height} width={link.width} src={link.img} alt={link.alt} />
									</picture>
								{/if}
								<p>
									<span style="color: #aaa;">{link.alt}</span>
								</p>
							</div>
							{#if !!dl.subtitle}
								<p class="pd-15px">{i18n(downloadsI18n, dl.subtitle, lang)}</p>
							{/if}
						</a>
					{/each}
				</li>
				<br />
			{/each}
		</ul>
	</section>
</div>

<style>
	.bg {
		background: url('/images/hero/tri.webp');
		background-size: cover;
		background-position: 50%;
		background-attachment: fixed;
	}
	.col-row {
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;
		text-align: center;
		margin: 1rem auto;
	}
	.item {
		margin: 1rem auto;
		width: 100%;
		padding: 1rem;
		background-color: rgba(0, 0, 0, 0.5);
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	a {
		justify-self: center;
	}

	@media (min-width: 700px) {
		.col-row {
			flex-direction: row;
		}
		.item {
			width: calc(25% - 2rem);
			margin: 1rem;
		}
	}
</style>
