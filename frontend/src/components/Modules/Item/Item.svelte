<script lang='ts'>
	import { shop } from "../../../stores/shop";
import type { T_Item } from "../../../stores/types";
	import { cubeCss } from "../../../utils/cubeCss/cubeCss";
	import Button from "../../Interactibles/Button/Button.svelte";
	import { ICON_IMAGE } from "../../icons";
	import Flex from "../FlexAndGrid/Flex.svelte";
	import Icon from "../Icon/Icon.svelte";

    export let item: T_Item;
</script>

<div class="item">
    <div>
        <img class="item__thumbnail" src="https://imgs.search.brave.com/gKOgytN1kxD0C9Ne9cb5rV6YMfn990rHRbr-9cWGnkA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/ZGlubmVyYXR0aGV6/b28uY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDE3LzExL3N0/YWluZWQtZ2xhc3Mt/Y29va2llcy0xLTIt/NDAweDQwMC5qcGc" alt="" />
    </div>
    <Flex cls={cubeCss('item__content', '', 'padding-2')} useColumn={true} gap={2}>
        <p class="[ fs-400 text-ellipsis-2 ]">{item.title}</p>
        <Flex cls={cubeCss('', '', 'width-100')} align='center' justify='space-between'>
            <p class="fs-450">
                ${item.price.toFixed(2)} 
                <span class="[ fs-300 text-lower ]">/ {item.unit}</span>
            </p>

            <Button 
                cls={cubeCss('', '', '')} 
                attachments={['tiny-pad', 'hologram', 'mix']}
                selected={shop.isInCart(item.id)}
                >
                {#if shop.isInCart(item.id)}
                    <span class="[  fs-350 ]">Added to Cart</span>
                    {:else}
                    <span class="[  fs-350 ]">Add to Cart</span>
                {/if}
            </Button>
        </Flex>

        <Flex cls={cubeCss('', '', 'width-100 margin-block-start-1')} align='center' justify='space-between'>
            <p class="[ fs-300 clr-text-muted ]">Cookie</p>
            <Button 
                cls={cubeCss('', '', 'fs-350')}
                variant='muted' 
                attachments={['capsule', 'tiny-pad', 'hologram', 'mix']}
            >
                <Flex align='center'>
                    <Icon cls={cubeCss('', '', 'margin-block-auto')}>{ICON_IMAGE}</Icon>
                    <span>12 images</span>
                </Flex>
            </Button>
        </Flex>
    </Flex>
</div>