<script>
	import Button from "../components/Interactibles/Button/Button.svelte";
	import TextInput from "../components/Interactibles/Input/TextInput.svelte";
	import Flex from "../components/Modules/FlexAndGrid/Flex.svelte";
	import Numeric from "../components/Modules/Numeric/Numeric.svelte";

</script>

<main class="container" data-type='full'>
	<Flex useColumn={true} gap={3}>
		<div>
			<h1>Welcome to SvelteKit</h1>
			<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
		</div>

		<Flex align='center'>
			<Button>Continue</Button>
			<p><span class="[ clr-neutral-800 ]"><Numeric value={345324546} /></span> entrances</p>
		</Flex>

		<TextInput label="Label" showLabel={true} placeholder='Enter label' />
	</Flex>
</main>
