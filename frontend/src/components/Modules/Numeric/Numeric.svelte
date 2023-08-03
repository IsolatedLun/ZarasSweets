<script lang="ts">
	export let tag = 'span';
	export let value: number;
</script>

<svelte:element this={tag}>
	{Intl.NumberFormat('en', { notation: 'compact', minimumSignificantDigits: 2 }).format(value)}
</svelte:element>