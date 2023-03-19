export interface Item {
    id: string;
    state: string;
    pic: string;
    title: string;
    location: string;
    seller: string;
    type: string;
    description: string;
    amount: string;
    price: string;
}

export interface ItemPlus {
    data: Item;
    dealID?: number;
}

export interface Deal {
    dealID: number;
    itemID: number;
    isPaied: boolean;
}