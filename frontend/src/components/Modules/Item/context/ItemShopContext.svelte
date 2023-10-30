<script lang='ts'>
	import type { T_Item } from "../../../../stores/types";
	import { cubeCss } from "../../../../utils/cubeCss/cubeCss";
	import Button from "../../../Interactibles/Button/Button.svelte";
	import Flex from "../../FlexAndGrid/Flex.svelte";
	import ItemPricing from "../ItemPricing.svelte";
	import { openItemModal } from "../utils";

    export let item: T_Item;
</script>
<Flex cls={cubeCss('', '', 'width-100')} align='center' justify='space-between'>
    <ItemPricing {item} />

    <Button 
        on:click={() => openItemModal(item.id)}
        cls={cubeCss('', '', '')} 
        attachments={['small-pad', 'hologram', 'mix']}
        >
        <span class="[  fs-400 ]">View</span>
    </Button>
</Flex>