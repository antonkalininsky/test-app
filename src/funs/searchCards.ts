import type { ItemPlus } from "@/common/types";

export function searchCards(cards: ItemPlus[], searchWord: string): ItemPlus[] {
    if (searchWord === "") {
        return cards;
    }
    return cards.filter((card) =>
        card.data.title.toLowerCase().includes(searchWord.toLowerCase())
    );
}
