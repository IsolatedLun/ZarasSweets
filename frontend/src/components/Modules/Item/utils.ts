import { get } from "svelte/store";
import { shop } from "../../../stores/shop";
import { openModal } from "../../Layouts/Modal/utils";
import { MODAL_ID } from "../../consts";

export function openItemModal(id: number) {
    shop.setSelectedItem(id);
    openModal(MODAL_ID);
}

export function constructCheckoutString() {
    let output = 'Order - ' + crypto.randomUUID().split('-')[0] + '%0a';

    output += '--------------------';
    output += '%0a';

    Object.values(get(shop).cart).forEach(item => {
        output += `${item.title} (${item.unit}) - $${item.price} x ${item.quantity} = $${item.price * item.quantity}`
        output += '%0a';
    })

    output += '--------------------';
    output += '%0a';
    return output += `Total: $${shop.calculateCartTotal()}`;
}