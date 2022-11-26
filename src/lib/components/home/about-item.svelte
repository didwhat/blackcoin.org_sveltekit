<script>
	export let h3;
	export let icon;
	export let a;
	export let p;
	export let url;
	export let side;
</script>

<div class="container" style="flex-direction:{side === 'left' ? 'row-reverse' : 'row'};">
	<h3>{h3}</h3>
	<div class="ft-icon">
		<i class="icon">{icon}</i>
	</div>
</div>
<p>
	{p}
	<br />
	<a href={url}>{a}</a>
</p>

<style>
	i {
		font-size: 3rem;
		padding: 0 1rem;
	}
	.container {
		display: inline-flex;
	}
	h3 {
		margin: 1rem 0;
		align-self: center;
	}
	@media (min-width: 700px) {
		i {
			font-size: 4rem;
		}
	}
	@media (min-width: 1080px) {
		i {
			font-size: 6rem;
			padding: 0 2rem;
		}
	}
</style>
