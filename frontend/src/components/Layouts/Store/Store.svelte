<script>
	import { cubeCss } from "../../../utils/cubeCss/cubeCss";


	import Input from "../../Interactibles/Input/Input.svelte";
	import Flex from "../../Modules/FlexAndGrid/Flex.svelte";
	import Grid from "../../Modules/FlexAndGrid/Grid.svelte";
	import Item from "../../Modules/Item/Item.svelte";
	import { ICON_CAKE, ICON_COOKIE } from "../../icons";
	import StoreFilterItem from "./_/StoreFilterItem.svelte";

</script>

<Grid cls={cubeCss('store', '', '')} gap={3} collapseOnMobile={true}>
    <section class="[ store__filter ] [ width-100 ]">
        <p class="margin-block-end-2">Categories</p>
        <Flex tag='ul' cls={cubeCss('filter__items', '', 'width-100')} useColumn={true}>
            <StoreFilterItem icon={ICON_COOKIE} type='Cookies' count={14} />
            <StoreFilterItem icon={ICON_CAKE} type='Cake' count={3} />
        </Flex>
        <p class="margin-block-2">Filters</p>
    </section>
    <section class="[ store__items ] [ width-100 ]">
        <Input 
            type='text' 
            placeholder='Search 57 items' 
            label='Search items' 
        />

        <div class="[ store__items-grid ] [ grid margin-block-3 gap-3 ]">
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
        </div>
    </section>
</Grid>