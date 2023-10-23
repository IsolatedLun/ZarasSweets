<script lang="ts">
	import { cubeCss } from "../../../utils/cubeCss/cubeCss";
	import type { CardVariants } from "./types";

    export let tag = 'div';
	export let cls = cubeCss('', '', '');
    export let variant: CardVariants = 'muted';
    export let padding = 2;

	const _class = cls.extend(
        'card',
        '',
        `padding-${padding}`
    )
</script>

<svelte:element 
    this={tag} 
    class={_class.toString()} 

    data-variant={variant}
>
	<slot />
</svelte:element>