<script lang="ts">
	import { createEventDispatcher, onMount } from 'svelte';
	import type { TextInputAttachments, TextInputVariants } from './types';
	import Flex from '../../Modules/FlexAndGrid/Flex.svelte';
	import type { Some } from '../../types';
	import { cubeCss } from '../../../utils/cubeCss/cubeCss';

	onMount(() => {
		id = crypto.randomUUID();
		use(_this!);
	});

	export let cls = cubeCss('', '', '');
	export let use: (_this: HTMLElement) => void = () => null;
	export let containerCls = cubeCss('', '', '');
	export let variant: TextInputVariants = 'primary';
	export let attachments: TextInputAttachments[] = [];
	export let label: string;
	export let showLabel = false;

	export let id = '';

    export let min: number;
	export let value: number = 0;
    export let max: number;
    export let step = 1;

	const dispatch = createEventDispatcher();

	const _class = cls.extend(
		'input width-100',
		'',
		'outline-none'
	);
	const _containerCombinedClass = containerCls.extend(
		'input-container',
		'',
		'pos-relative width-100',
	);

	export let _this: Some<HTMLElement> = null;
</script>

<Flex
	cls={_containerCombinedClass}
	useColumn={true}
	use={(e) => e.setAttribute('data-variant', variant)}
>
	<label for={id} hidden={!showLabel}>
		{label}
	</label>
	<div class="[ pos-relative width-100 ]">
		<input
			bind:this={_this}
			bind:value

            on:change
            on:input

			{id}
            {min}
            {max}
            {step}
			class={_class.toString()}
            type='range'

			data-variant={variant}
			data-attachments={attachments.join(',')}
		/>
	</div>
</Flex>