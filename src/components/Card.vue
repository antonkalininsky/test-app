<script setup lang="ts">
import { ref, computed } from "vue";
import { stateNames } from "@/data/stateNames";
import { generalStore } from "@/store/store";
const store = generalStore();

// SETUP
const isJustAdded = ref<boolean>(false);

// PROPS
interface CardProps {
    data: {
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
    };
    dealID?: number;
    mode: string;
}

const props = withDefaults(defineProps<CardProps>(), {
    data: () => {
        return {
            id: "0",
            state: "Аукцион",
            pic: "product-1.png",
            title: "Заголовок",
            location: "Локация",
            seller: "Продавец",
            type: "Стройматериалы",
            description: "Описание",
            amount: "99",
            price: "1000",
        };
    },
    mode: "default",
});

// COMPUTED
const calcPriceTotal = computed(() => {
    return priceSpacer(
        String(parseFloat(props.data.amount) * parseFloat(props.data.price))
    );
});
const imgSrc = computed(() => "/images/products/" + props.data.pic);
const favButton = computed(() => store.checkFavourite(parseInt(props.data.id)));
const payStatus = computed(() => {
    if (props.dealID === undefined) {
        return false;
    }
    return store.dealItems.find((item) => props.dealID === item.dealID)!
        .isPaied;
});

// METHODS
function priceSpacer(str: string): string {
    if (str.length <= 3) {
        return str;
    }
    return `${priceSpacer(str.slice(0, -3))} ${str.slice(-3)}`;
}

function addDeal(id: number): void {
    if (isJustAdded.value) return;
    isJustAdded.value = true;
    store.addDeal(id);
    setTimeout(() => {
        isJustAdded.value = false;
    }, 500)
}

</script>

<template>
    <div class="card text">
        <div class="card__main">
            <div class="card__pic">
                <img :src="imgSrc" alt="" srcset="" class="card__img" />
            </div>
            <div class="card__text">
                <div class="card__mode">
                    {{ stateNames.get(parseInt(props.data.state)) }}
                </div>
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
                <div class="card__price-total">
                    {{ calcPriceTotal }}
                    <span class="money-sign">&#8381;</span>
                </div>
                <ul class="card__list list">
                    <li class="list__item">
                        <div class="list__text text--light">Количество</div>
                        <div class="list__amount">
                            {{ props.data.amount }} шт.
                        </div>
                    </li>
                    <li class="list__item">
                        <div class="list__text text--light">
                            Стоимость за штуку
                        </div>
                        <div class="list__amount">
                            {{ priceSpacer(props.data.price) }}
                            <span class="money-sign">&#8381;</span>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="card__control">
                <button
                    class="card__add-deals text button button--wide"
                    :class="{ 'button--click button--hover': !isJustAdded }"
                    @click="addDeal(parseInt(props.data.id))"
                    v-if="props.mode === 'default'"
                >
                    <span v-if="isJustAdded" class="button__text--faded"> Добавлено! </span>
                    <span v-else> Добавить в сделки </span>
                </button>
                <button
                    class="card__add-deals text button button--wide button--green"
                    :class="{ 'button--gray': payStatus }"
                    @click="store.payDeal(props.dealID)"
                    v-else
                >
                    <span v-if="payStatus">Оплачено</span>
                    <span v-else>Оплатить</span>
                </button>
                <button
                    class="card__add-fav text button"
                    :class="{ 'button--active': favButton, 'button--hover': !favButton }"
                    @click="store.toggleFavourite(parseInt(props.data.id))"
                >
                    <img
                        src="@/assets/img/cards/heart-w.svg"
                        alt=""
                        srcset=""
                        class="button__img"
                        v-if="favButton"
                    />
                    <img
                        src="@/assets/img/cards/heart-b.svg"
                        alt=""
                        srcset=""
                        class="button__img"
                        v-else
                    />
                </button>
            </div>
        </div>
        <!-- /card__offer -->
    </div>
</template>

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
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
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
    width: 100%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: auto 50px;
    column-gap: 12px;
}

.button {
    height: 50px;

    background: #f4f5f9;
    border: unset;
    border-radius: 10px;

    font-weight: 600;

    cursor: pointer;
}

.button--hover:hover {
    outline: 1px solid #2d3b87;
}

.button--wide {
    padding: 0 36px;
}

.button--green {
    color: #ffffff;
    background: #69c57f;
}

.button--gray {
    background-color: unset;
    border: 1px solid #e0e3ee;
    color: #969dc3;
}

.button--active {
    color: white;
    background: #2942a8;
}

.button--click:active {
    color: white;
    background: #2942a8;
}

.button__text--faded {
    color: #969dc3;
}

@media screen and (max-width: 1000px) {
    .card__main {
        display: block;
        grid-template-columns: unset;
        grid-template-rows: unset;
        padding: 20px 20px 20px 20px;

        position: relative;
    }

    .card__text > * {
        margin-left: 180px;
    }

    .card__description {
        margin: 0;
    }

    .card__pic {
        position: absolute;
        left: 20px;
        top: 20px;

        margin: 0;

        width: 160px;
        height: 160px;
    }
}

@media screen and (max-width: 820px) {
    .card {
        display: grid;
        grid-template-columns: unset;
        grid-template-rows: auto auto;
    }

    .card__pic {
        margin: 0 auto;
    }

    .card__description {
        font-size: 12px;
    }
}

@media screen and (max-width: 500px) {
    .card__pic {
        display: none;
    }

    .card__text > * {
        margin-left: 0;
    }
}
</style>
