<script lang="ts">
	import { cubeCss } from '../../../../utils/cubeCss/cubeCss';
	import Button from '../../../Interactibles/Button/Button.svelte';
	import Flex from '../../../Modules/FlexAndGrid/Flex.svelte';
	import Icon from '../../../Modules/Icon/Icon.svelte';
	import { ICON_BUCKET } from '../../../icons';

	export let icon: string;
	export let type: string;
	export let count: number;

	let selected = false;
</script>

<li class="width-100">
	<Button
		cls={cubeCss('', '', 'fs-350 width-100')}
		variant="custom"
        {selected}
		on:click={() => (selected = !selected)}
	>
		<Flex align="center" gap={2}>
			<Flex align="end" gap={2}>
				<div class="[ category-state ] [ pos-relative ]">
					<Icon>{icon}</Icon>
					<input
						class="[ pos-absolute pointers-none ]"
						type="checkbox"
						tabindex="-1"
						checked={selected}
					/>
				</div>
				<p>{type}</p>
			</Flex>

			<p>{count}</p>
		</Flex>
	</Button>
</li>
