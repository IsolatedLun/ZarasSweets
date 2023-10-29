<script>
	import { cubeCss } from "../../../utils/cubeCss/cubeCss";
	import Button from "../../Interactibles/Button/Button.svelte";
	import Flex from "../../Modules/FlexAndGrid/Flex.svelte";
	import Icon from "../../Modules/Icon/Icon.svelte";
	import { ICON_HEART } from "../../icons";

</script>

<footer class="[ primary-footer ] [ padding-block-3 padding-inline-8 margin-block-start-4 ]">
	<Flex cls={cubeCss('', '', 'width-100')} useColumn={true} gap={3}>
		<Flex cls={cubeCss('', '', 'width-100')} align='center' justify='space-between' alignCenterOnMobile={true}>
			<article data-text-center-on-mobile='true'>
				<p class="[ fw-500 fs-450 margin-block-end-2 ]">Zara's sweets: A Home Business</p>
				<p class="fs-350">
					We make a variety of desserts, ranging from cookies and pies to cakes. Our desserts are homemade, in essence they are freshly made and luscious.
				</p>
				<p class="[ fs-350 margin-block-start-5 ]">
                    Made with 
                    <Icon cls={cubeCss('primary-footer__heart', '', 'margin-inline-1')}>{ICON_HEART}</Icon> 
                    and talent.
                </p>
			</article>
		</Flex>

		<Flex cls={cubeCss('', '', 'width-100')} align='center' justify='end' collapseOnMobile={true} gap={3}>
			<Flex align='center' gap={3} collapseOnMobile={true}>
                <Flex tag='ul' gap={2}>
                    <li>
                        <Button to='https://instagram.com/zaraminas86' variant='primary' attachments={['hologram', 'mix']}>
                            <i class="fs-450 fa-brands fa-instagram"></i>
                        </Button>
                    </li>
                    <li>
                        <Button to='https://www.tiktok.com/@14minas' variant='primary' attachments={['hologram', 'mix']}>
                            <i class="fs-450 fa-brands fa-tiktok"></i>
                        </Button>
                    </li>
                </Flex>

                <p class="[ fs-350 clr-text-muted ]">© Zara, Inc.</p>
            </Flex>
		</Flex>
	</Flex>
</footer>