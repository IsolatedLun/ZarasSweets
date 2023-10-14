<script lang="ts">
	import { cubeCss } from "../../../utils/cubeCss/cubeCss";

	export let cls = cubeCss('', '', '');

	export let tag = 'span';
	export let value: number;
	export let options: Intl.NumberFormatOptions = { 
		notation: 'compact', maximumSignificantDigits: 4 
	};
</script>

<svelte:element this={tag} class={cls.toString()}>
	{Intl.NumberFormat('en', options).format(value)}
</svelte:element>