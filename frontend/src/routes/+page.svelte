<script>
	import Button from "../components/Interactibles/Button/Button.svelte";
	import Input from "../components/Interactibles/Input/Input.svelte";
	import TextInput from "../components/Interactibles/Input/Input.svelte";
	import Navbar from "../components/Layouts/Navbar/Navbar.svelte";
	import Store from "../components/Layouts/Store/Store.svelte";
	import Flex from "../components/Modules/FlexAndGrid/Flex.svelte";
	import Icon from "../components/Modules/Icon/Icon.svelte";
	import Numeric from "../components/Modules/Numeric/Numeric.svelte";
	import { ICON_BUCKET } from "../components/icons";
	import { cubeCss } from "../utils/cubeCss/cubeCss";

</script>

<Navbar />

<main class="container" data-type='full'>
	<Store />
</main>
