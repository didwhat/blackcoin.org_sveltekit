<script type="typescript">
	import home from '$lib/data/home';
	import news from '$lib/data/news';

	let i = 0;
	$: bn = news[i % news.length];

	setInterval(() => {
		i++;
	}, 5000);

	export let lang;
</script>

<br />
<div class="news-container">
	<br />
	<div class="newsBox">
		<div class="title">
			<h2>{home.latest_news[lang] || home.latest_news['en']}</h2>
		</div>
		<ul class="innerBox">
			<li>
				<h3>
					<a href={bn.url}>
						<span>{bn.date}</span>
						<span class="content">{bn.news[lang] || bn.news['en']}</span>
					</a>
				</h3>
			</li>
		</ul>
	</div>
	<br />
</div>
<br />

<style>
	* {
		margin: 0;
		padding: 0;
	}
	h2 {
		font-size: 12px;
		padding-bottom: 5px;
	}
	h3 {
		font-size: 11px;
		font-weight: 300;
		padding: 5px 0 0 1rem;
	}
	.news-container {
		width: 100%;
		max-width: 960px;
		margin: 0 auto;
	}
	.newsBox {
		text-align: left;
		background: #151515;
		height: 40px;
		position: relative;
		border: solid 2px darkred;
		overflow: hidden;
	}
	.title {
		width: 20%;
		position: absolute;
		top: 0;
		background-color: red;
	}
	.title h2 {
		margin-left: 1rem;
	}
	.innerBox {
		width: 80%;
		position: absolute;
		right: 0;
		top: 0;
	}
	.content {
		color: #ddb77a;
	}

	@media (min-width: 1080px) {
		h2 {
			font-size: 25px;
		}
		h3 {
			font-size: 20px;
			margin: 0px 0 10px 0;
			font-weight: 500;
		}
		.newsBox {
			height: 4rem;
		}
		.title {
			height: 4rem;
		}
		.title > h2 {
			line-height: 4rem;
		}
	}
	@media (max-aspect-ratio: 5/1) and (min-width: 2560px) {
		h3 {
			font-size: 20px;
			margin: 0px 0 10px 0;
			font-weight: 500;
		}
	}
</style>
