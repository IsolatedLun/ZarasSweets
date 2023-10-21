<script lang='ts'>
	import { cubeCss } from "../../../utils/cubeCss/cubeCss";
	import Button from "../../Interactibles/Button/Button.svelte";
	import Input from "../../Interactibles/Input/Input.svelte";
	import Flex from "../FlexAndGrid/Flex.svelte";


</script>

<div class="[ item ] [ text-upper ]">
    <div>
        <img class="item__thumbnail" src="https://imgs.search.brave.com/gKOgytN1kxD0C9Ne9cb5rV6YMfn990rHRbr-9cWGnkA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/ZGlubmVyYXR0aGV6/b28uY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDE3LzExL3N0/YWluZWQtZ2xhc3Mt/Y29va2llcy0xLTIt/NDAweDQwMC5qcGc" alt="" />
    </div>
    <Flex cls={cubeCss('item__content', '', '')} useColumn={true} gap={2}>
        <p class="[ fs-400 ]">Salty Cookies</p>
        <Button cls={cubeCss('', '', 'width-100')} attachments={['small-pad', 'hologram', 'mix']}>
            <span class="[ text-upper fs-350 ]">Add to cart</span>
        </Button>
    </Flex>
</div>