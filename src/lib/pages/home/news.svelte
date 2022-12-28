<script type="typescript">
	import newsI18n from './news.i18n';
	import news from './news';
	import i18n from '$lib/i18n';

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
	<div class="title">
		<h2>{i18n(newsI18n, 'latest_news', lang)}</h2>
	</div>
	<div class="newsBox">
		<ul class="innerBox">
			<li>
				<a href={bn.url}>
					<span class="date">{bn.date}</span>
					<span class="content">{i18n(bn, 'news', lang)}</span>
				</a>
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
	li {
		padding: .1rem;
	}
	a {
		display: flex;
		flex-direction: row;
		align-content: center;
	}
	h2 {
		font-size: 0.8rem;
		font-weight: 500;
		align-self: center;
		text-align: center;
		background: -webkit-linear-gradient(#fff, #fea, #fd6);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}
	.content {
		font-size: 12px;
		font-weight: 300;
		padding-left: 3px;
		color: #ddb77a;
		align-self: center;
	}
	.date {
		font-size: 11px;
		color: white;
		font-weight: 100;
		padding: 0 .5rem;
	}
	.news-container {
		width: 90%;
		max-width: 960px;
		margin: 0 auto;
	}
	.newsBox {
		text-align: left;
		background: #151515;
		height: 50px;
		border: solid 1px red;
		overflow: hidden;
		display: grid;
		align-content: center;
	}
	.title {
		width: 33%;
		top: 0;
		background-color: #a00;
		padding: .2rem;
	}
	.innerBox {
		right: 0;
		top: 0;
	}

	@media (min-width: 700px) {
		h2 {
			font-size: 1rem;
			line-height: 1rem;
		}
		span {
			letter-spacing: 0.15rem;
		}
		.content, .date {
			font-size: 15px;
		}
		.date {
			font-size: 13px;
		}
	}
	@media (min-width: 1080px) {
		.title {
			width: 22%;
		}
		h2 {
			font-size: 1.5rem;
			line-height: 1.5rem;
		}
		.content, .date {
			font-size: 20px;
		}
		.newsBox {
			height: 4rem;
		}
		.news-container {
			width: 60vw;
		}
		/* .title > h2 {
			line-height: 4rem;
		} */
	}
	@media (max-aspect-ratio: 5/1) and (min-width: 2560px) {
		.content, .date {
			font-size: 20px;
		}
	}
</style>
