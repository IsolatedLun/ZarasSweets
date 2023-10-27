<script lang='ts'>
	import Footer from "../components/Layouts/Footer/Footer.svelte";
	import Modal from "../components/Layouts/Modal/Modal.svelte";
	import Navbar from "../components/Layouts/Navbar/Navbar.svelte";
	import Store from "../components/Layouts/Store/Store.svelte";
</script>

<div>
	<Navbar />

	<main class="container" data-type='full'>
		<Store />
	</main>
</div>

<Modal />
<Footer />
