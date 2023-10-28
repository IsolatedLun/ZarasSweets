<script lang='ts'>
	import Button from "../../../components/Interactibles/Button/Button.svelte";
    import Card from "../../../components/Modules/Card/Card.svelte";
	import Flex from "../../../components/Modules/FlexAndGrid/Flex.svelte";
	import Grid from "../../../components/Modules/FlexAndGrid/Grid.svelte";
	import Item from "../../../components/Modules/Item/Item.svelte";
	import { constructCheckoutString } from "../../../components/Modules/Item/utils";
	import { shop } from "../../../stores/shop";
	import { cubeCss } from "../../../utils/cubeCss/cubeCss";

    function setProceedButton(el: HTMLElement) {
        (el as HTMLAnchorElement).target = '_blank';
    }

</script>

<main class="container" data-type='full'>
    <Grid cls={cubeCss('cart', '', 'width-100')} collapseOnMobile={true} gap={3}>
        <section class="cart__items">
            <h2 class="fw-500">Items ({Object.values($shop.cart).length})</h2>
            <div class="[ store ] [ margin-block-start-2 ]">
                <div class="[ store__items-grid ] [ gap-3 ]">
                    {#if Object.values($shop.cart).length === 0}
                        <p class="margin-block-2">No items found!</p>
                    {/if}

                    {#each Object.values($shop.cart) as cartItem}
                        <Item item={cartItem} context='cart' />
                    {/each}
                </div>
            </div>
        </section>
        <section class="[ cart__checkout ] [ width-100 ]">
            <Card>
                <h2 class="[ text-align-center ] [ margin-block-end-1 ]">Checkout</h2>

                <Flex useColumn={true} cls={cubeCss('', '', 'width-100 fs-350')} gap={2}>
                    {#each Object.values($shop.cart) as item}
                        <Flex cls={cubeCss('', '', 'width-100')}>
                            <p>{item.title}</p>
                            <p>${(item.price).toFixed(2)} x {item.quantity} = ${(item.price * item.quantity).toFixed(2)}</p>
                        </Flex>

                        <div class="breakline"></div>
                    {/each}

                    <Flex cls={cubeCss('', '', 'margin-block-start-1 fs-450 width-100')}>
                        <p>Total</p>
                        {#key $shop}
                            <p>${shop.calculateCartTotal().toFixed(2)}</p>
                        {/key}
                    </Flex>
                </Flex>

                {#key $shop}
                    <Button 
                        use={setProceedButton}
                        to={"https://api.whatsapp.com/send?phone=71253524&text=" + constructCheckoutString()} 
                        variant='whatsapp' 
                        cls={cubeCss('', '', 'margin-block-start-2 width-max-content')}
                    >
                        <Flex align='center'>
                            <i class="fab fa-whatsapp fs-500" aria-hidden="true"></i>
                            <span>Proceed to Whatsapp</span>
                        </Flex>
                    </Button>
                {/key}
            </Card>

            <p class="[ margin-block-start-2 fs-350 clr-misc-warn text-align-center ]">
                Important: After confirming the order, send your location + date of delivery.
            </p>
        </section>
    </Grid>
</main>