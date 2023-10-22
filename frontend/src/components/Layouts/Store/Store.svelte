<script lang="ts">
	import { shop } from '../../../stores/shop';
	import type { T_ItemFilters } from '../../../stores/types';
	import { cubeCss } from '../../../utils/cubeCss/cubeCss';
	import { capitalize } from '../../../utils/general';
	import Input from '../../Interactibles/Input/Input.svelte';
	import RangeInput from '../../Interactibles/Input/RangeInput.svelte';
	import Flex from '../../Modules/FlexAndGrid/Flex.svelte';
	import Grid from '../../Modules/FlexAndGrid/Grid.svelte';
	import Item from '../../Modules/Item/Item.svelte';
	import { ICON_CAKE, ICON_COOKIE } from '../../icons';
	import StoreFilterItem from './_/StoreFilterItem.svelte';

	function handlePriceRanges() {
		console.log('lol');
		if (filters.minPrice > filters.maxPrice) {
			maxInputEl.value = String(filters.minPrice);
			filters.maxPrice = filters.minPrice;
		}
	}

	let filters: T_ItemFilters = {
		minPrice: 0,
		maxPrice: $shop.maxPrice,
		types: []
	};

	let minInputEl: HTMLInputElement;
	let maxInputEl: HTMLInputElement;
</script>

<Grid cls={cubeCss('store', '', '')} gap={3} collapseOnMobile={true}>
	<section class="[ store__filter ] [ width-100 ]">
		<p class="margin-block-end-2">Categories</p>
		<Flex tag="ul" cls={cubeCss('filter__items', '', 'width-100')} useColumn={true}>
			{#each Object.keys($shop.categories) as category}
				<StoreFilterItem
					icon={ICON_COOKIE}
					type={capitalize(category)}
					count={$shop.categories[category]}
				/>
			{/each}
		</Flex>
		<p class="margin-block-2">Filters</p>
		<Flex>
			<RangeInput
				bind:value={filters.minPrice}
				bind:_this={minInputEl}
				on:input={handlePriceRanges}
				min={0}
				max={$shop.maxPrice}
				label="Min Price"
				cls={cubeCss('', '', 'width-100')}
				showLabel={true}
			/>
			<RangeInput
				bind:value={filters.maxPrice}
				bind:_this={maxInputEl}
				on:input={handlePriceRanges}
				min={0}
				max={$shop.maxPrice}
				label="Max Price"
				cls={cubeCss('', '', 'width-100')}
				showLabel={true}
			/>
		</Flex>
		<p class="[ text-align-center margin-block-start-1 ]">
			${filters.minPrice} - ${filters.maxPrice}
		</p>
	</section>
	<section class="[ store__items ] [ width-100 ]">
		<Input 
			type="text" 
			placeholder={`Search ${$shop.store.length} items`} 
			label="Search items" 
			list={$shop.titles}
		/>

		<div class="[ store__items-grid ] [ grid margin-block-3 gap-3 ]">
			{#each $shop.store as item}
				<Item {item} />
			{/each}
		</div>
	</section>
</Grid>
