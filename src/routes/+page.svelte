<script lang="ts">
	import Theme from "$lib/components/theme/Theme.svelte";
</script>

<Theme></Theme>
<div class="typescale-display-large-em">HALLO EM</div>
<div class="typescale-display-large">HALLO</div>

<style>
	:global(body) {
		/* Just for testing darkmode */
		color-scheme: dark;
		background-color: var(--md-sys-color-background);
		color: var(--md-sys-color-error);
		width: 100vw;
		height: 100vh;
		margin: 0;
		padding: 0;
		display: flex;
		justify-content: center;
		align-items: center;

	}
</style>
