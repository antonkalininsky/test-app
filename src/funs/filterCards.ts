import type { ItemPlus } from "@/common/types";

export function filterCards(cards: ItemPlus[], filterNum: number): ItemPlus[] {
    if (filterNum === 0) {
        return cards;
    }
    return cards.filter((card) => parseInt(card.data.state) === filterNum);
}