<script lang='ts'>
	import { onMount } from "svelte";
	import { shop } from "../../../stores/shop";
	import type { T_Item } from "../../../stores/types";
	import { cubeCss } from "../../../utils/cubeCss/cubeCss";
	import { capitalize } from "../../../utils/general";
	import Button from "../../Interactibles/Button/Button.svelte";
	import Card from "../../Modules/Card/Card.svelte";
	import Flex from "../../Modules/FlexAndGrid/Flex.svelte";
	import ItemPricing from "../../Modules/Item/ItemPricing.svelte";
	import MediaScroller from "../../Modules/MediaScroller/MediaScroller.svelte";
	import { MODAL_ID } from "../../consts";

	onMount(() => {
		modal.showModal()
	})

	
    export let item: T_Item = $shop.store[$shop.selectedItemIndex];
    let modal: HTMLDialogElement;
    let currentImgIndex = 0;
	
	shop.subscribe(_this => item = _this.store[_this.selectedItemIndex]);
</script>

<dialog bind:this={modal} id={MODAL_ID} class="[ modal ] [ gap-3 ]">
	<div class="[ modal__inner ] [ grid gap-3 ]" data-collapse={true}>
		<section class="modal__images">
			<div class="[ current-img ] [ margin-inline-auto margin-block-end-5 ]">
				<img src={item.images[currentImgIndex]} alt={item.title}>
			</div>
			<MediaScroller 
				cls={cubeCss('images__list', '', 'width-100 margin-block-start-2')} 
				snapsInline={true}
				gap={2}
			>
				{#each item.images as img, i}
					<Button variant='none' on:click={() => currentImgIndex = i}>
						<div class="img">
							<img src={img} alt="" />
						</div>
					</Button>
				{/each}
			</MediaScroller>
		</section>
		<section class="modal__details">
			<Card>
				<div class="margin-block-end-2">
					<p class="[ fs-450 margin-block-end-1 ]">{item.title}</p>
					<p class="[ fs-300 clr-text-muted ]">{capitalize(item.type)}</p>
				</div>
				<Flex align='center' gap={3}>
					<ItemPricing {item} />
					<Button attachments={['small-pad', 'hologram', 'mix']}>Add to Cart</Button>
				</Flex>
			</Card>
	
			<Button 
				on:click={() => modal.close()}
				variant='error' 
				attachments={['hologram', 'mix']}
				cls={cubeCss('', '', 'margin-block-start-2')}
			>
				Close
			</Button>
		</section>
	</div>
</dialog>