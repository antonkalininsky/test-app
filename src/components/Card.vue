<template>
    <div class="results__item card text">
        <div class="card__main">
            <div class="card__pic">
                <img
                    src="@/assets/img/products/product-1.png"
                    alt=""
                    srcset=""
                    class="card__img"
                />
            </div>
            <div class="card__text">
                <div class="card__mode">Аукцион</div>
                <div class="card__name">Пиломатериалы брус доска</div>
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
                        Санкт-Петербург, Красное Село
                    </div>
                </div>
                <div class="card__seller">
                    <span class="card__seller-title"> Продавец </span>
                    Торговый Дом ГОСТ
                </div>
                <div class="card__category category">
                    <div class="category__head">Вид товара</div>
                    <div class="category__text">Стройматериалы</div>
                </div>
                <div class="card__description">
                    Пиломатериалы брус доска. Распродажа пиломатериалов в связи
                    закрытием ЛЕСО-БАЗЫ! Успейте приобрести пиломатериал со
                    скидками до закрытия 01.06.2022 ! Мы стараемся быть не
                    такими как все и даем вам: Доставка в согласованный день,
                    если переносим - доставка бесплатно за наш счет. Весь
                    материал соответствует гостам. Вы можете проверить
                    пиломатериалы на складе или на адресе. Если материал не
                    соответствует заявленному качеству - бесплатно меняем его.
                </div>
            </div>
        </div>
        <!-- /card__main -->
        <div class="card__offer">
            <div class="card__info">
                <div class="card__price-total">33 000 ₽</div>
                <ul class="card__list list">
                    <li class="list__item">
                        <div class="list__text text--light">Количество</div>
                        <div class="list__amount">3 шт.</div>
                    </li>
                    <li class="list__item">
                        <div class="list__text text--light">
                            Стоимость за штуку
                        </div>
                        <div class="list__amount">11 000 ₽</div>
                    </li>
                </ul>
            </div>
            <div class="card__control">
                <button class="card__add-deals text button button--wide"
                :class="{'button--active' : state.favButton}"
                @click="addFavourite()">
                    Добавить в сделки
                </button>
                <button class="card__add-fav text button"
                :class="{'button--active' : state.dealButton}"
                @click="addDeals()">
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
    <!-- /results__item -->
</template>

<script setup lang="ts">
// TODO прикурутить TS
import { reactive } from "vue";
const state = reactive({
    favButton: false,
    dealButton: false,
});

function addFavourite() :void {
    state.favButton = !state.favButton;
}

function addDeals() :void {
    state.dealButton = !state.dealButton;
}

</script>

<style scoped>
.card {
    display: grid;
    grid-template-columns: auto auto;
    border-radius: 20px;
    border: 1px solid #e0e3ee;
}

.card__main {
    display: grid;
    grid-template-columns: auto auto;
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
    width: 100%;
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
