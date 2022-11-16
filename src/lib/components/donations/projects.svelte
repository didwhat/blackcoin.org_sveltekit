<script>
	import ongoing from './ongoing';
	import community from './community';
	import outreach from './outreach';
	import development from './development';

	const projects = [
		...development,
		...outreach,
		...ongoing,
		...community,
	]
</script>

<div class="container">
	{#each projects as group}
		<div class="group">
			<center>
				<h2>{group.name}</h2>
			</center>
			{#each group.items as item}
				<div class="items">
					<h3 class="title">{item.title}</h3>
					<div class="content">
						<ul>
							{#if item.links.length > 0}
								{#each item.links as link}
									<li>
										<a href={link.url} class="link-btn">{link.link_content}</a>
									</li>
								{/each}
							{/if}
						</ul>
						<item>
							{item.address}
						</item>
					</div>
				</div>
			{/each}
		</div>
	{/each}
</div>

<style>
	a {
		color: #337ab7;
		text-decoration: none;
	}
	a:focus,
	a:hover {
		color: #23527c;
		text-decoration: underline;
	}
	a:focus {
		outline: thin dotted;
		outline: 5px auto -webkit-focus-ring-color;
		outline-offset: -2px;
	}

	a {
		color: #862;
		text-decoration: none !important;
	}

	a:hover {
		color: #ccc !important;
	}

	a:focus {
		color: #ccc !important;
	}

	li {
		font-size: x-large;
	}

	.container {
		padding-top: 15rem;
		display: grid;
		align-items: start;
		justify-items: center;
	}
	.group {
		display: flex;
		flex-wrap: wrap;
		flex-direction: column;
		justify-content: center;
		align-content: center;
	}
	.items {
		display: grid;
		grid-template-rows: 1fr 1fr;
		align-items: center;
		justify-items: center;
		text-align: center;
		padding: 1rem;
		margin: 1rem;
		background-color: rgba(255,255,255, .1);
	}
	.content {
		display: grid;
		grid-template-rows: 1fr 1fr;
		align-items: center;
		justify-items: center;
	}
	@media (min-width: 700px) {
		.container {
			grid-template-columns: 1fr 1fr;
		}
	}
</style>