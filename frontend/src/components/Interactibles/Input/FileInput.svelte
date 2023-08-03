<script lang="ts">
	import { createEventDispatcher, onMount } from 'svelte';
	import { cubeCss } from '../../../utils/cubeCss/cubeCss';
	import type { FileInputTypes } from './types';

	onMount(() => {
		id = crypto.randomUUID();
	});

	function handleInput() {
		if (inputEl.files) {
			fileName = inputEl.files[0].name;

			if (fileType === 'image') {
				dispatch('preview', URL.createObjectURL(inputEl.files[0]));
			}

			dispatch('input', inputEl);
			dispatch('file', inputEl.files[0]);
		}
	}

	export let id: string = '';
	export let cls = cubeCss('', '', '');
	export let fileType: FileInputTypes = 'any';
	export let variant = 'default';
	export let disabled = false;

	let inputEl: HTMLInputElement;
	let fileName = 'Empty file';

	const _class = cls.extend(
		'',
		'input-container drag-drop-input-container',
		'pos-relative width-100'
	);
	const dispatch = createEventDispatcher();
</script>

<div class={_class.toString()} data-variant={variant} data-disabled={disabled}>
	<label for={id}>
        <input
            bind:this={inputEl}
            {id}
            on:input={handleInput}
            type="file"
			data-file-type={fileType}
            class="[ pos-absolute inset-0 opacity-0 width-100 ]"
        />
	</label>
</div>