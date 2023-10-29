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

	
    export let item: T_Item = $shop.store[$shop.selectedItemIndex];
    let modal: HTMLDialogElement;
    let currentImgIndex = 0;
	
	shop.subscribe(_this => {
		item = _this.store[_this.selectedItemIndex];
		currentImgIndex = 0;
	});
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
				{#if item.flavors.length > 0}
					<div class="margin-block-end-2">
						<p class="margin-block-end-1">Select flavors ({item.flavors.length})</p>
						<Flex cls={cubeCss('', '', 'flex-wrap')} justify='start'>
							{#each item.flavors as flavor}
								<Button 
									on:click={() => shop.selectFlavor(item.id, flavor)}
									selected={item.selectedFlavors.includes(flavor)}
									attachments={['small-pad', 'hologram', 'capsule']}
								>
									{capitalize(flavor)}
								</Button>
							{/each}
						</Flex>
					</div>
				{/if}
				<Flex align='center' gap={3}>
					<ItemPricing {item} />
					{#if shop.isInCart(item.id)}
						<Button
							on:click={() => shop.removeFromCart(item.id)} 
							variant='error' 
							attachments={['small-pad', 'hologram', 'mix']}
						>
							Remove from Cart
						</Button>
						{:else}
						<Button 
							on:click={() => shop.addToCart(item.id)}
							attachments={['small-pad', 'hologram', 'mix']}
						>
							Add to Cart
						</Button>
					{/if}
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