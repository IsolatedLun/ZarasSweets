import { get, writable } from "svelte/store";
import type { Store_Shop } from "./types";
import shopData from '../shop.json';

function createShopStore() {
    const store = writable<Store_Shop>({
        store: shopData.shop as any,
        selectedItemIndex: 0,
        categories: shopData.categories as any,
        titles: shopData.titles,
        maxPrice: shopData.max_price,
        cart: {}
    })

    return {
        subscribe: store.subscribe,
        update: store.update,
        set: store.set,

        setSelectedItem: (id: number) => store.update(_this => {
            _this.selectedItemIndex = _this.store.findIndex(x => x.id === id);
            return _this;
        }),

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