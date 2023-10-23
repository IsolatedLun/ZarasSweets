<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { cubeCss } from '../../../../utils/cubeCss/cubeCss';
	import Button from '../../../Interactibles/Button/Button.svelte';
	import Flex from '../../../Modules/FlexAndGrid/Flex.svelte';
	import Icon from '../../../Modules/Icon/Icon.svelte';
	import { capitalize } from '../../../../utils/general';
	
	function handleSelect() {
		selected = !selected;

		if(selected)
			dispatch('select', type)
		else
			dispatch('deselect', type)
	}

	export let icon: string;
	export let type: string;
	export let count: number;

	let selected = false;

	const dispatch = createEventDispatcher();
</script>

<li class="width-100">
	<Button
		on:click={handleSelect}
		cls={cubeCss('', '', 'fs-350 width-100')}
		variant="custom"
        {selected}
	>
		<Flex align="center" gap={2}>
			<Flex align="end" gap={2}>
				<div class="[ category-state ] [ pos-relative ]">
					<Icon>{icon}</Icon>
					<input
						class="[ pos-absolute pointers-none ]"
						type="checkbox"
						tabindex="-1"
						aria-hidden="true"
						checked={selected}
					/>
				</div>
				<p>{capitalize(type)}</p>
			</Flex>

			<p>{count}</p>
		</Flex>
	</Button>
</li>
