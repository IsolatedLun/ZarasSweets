<script lang="ts">
	import { cubeCss } from "../../../utils/cubeCss/cubeCss";

	export let tag = 'div';
	export let cls = cubeCss('', '', '');
    export let snapsInline = false;
    export let gap = 1;

    let _cls = cls.extend(
        '',
        'media-scroller',
        `gap-${gap}`
    )
</script>

<svelte:element this={tag} class={_cls.toString()} data-snap-inline={snapsInline}>
    <slot />
</svelte:element>
