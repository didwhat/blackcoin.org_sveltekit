<script>
	import AddrQr from '../../components/common/addr-qr.svelte';
	import ongoing from './ongoing';
	import community from './community';
	import outreach from './outreach';
	import development from './development';

	const projects = [...development, ...outreach, ...ongoing, ...community];
	export let width;
	$: qr = '';
</script>

<h1>Donations</h1>
<div class="grid">
	{#each projects as group}
	<center>
		<h2>{group.name}</h2>
	</center>
		<div class="group">
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
	h1 {
		text-align: center;
	}
	.grid {
		display: grid;
		align-items: start;
		justify-items: center;
	}
	.group {
		display: flex;
		flex-wrap: wrap;
		flex-direction: row;
		justify-content: center;
		align-content: center;
	}
	.items {
		display: grid;
		width: 45vw;
		align-items: center;
		justify-items: center;
		text-align: center;
		padding: 1rem;
		margin: 1rem;
		background-color: rgba(255, 255, 255, 0.1);
	}
	.content {
		display: grid;
		align-items: center;
		justify-items: center;
	}
	@media (min-width: 700px) {
		.grid {
			grid-template-columns: auto;
			align-items: start;
			justify-items: start;
			align-items: stretch;
			justify-items: stretch;
		}
	}
</style>
