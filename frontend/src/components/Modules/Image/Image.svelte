<script lang='ts'>
	import { onMount } from "svelte";
	import { cubeCss } from "../../../utils/cubeCss/cubeCss";
	import Icon from "../Icon/Icon.svelte";
	import { ICON_SPINNER } from "../../icons";

    onMount(() => {
        // TODO: Create image spinner
        const interval = setInterval(() => {
            if(_this.complete) {
                clearInterval(interval);
                loaded = true;
            }
        }, 100);
    })

    export let cls = cubeCss("", "", "");
    export let src: string;
    export let alt: string;


    let _this: HTMLImageElement;
    let loaded = false;
</script>

<img 
    class={cls.toString()} 
    bind:this={_this} {src} {alt} 
    loading='lazy' 
/>
