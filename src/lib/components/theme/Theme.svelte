<script lang="ts">
	import { themeColorCss, themeTypographyCss, themeShapeCss, themeShadowCss } from '$lib/theme.ts';
</script>

<svelte:head>
	{@html `<style>${$themeColorCss}</style>`}
	{@html `<style>${$themeTypographyCss}</style>`}
	{@html `<style>${themeShapeCss}</style>`}
	{@html `<style>${themeShadowCss}</style>`}
</svelte:head>
