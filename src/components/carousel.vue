<template>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide">
                <!-- Contenu de la diapositive 1 -->
            </div>
            <div class="swiper-slide">
                <!-- Contenu de la diapositive 2 -->
            </div>
            <!-- Ajoutez d'autres diapositives ici -->
        </div>
        <div class="swiper-pagination"></div>
    </div>
</template>

<script>
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';

export default {
    mounted() {
        new Swiper('.swiper-container', {
            effect: 'cube',
            cubeEffect: {
                slideShadows: true,
                shadow: true,
                shadowOffset: 20,
                shadowScale: 0.94,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        });
    },
};
</script>
<style>
</style>