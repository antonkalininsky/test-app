<script setup lang="ts">
import { router } from "@/router/router";
</script>

<template>
    <header class="header text">
        <div class="header__box"></div>
        <nav class="header__nav nav">
            <router-link
                to="favourite"
                class="nav__item"
                :class="{
                    'nav__item--active':
                        router.currentRoute.value.name === 'favourite',
                }"
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
            </router-link>
            <!-- /nav__item -->
            <router-link
                to="warehouse"
                class="nav__item"
                :class="{
                    'nav__item--active':
                        router.currentRoute.value.name === 'warehouse',
                }"
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
            </router-link>
            <!-- /nav__item -->
            <router-link
                to="deals"
                class="nav__item"
                :class="{
                    'nav__item--active':
                        router.currentRoute.value.name === 'deals',
                }"
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
            </router-link>
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

@media screen and (max-width: 500px) {
    .header {
        justify-content: center;
    }
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
    font-weight: 600;
}
</style>
