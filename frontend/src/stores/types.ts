export interface Store_Shop {
    store: T_Item[],
    cart: Record<number, T_Item>,
}

export type T_ItemTypes = 'cake' | 'cookie' | 'box';
export interface T_Item {
    id: number;
    price: number;
    quantity: number;

    title: string;
    images: string[];
    type: T_ItemTypes;
    unit: 'kg' | 'dz' | 'box';
}

export interface T_ItemFilters {
    minPrice: number;
    maxPrice: number;

    types: T_ItemTypes[];
}