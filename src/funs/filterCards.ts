import type { ItemPlus } from "@/common/types";
import type { FilterState } from "@/common/types";

export function filterCards(cards: ItemPlus[], filter: FilterState): ItemPlus[] {
    if (filter === 0) {
        return cards;
    }
    return cards.filter((card) => parseInt(card.data.state) === filter);
}