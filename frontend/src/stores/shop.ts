import { get, writable } from "svelte/store";
import type { Store_Shop } from "./types";

function createShopStore() {
    const store = writable<Store_Shop>({
        store: [
            {
                id: 0,
                title: 'Sable',
                images: [],
                price: 12,
                type: 'box',
                unit: 'box',
                quantity: 1
            }
        ],
        cart: {}
    })

    return {
        subscribe: store.subscribe,
        update: store.update,
        set: store.set,

        addToCart: (id: number) => store.update(_this => {
            _this.cart[id] = _this.store.find(x => x.id === id)!;
            return _this;
        }),
        removeFromCart: (id: number) => store.update(_this => {
            delete _this.cart[id];
            return _this;
        }),
        isInCart: (id: number) => id in get(store).cart
    }
}

export const shop = createShopStore();