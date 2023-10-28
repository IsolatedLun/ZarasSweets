<script lang="ts">
	import { filterItems } from '../../../stores/funcs';
	import { shop } from '../../../stores/shop';
	import type { T_ItemFilters, T_ItemSoryByTypes, T_ItemTypes } from '../../../stores/types';
	import { cubeCss } from '../../../utils/cubeCss/cubeCss';
	import Input from '../../Interactibles/Input/Input.svelte';
	import RangeInput from '../../Interactibles/Input/RangeInput.svelte';
	import Select from '../../Interactibles/Select/Select.svelte';
	import Card from '../../Modules/Card/Card.svelte';
	import Flex from '../../Modules/FlexAndGrid/Flex.svelte';
	import Grid from '../../Modules/FlexAndGrid/Grid.svelte';
	import Item from '../../Modules/Item/Item.svelte';
	import { ICON_COOKIE } from '../../icons';
	import type { Some } from '../../types';
	import StoreFilterItem from './_/StoreFilterItem.svelte';

	function handlePriceRanges() {
		if (filters.minPrice > filters.maxPrice) {
			maxInputEl.value = String(filters.minPrice);
			filters.maxPrice = filters.minPrice;
		}
	}

	function handleSelect(type: T_ItemTypes) {
		filters.types = [...filters.types, type]
	}

	function handleDeselect(type: T_ItemTypes) {
		filters.types = filters.types.filter(_type => _type !== type);
	}

	let filters: T_ItemFilters = {
		title: '',
		minPrice: 0,
		maxPrice: $shop.maxPrice,
		types: []
	};
	let sortBy: Some<T_ItemSoryByTypes> = 'category';

	let minInputEl: HTMLInputElement;
	let maxInputEl: HTMLInputElement;

	$: filteredItems = filterItems($shop.store, filters, sortBy);
</script>

<Grid cls={cubeCss('store', '', '')} gap={3} collapseOnMobile={true}>
	<Flex tag='section' cls={cubeCss('store__filter', '', 'width-100')} useColumn={true}>
		<Card cls={cubeCss('', '', 'width-100')}>
			<p class="margin-block-end-2">Categories</p>
			<Flex tag="ul" cls={cubeCss('filter__items', '', 'width-100')} useColumn={true}>
				{#each Object.keys($shop.categories) as category}
					<StoreFilterItem
						on:select={(e) => handleSelect(e.detail)}
						on:deselect={(e) => handleDeselect(e.detail)}

						icon={ICON_COOKIE}
						type={category}
						count={$shop.categories[category]}
					/>
				{/each}
			</Flex>
		</Card>
		<Card cls={cubeCss('', '', 'width-100')}>
			<p class="margin-block-end-2">Filters</p>
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
		</Card>
	</Flex>
	<section class="[ store__items ] [ width-100 ]">
		<Flex align='center'>
			<Input 
				bind:value={filters.title}
				placeholder={`Search ${$shop.store.length} items`} 
				label="Search items" 
				list={$shop.titles}
			/>
			<Select variant='muted' attachments={['hologram']} on:select={(e) => sortBy = e.detail}>
				<option value="category">Category</option>
				<option value="low_to_high">Low to high</option>
				<option value="high_to_low">High to low</option>
			</Select>
		</Flex>

		<div class="[ store__items-grid ] [ grid margin-block-3 gap-3 ]">
			{#if filteredItems.length == 0}
					<p>No items found!</p>
				{:else}
					{#each filteredItems as item (item.id)}
						<Item {item} context='shop' />
					{/each}
			{/if}
		</div>
	</section>
</Grid>
