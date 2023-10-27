<script lang='ts'>
	import type { T_Item } from "../../../stores/types";

    export let item: T_Item;
</script>

<p class="fs-450">
    ${item.price.toFixed(2)} 
    <span class="[ fs-300 text-lower ]">/ {item.unit}</span>
</p>