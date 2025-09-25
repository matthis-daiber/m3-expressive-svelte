<script lang="ts">
	import Theme from "$lib/components/theme/Theme.svelte";
</script>

<Theme></Theme>

<style>
	:global(body) {
		/* Just for testing darkmode */
		color-scheme: dark;
		width: 100vw;
		height: 100vh;
		margin: 0;
		padding: 0;
		display: flex;
		justify-content: center;
		align-items: center;

	}
</style>
