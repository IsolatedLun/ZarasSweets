import type { Some } from "../components/types";
import type { T_Item, T_ItemFilters, T_ItemSoryByTypes } from "./types";

export function filterItems(items: T_Item[], filters: T_ItemFilters, sortBy: Some<T_ItemSoryByTypes>) {
    const filterByTitle =  (item: T_Item) => {
        return item.title.toLowerCase().indexOf(filters.title.toLowerCase()) > -1;
    }
    const filterByPrice = (item: T_Item) => {
        return item.price >= filters.minPrice && item.price <= filters.maxPrice;
    }
    const filterByCategory = (item: T_Item) => {
        if(filters.types.length == 0)
            return true;
        return filters.types.includes(item.type)
    }

    // ===========================================================================
    // ===========================================================================

    const filterFns = [filterByTitle, filterByPrice, filterByCategory];
    const filteredItems = filterFns.reduce((data, fn) => data.filter(fn), items)

    if(sortBy) {
        if(sortBy === 'category')
            return filteredItems.sort((a, b) => a.type > b.type ? 1 : -1);
        if (sortBy === 'high_to_low')
            return filteredItems.sort((a, b) => b.price - a.price);
        if (sortBy === 'low_to_high')
            return filteredItems.sort((a, b) => a.price - b.price);
    }

    return filteredItems;
}