<script lang='ts'>
	import { shop } from "../../../../stores/shop";
	import type { T_Item } from "../../../../stores/types";
	import { cubeCss } from "../../../../utils/cubeCss/cubeCss";
	import Button from "../../../Interactibles/Button/Button.svelte";
	import Input from "../../../Interactibles/Input/Input.svelte";
    import Flex from "../../FlexAndGrid/Flex.svelte";
	import ItemPricing from "../ItemPricing.svelte";
	import { openItemModal } from "../utils";

    function setNumberInput(el: HTMLElement) {
        (el as HTMLInputElement).min = "1";
    }

    export let item: T_Item;
</script>

<Flex align='center' useColumn={true}>
    <Flex align='center'>
        <ItemPricing {item} />
        <span class="[ fs-350 clr-text-muted ]">x{item.quantity}</span>
    </Flex>
    <p class="fs-350">
        <span class="fs-400">= ${(item.price * item.quantity).toFixed(2)}</span>
    </p>
</Flex>

<Flex cls={cubeCss('', '', 'width-100')} justify='center' gap={2}>
    <Button 
        on:click={() => openItemModal(item.id)}
        cls={cubeCss('', '', '')} 
        attachments={['tiny-pad', 'hologram', 'mix']}
        >
        <span class="[  fs-350 ]">View</span>
    </Button>
    <Button 
        on:click={() => shop.removeFromCart(item.id)}
        variant='error'
        cls={cubeCss('', '', '')} 
        attachments={['tiny-pad', 'hologram', 'mix']}
        >
        <span class="[  fs-350 ]">Remove</span>
    </Button>
</Flex>

<Input 
    on:input={(e) => shop.setQuantity(item.id, Number(e.detail.target.value))}
    use={setNumberInput}
    showLabel={true}
    cls={cubeCss('', '', 'width-max-content')}
    type='number' 
    placeholder='Enter quantity' 
    label='Quantity' 
    value="1"
/>

<a href="https://api.whatsapp.com/send?phone=71253524&text=Hi%0asuiiii" target="_blank">Send Message</a>