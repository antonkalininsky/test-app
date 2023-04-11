import type { Item, ItemPlus } from "@/common/types";
import { generalStore } from "@/store/store";

export function getModeCards(cards: Array<Item>, mode: number): ItemPlus[] {
    const store = generalStore();
    switch (mode) {
        case 0:
            return cards
                .filter((card) => store.checkFavourite(parseInt(card.id)))
                .map((card) => {
                    return {
                        data: card,
                    };
                });
        case 1:
            return cards.map((card) => {
                return {
                    data: card,
                };
            });
        case 2:
            return store.dealItems.map((item) => {
                return {
                    data: cards.find(
                        (card) => parseInt(card.id) === item.itemID
                    ),
                    dealID: item.dealID,
                } as ItemPlus;
            }) as ItemPlus[];
        default:
            return [];
    }
}
