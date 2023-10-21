<script>
	import Button from "../components/Interactibles/Button/Button.svelte";
	import Input from "../components/Interactibles/Input/Input.svelte";
	import TextInput from "../components/Interactibles/Input/Input.svelte";
	import Store from "../components/Layouts/Store/Store.svelte";
	import Flex from "../components/Modules/FlexAndGrid/Flex.svelte";
	import Icon from "../components/Modules/Icon/Icon.svelte";
	import Numeric from "../components/Modules/Numeric/Numeric.svelte";
	import { ICON_BUCKET } from "../components/icons";
	import { cubeCss } from "../utils/cubeCss/cubeCss";

</script>

<nav class="[ primary-nav ] [ padding-1 padding-inline-3 margin-block-end-2 ]">
	<Flex align='center' justify='space-between'>
		<img class="primary-nav__logo" src="./images/logo.png" alt="Zara's Sweets">

		<Flex tag='ul' cls={cubeCss('primary-nav__links', '', 'fw-bold text-upper')} gap={4}>
			<li>
				<a href="">Store</a>
			</li>
			<li>
				<a href="">My Cart</a>
			</li>
		</Flex>
	</Flex>
</nav>

<main class="container" data-type='full'>
	<Store />
</main>
