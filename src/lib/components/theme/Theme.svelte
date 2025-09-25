<script lang="ts">
	import { themeColorCss, themeTypographyPropertiesCss, themeTypographyClassesCss } from '$lib/theme.ts';
</script>

<svelte:head>
	{@html `<style>${$themeColorCss}</style>`}
	{@html `<style>${themeTypographyPropertiesCss()}</style>`}
	{@html `<style>${themeTypographyClassesCss()}</style>`}
</svelte:head>
