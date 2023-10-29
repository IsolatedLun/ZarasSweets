import { get } from "svelte/store";
import { shop } from "../../../stores/shop";
import { openModal } from "../../Layouts/Modal/utils";
import { MODAL_ID } from "../../consts";
import type { T_Item } from "../../../stores/types";

export function openItemModal(id: number) {
    shop.setSelectedItem(id);
    openModal(MODAL_ID);
}

export function constructCheckoutString() {
    let output = 'Order - ' + crypto.randomUUID().split('-')[0] + '%0a';
    let cartItems: T_Item[] = Object.values(get(shop).cart)

    output += '-'.repeat(16);
    output += '%0a';

    cartItems.forEach(item => {
        output += `${item.title} (${item.unit})`
        output += '%0a';
        output += `Price: $${item.price} x ${item.quantity} = $${item.price * item.quantity}`
        output += '%0a';
        if(item.flavors.length > 0) {
            output += `Flavors: ${item.selectedFlavors.join(", ")}`
            output += '%0a';
        }
        
        output += cartItems.length > 1 ? '-'.repeat(16) + '%0a' : '-'.repeat(16);
    })

    output += '%0a';
    return output += `Total: $${shop.calculateCartTotal()}`;
}