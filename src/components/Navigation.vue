<script setup lang="ts">
import { reactive } from "vue";
import { generalStore } from "@/store/store";
const store = generalStore();
// TODO прикурутить TS

store.mode = 1;
const state = reactive({
    navActive: [false, true, false],
});

function setCardsGroup(num: number): void {
    state.navActive.forEach((x, ind, arr) => {
        arr[ind] = false;
    });
    state.navActive[num] = true;
    store.mode = num;
    store.updateLocalStorage();
}
</script>

<template>
    <header class="header text">
        <div class="header__box"></div>
        <nav class="header__nav nav">
            <button
                class="nav__item"
                :class="{ 'nav__item--active': state.navActive[0] }"
                @click="setCardsGroup(0)"
            >
                <div class="nav__pic">
                    <img
                        src="@/assets/img/nav/heart.svg"
                        alt=""
                        srcset=""
                        class="nav__img"
                    />
                </div>
                <div class="nav__text">Избранное</div>
            </button>
            <!-- /nav__item -->
            <button
                class="nav__item"
                :class="{ 'nav__item--active': state.navActive[1] }"
                @click="setCardsGroup(1)"
            >
                <div class="nav__pic">
                    <img
                        src="@/assets/img/nav/box.svg"
                        alt=""
                        srcset=""
                        class="nav__img"
                    />
                </div>
                <div class="nav__text">Склад</div>
            </button>
            <!-- /nav__item -->
            <button
                class="nav__item"
                :class="{ 'nav__item--active': state.navActive[2] }"
                @click="setCardsGroup(2)"
            >
                <div class="nav__pic">
                    <img
                        src="@/assets/img/nav/bag.svg"
                        alt=""
                        srcset=""
                        class="nav__img"
                    />
                </div>
                <div class="nav__text">Сделки</div>
            </button>
            <!-- /nav__item -->
        </nav>
        <!-- /header__nav -->
    </header>
    <!-- /header -->
</template>

<style scoped>
.header {
    position: relative;
    padding: 60px 0 77px 0;

    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
}

.header__box {
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 40px;
    background-color: #e0e3ee;
    border-radius: 0px 0px 10px 10px;
}

.nav {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
}

.nav__item {
    width: 86px;
    height: 50px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
}

.nav__item--active {
    background-color: #f4f5f9;
}

.nav__text {
    font-weight: 800;
}
</style>
