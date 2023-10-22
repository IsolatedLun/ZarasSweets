export interface Store_Shop {
    store: T_Item[],
    categories: Record<string, number>[],
    titles: string[],
    maxPrice: number,
    cart: Record<number, T_Item>,
}

export type T_ItemTypes = 'cake' | 'cookie' | 'box';
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
    minPrice: number;
    maxPrice: number;

    types: T_ItemTypes[];
}