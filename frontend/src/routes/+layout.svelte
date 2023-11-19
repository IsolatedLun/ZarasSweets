<script>
	import { onMount } from "svelte";
	import Footer from "../components/Layouts/Footer/Footer.svelte";
	import Modal from "../components/Layouts/Modal/Modal.svelte";
    import Navbar from "../components/Layouts/Navbar/Navbar.svelte";
	import { handleInAppUsers } from "../utils/general";

	onMount(() => {
		handleInAppUsers();
	})

</script>

<div>
	<Navbar />

	<slot />
</div>

<Modal />
<Footer />

<style>
    @import url('../../static/posty.css');
</style>