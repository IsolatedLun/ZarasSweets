<script lang="ts">
	import { createEventDispatcher, onMount } from 'svelte';
	import { cubeCss } from '../../../utils/cubeCss/cubeCss';
	import type { ButtonAttachments } from '../Button/types';

	onMount(() => {
		use(_this);
	});

	function handleSelect(e: Event) {
        const target = e.target as HTMLSelectElement;
		if(multiple) 
            dispatch('select', Array.from(target.selectedOptions).map(x => x.value));
        else
            dispatch('select', target.value)
	}

	export let cls = cubeCss('', '', '');
	export let use: (_this: HTMLElement) => void = () => null;
	export let variant = 'primary';
    export let multiple = false;

    export let attachments: ButtonAttachments[] = [];
    export let disabled = false;
	

	const dispatch = createEventDispatcher();
	const _class = cls.extend(
		'',
		'select button',
        ''
	);

	let _this: HTMLElement;
</script>

<select
    bind:this={_this}
    on:input={handleSelect}

    class={_class.toString()}
    {multiple}
    
    data-variant={variant}
    data-attachments={attachments.join(',')}
    data-disabled={disabled}
>
    <slot />
</select>