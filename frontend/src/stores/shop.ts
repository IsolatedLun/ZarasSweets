import { get, writable } from "svelte/store";
import type { Store_Shop } from "./types";
import shopData from '../shop.json';
import { MINIMUM_QTY } from "../components/consts";

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
        setQuantity: (id: number, qty: number) => store.update(_this => {
            if(qty >= MINIMUM_QTY)
                _this.cart[id].quantity = qty;
            return _this;
        }),

        selectFlavor: (id: number, flavor: string) => store.update(_this => {
            const itemIndex = _this.store.findIndex(x => x.id === id);
            const item = _this.store[itemIndex];

            if(item.selectedFlavors.includes(flavor))
                item.selectedFlavors = item.selectedFlavors.filter(x => x !== flavor);
            else
                item.selectedFlavors.push(flavor);

            _this.store[itemIndex] = item;
            if(id in _this.cart)
                _this.cart[id].selectedFlavors = item.selectedFlavors;

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
        isInCart: (id: number) => id in get(store).cart,
        calculateCartTotal: () => Object.values(get(store).cart)
            .reduce((sum, x) => sum + (x.price * x.quantity), 0
        )
    }
}

export const shop = createShopStore();