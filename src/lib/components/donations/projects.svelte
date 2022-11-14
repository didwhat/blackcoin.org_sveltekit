<script>
	import AboutItem from '../home/about-item.svelte';
	import projects from '../../data/projects';
</script>

{#each projects as group}
	<center>
		<h4>{group.name}</h4>
	</center>
	<div>
		<ul>
			{#each group.items as item}
				<li>
					<h5 class="donation-title">{item.title}</h5>
					<div class="under-content">
						<span class="ft-heading">More Info</span>
						<item>
							{item.address}
						</item>
						{#if item.links.length > 0}
							{#each item.links as link}
								<a href={link.url} class="link-btn">{link.link_content}</a>
							{/each}
						{/if}
					</div>
				</li>
			{/each}
		</ul>
	</div>
{/each}
