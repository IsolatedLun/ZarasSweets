import type { Some } from "../components/types";

export interface Store_Shop {
    store: T_Item[],
    selectedItemIndex: number,
    categories: Record<string, number>[],
    titles: string[],
    maxPrice: number,
    cart: Record<number, T_Item>,
}

export type T_ItemTypes = 'cake' | 'cookie' | 'box';
export type T_ItemSoryByTypes = 'high_to_low' | 'low_to_high' | 'category';
export interface T_Item {
    id: number;
    price: number;

    title: string;
    images: string[];
    type: T_ItemTypes;
    unit: 'kg' | 'dz' | 'box';
}

export type T_CartItem = T_Item & {quantity: number};

export interface T_ItemFilters {
    title: string;

    minPrice: number;
    maxPrice: number;

    types: T_ItemTypes[];
}