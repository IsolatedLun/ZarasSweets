<script>
	import { cubeCss } from "../../../utils/cubeCss/cubeCss";
	import Flex from "../../Modules/FlexAndGrid/Flex.svelte";
</script>

<nav class="[ primary-nav ] [ padding-1 padding-inline-3 margin-block-end-2 ]">
	<Flex align='center' justify='space-between'>
		<img class="primary-nav__logo" src="./images/logo2.png" alt="Zara's Sweets">

		<Flex tag='ul' cls={cubeCss('primary-nav__links', '', 'fw-500 text-upper')} gap={4}>
			<li>
				<a href="./">Store</a>
			</li>
			<li>
				<a href="./cart">My Cart</a>
			</li>
		</Flex>
	</Flex>
</nav>