<template>

    <Carousel :items-to-show="itemcount" :wrap-around="loop" :autoplay="5000">
        <Slide v-for="s in slides" :key="s">
            <div class="carousel__item" v-if="type == 'image'">
                <div class="g-carousel-img" :class="">
                    <img :src="s.img" alt="">
                </div>
            </div>
            <div class="carousel__item" v-else-if="type == 'vertical-product'">
                <div class="g-carousel-img">
                    <img :src="s.img" alt="">
                </div>
                <div class="g-carousel-title">{{s.title}}</div>
                <div class="g-carousel-price">$<b>{{s.price}}</b></div>
                <div class="g-btn g-btn-regular g-btn-main"  @click="$emit('clickmodal')">
                    加購
                </div>
                <div class="g-drop">
                    <div class="g-close"><span class="material-icons">close</span></div>
                    123
                </div>
            </div>
        </Slide>


        <template #addons>
            <Navigation v-if="nav" />
            <Pagination v-if="pagination" />
            <template v-else></template>
        </template>
    </Carousel>

    <iframe width="560" height="315" src="https://www.youtube.com/embed/_J2pcVj7eqM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>


</template>

<script>
    // import ModalRegular from '@/global/components/modal/ModalRegular.vue'
    import {
        defineComponent
    } from 'vue'
    import {
        Carousel,
        Navigation,
        Pagination,
        Slide
    } from 'vue3-carousel';

    // import 'vue3-carousel/dist/carousel.css';
    export default defineComponent({
        name: 'CarosaulRegular',
        components: {
            Carousel,
            Slide,
            Pagination,
            Navigation,
            // ModalRegular
        },
        props: {
            'slides': {
                type: Object,
                reauire: true
            },
            'pagination': {
                type: Boolean,
                reauire: true
            },
            'nav': {
                type: Boolean,
                reauire: true
            },
            'itemcount': {
                type: Number,
                reauire: true
            },
            'loop': {
                type: Boolean,
                reauire: true
            },
            'type': {
                type: Object,
                reauire: true
            },
        },
        data() {
            return {

            }
        },
        methods: {

        }
    });
</script>