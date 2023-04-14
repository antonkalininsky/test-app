import type { Ref } from "vue";

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

export interface GeneralStore {
    mode: Ref<number>,
    filter: Ref<number>,
    favItems: Ref<Array<number>>,
    dealItems: Ref<Array<Deal>>,
    dealCount: Ref<number>,
    searchWord: Ref<string>,
    toggleFavourite(id: number): void,
    checkFavourite(id: number): boolean,
    addDeal(id: number): void,
    payDeal(id?: number): void
}

export interface CardData {
    id: string,
    state: string,
    pic: string,
    title: string,
    location: string,
    seller: string,
    type: string,
    description: string,
    amount: string,
    price: string,
}

export interface CardProps {
    data: {
        id: string,
        state: string,
        pic: string,
        title: string,
        location: string,
        seller: string,
        type: string,
        description: string,
        amount: string,
        price: string,
    },
    dealID?: number,
    mode: number
}

export enum FilterState { No, Direct, Auction }