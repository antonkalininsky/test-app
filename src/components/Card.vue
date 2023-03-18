<template>
    <div class="card text">
        <div class="card__main">
            <div class="card__pic">
                <img :src="imgSrc" alt="" srcset="" class="card__img" />
            </div>
            <div class="card__text">
                <div class="card__mode">{{ stateNames.get(parseInt(props.data.state)) }}</div>
                <div class="card__name">{{ props.data.title }}</div>
                <div class="card__location">
                    <div class="card__location-icon">
                        <img
                            src="@/assets/img/cards/location.svg"
                            alt=""
                            srcset=""
                            class="card__location-img"
                        />
                    </div>
                    <div class="card__location-text">
                        {{ props.data.location }}
                    </div>
                </div>
                <div class="card__seller">
                    <span class="card__seller-title"> Продавец </span>
                    {{ props.data.seller }}
                </div>
                <div class="card__category category">
                    <div class="category__head">Вид товара</div>
                    <div class="category__text">{{ props.data.type }}</div>
                </div>
                <div class="card__description">
                    {{ props.data.description }}
                </div>
            </div>
        </div>
        <!-- /card__main -->
        <div class="card__offer">
            <div class="card__info">
                <div class="card__price-total">{{ calcPriceTotal }} ₽</div>
                <ul class="card__list list">
                    <li class="list__item">
                        <div class="list__text text--light">Количество</div>
                        <div class="list__amount">{{ props.data.amount }} шт.</div>
                    </li>
                    <li class="list__item">
                        <div class="list__text text--light">
                            Стоимость за штуку
                        </div>
                        <div class="list__amount">{{ props.data.price }} ₽</div>
                    </li>
                </ul>
            </div>
            <div class="card__control">
                <button
                    class="card__add-deals text button button--wide"
                    :class="{ 'button--active': state.favButton }"
                    @click="addFavourite()"
                >
                    Добавить в сделки
                </button>
                <button
                    class="card__add-fav text button"
                    :class="{ 'button--active': state.dealButton }"
                    @click="addDeals()"
                >
                    <img
                        src="@/assets/img/cards/heart.svg"
                        alt=""
                        srcset=""
                        class="button__img"
                    />
                </button>
            </div>
        </div>
        <!-- /card__offer -->
    </div>
</template>

<script setup lang="ts">
import { computed, reactive } from "vue";
import { generalStore } from "@/store/store";
import { stateNames } from "@/data/stateNames";
const store = generalStore();

const props = defineProps({
    data: {
        type: Object,
        default: {
            id: 0,
            state: "Аукцион",
            pic: "product-1.png",
            title: "Заголовок",
            location: "Локация",
            seller: "Продавец",
            type: "Стройматериалы",
            description: "Описание",
            amount: "99",
            price: "1000",
        },
    },
});

const calcPriceTotal = computed(() => props.data.amount * props.data.price);
const imgSrc = computed(() => "/src/assets/img/products/" + props.data.pic);

// TODO прикурутить TS
const state = reactive({
    favButton: false,
    dealButton: false,
});

// const trueCards = Array.from(cards);
// console.log(cards[0]);
// console.log(trueCards);

function addFavourite(): void {
    state.favButton = !state.favButton;
}

function addDeals(): void {
    state.dealButton = !state.dealButton;
}
</script>

<style scoped>
.card {
    display: grid;
    grid-template-columns: auto 314px;
    border-radius: 20px;
    border: 1px solid #e0e3ee;
}

.card__main {
    display: grid;
    grid-template-columns: 276px auto;
    padding-bottom: 50px;
    padding: 20px 20px 50px 20px;
}

.card__pic {
    width: 256px;
    height: 256px;
    border-radius: 10px;
    overflow: hidden;
    margin-right: 20px;
}

.card__img {
    max-width: 100%;
    height: auto;
}

.card__text {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
}

.card__text > * {
    margin-bottom: 12px;
}

.card__mode {
    color: #969dc3;
}

.card__name {
    font-weight: 800;
    font-size: 15px;
    line-height: 125%;
    color: #2d3b87;
    height: 2em;
}

.card__location {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    padding: 5px;
    background-color: #f4f5f9;
    border-radius: 5px;
}

.card__location-icon {
    margin-right: 6px;
}

.card__location-text {
    color: #616ca5;
}

.card__seller-title {
    color: #969dc3;
    margin-right: 5px;
}

.category {
    padding: 8px;
    background-color: #f4f5f9;
    border-radius: 10px;
}

.category__head {
    color: #616ca5;
    margin-bottom: 8px;
}

.category__text {
    color: #616ca5;
}

.card__description {
    line-height: 150%;
}

.card__offer {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    padding: 20px;

    border: 1px solid #e0e3ee;
    border-radius: 20px;
}

.card__info {
    width: 100%;
}

.card__price-total {
    font-weight: 800;
    font-size: 20px;
    color: #2d3b87;

    margin-bottom: 13px;
}

.list {
    list-style-type: none;
    width: 100%;
}

.list__item {
    width: 100%;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
}

.card__control {
    width: fit-content;
    margin: 0 auto;
    display: grid;
    grid-template-columns: auto auto;
    column-gap: 10px;
}

.button {
    height: 50px;
    width: 50px;

    background: #f4f5f9;
    border: unset;
    border-radius: 10px;

    cursor: pointer;
}

.button--wide {
    width: unset;
    padding: 0 36px;
}
/* TODO сделать нормальный стиль для активных кнопок */
.button--active {
    color: white;
    background: #2942a8;
}
</style>
