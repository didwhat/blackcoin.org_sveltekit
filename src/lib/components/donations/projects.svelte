<script>
	import AddrQr from '../common/addr-qr.svelte'
	import ongoing from './ongoing';
	import community from './community';
	import outreach from './outreach';
	import development from './development';

	const projects = [...development, ...outreach, ...ongoing, ...community];
	export let width
	$: width = width
	$: qr = ''
</script>

<div class="grid">
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
							<AddrQr address={item.address} {width} {qr} />
						</item>
					</div>
				</div>
			{/each}
		</div>
	{/each}
</div>

<style>
	li {
		font-size: x-large;
	}

	.grid {
		padding-top: 5rem;
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
		background-color: rgba(255, 255, 255, 0.1);
	}
	.content {
		display: grid;
		grid-template-rows: 1fr 1fr;
		align-items: center;
		justify-items: center;
	}
	@media (min-width: 700px) {
		.grid {
			grid-template-columns: 1fr 1fr;
		}
	}
</style>
