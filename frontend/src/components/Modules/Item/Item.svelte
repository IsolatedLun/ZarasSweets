<script lang='ts'>
    import type { T_Item, T_ItemContext } from "../../../stores/types";
	import { cubeCss } from "../../../utils/cubeCss/cubeCss";
	import { capitalize, deCleanText } from "../../../utils/general";
	import { ICON_IMAGE } from "../../icons";
	import Flex from "../FlexAndGrid/Flex.svelte";
	import Icon from "../Icon/Icon.svelte";
	import Image from "../Image/Image.svelte";
	import ItemCartContext from "./context/ItemCartContext.svelte";
	import ItemShopContext from "./context/ItemShopContext.svelte";

    export let item: T_Item;
    export let context: T_ItemContext;
</script>

<div id={deCleanText(item.title)} class="item">
    <div>
        <Image cls={cubeCss("item__thumbnail", "", "")} src={item.images[0]} alt="" />
    </div>
    <Flex cls={cubeCss('item__content', '', 'padding-2')} useColumn={true} gap={2}>
        <p class="[ fs-400 text-ellipsis-2 ]">{item.title}</p>
        
        {#if context === 'shop'}
            <ItemShopContext {item} />
            {:else}
            <ItemCartContext {item} />
        {/if}

        <Flex cls={cubeCss('', '', 'width-100 margin-block-start-1')} align='center' justify='space-between'>
            <p class="[ fs-300 clr-text-muted ]">{capitalize(item.type)}</p>
            {#if item.images.length > 1}
                <p class="fs-350 clr-text-muted">
                    <Flex align='center'>
                        <Icon cls={cubeCss('', '', 'margin-block-auto')} ariaLabel='Images'>{ICON_IMAGE}</Icon>
                        <span>{item.images.length}</span>
                    </Flex>
                </p>
            {/if}
        </Flex>
    </Flex>
</div>