<template>
    <Header :marquee="false"></Header>
    <CategoryMenu :style="'herizon'" />
    <main class="g-main-layout">
        <div class="g-container">
            <div class="g-breadcrumb">
                <a href="#">首頁</a> > <a href="#">購物車</a> > <a href="#" class="current">選購清單</a>
            </div>
            <div class="c-list-title">
                <h2>選購清單</h2>
            </div>

            <ProcessStep :type="'basic'" :active="'1'" />
            <CartProduct :cartproduct="cartproduct" :checkable=true />
            <CartBottom :btngroup="btngroup" :btnshow="true" />
        </div>
    </main>

    <Footer></Footer>
</template>


<script>
    import Header from '../../global/components/header.vue'
    import Footer from '../../global/components/footer.vue'
    import CategoryMenu from '../../global/components/category/CategoryMenu.vue'
    import ProcessStep from '../../global/components/process/ProcessStep.vue'
    import CartProduct from '../../home/components/CartProduct.vue'
    import CartBottom from '../../home/components/CartBottom.vue'

    export default {
        name: 'CartPage',
        components: {
            Header,
            Footer,
            CategoryMenu,
            ProcessStep,
            CartProduct,
            CartBottom
        },
        data() {
            return {
                cartproduct: [{
                        type: 'room-trans',
                        titletext: '常溫宅配',
                        gold: '1000',
                        products: [{
                            state: true,
                            img: require('../../global/assets/chicken.png'),
                            code: 'S81003397',
                            name: 'ORIGINS 品木宣言 Dr.WEIL青春無敵健康光潤機能水(200ml)X2-國際航空版',
                            tip: '蒜味辣椒*8 / 結帳後5日內出貨',
                            price: '0'
                        }, {
                            state: false,
                            img: require('../../global/assets/chicken.png'),
                            code: 'S81003397',
                            name: 'ORIGINS 品木宣言 Dr.WEIL青春無敵健康光潤機能水(200ml)X2-國際航空版',
                            tip: '蒜味辣椒*8 / 結帳後5日內出貨',
                            price: '799'
                        }, ]
                    },
                    {
                        type: 'low-trans',
                        titletext: '低溫宅配',
                        gold: '1000',
                        products: [{
                            state: false,
                            img: require('../../global/assets/chicken.png'),
                            code: 'S81003397',
                            name: 'ORIGINS 品木宣言 Dr.WEIL青春無敵健康光潤機能水(200ml)X2-國際航空版',
                            tip: '蒜味辣椒*8 / 結帳後5日內出貨',
                            price: '799'
                        }, {
                            state: false,
                            img: require('../../global/assets/chicken.png'),
                            code: 'S81003397',
                            name: 'ORIGINS 品木宣言 Dr.WEIL青春無敵健康光潤機能水(200ml)X2-國際航空版',
                            tip: '蒜味辣椒*8 / 結帳後5日內出貨',
                            price: '799'
                        }, ]
                    },
                    {
                        type: 'room-shop',
                        titletext: '常溫店取',
                        gold: '1000',
                        products: [{
                            state: false,
                            img: require('../../global/assets/chicken.png'),
                            code: 'S81003397',
                            name: 'ORIGINS 品木宣言 Dr.WEIL青春無敵健康光潤機能水(200ml)X2-國際航空版',
                            tip: '蒜味辣椒*8 / 結帳後5日內出貨',
                            price: '799'
                        }, ]
                    },
                    {
                        type: 'low-shop',
                        titletext: '低溫店取',
                        gold: '1000',
                        products: [{
                            state: false,
                            img: require('../../global/assets/chicken.png'),
                            code: 'S81003397',
                            name: 'ORIGINS 品木宣言 Dr.WEIL青春無敵健康光潤機能水(200ml)X2-國際航空版',
                            tip: '蒜味辣椒*8 / 結帳後5日內出貨',
                            price: '799'
                        }, ]
                    },
                    {
                        type: 'room-store',
                        titletext: '常溫超商取',
                        gold: '1000',
                        products: [{
                            state: false,
                            img: require('../../global/assets/chicken.png'),
                            code: 'S81003397',
                            name: 'ORIGINS 品木宣言 Dr.WEIL青春無敵健康光潤機能水(200ml)X2-國際航空版',
                            tip: '蒜味辣椒*8 / 結帳後5日內出貨',
                            price: '799'
                        }, ]
                    },
                    {
                        type: 'low-store',
                        titletext: '低溫超商取',
                        gold: '1000',
                        products: [{
                            state: false,
                            img: require('../../global/assets/chicken.png'),
                            code: 'S81003397',
                            name: 'ORIGINS 品木宣言 Dr.WEIL青春無敵健康光潤機能水(200ml)X2-國際航空版',
                            tip: '蒜味辣椒*8 / 結帳後5日內出貨',
                            price: '799'
                        }, ]
                    }, {
                        type: 'cupon',
                        titletext: '票券',
                        gold: '1000',
                        products: [{
                            state: false,
                            img: require('../../global/assets/chicken.png'),
                            code: 'S81003397',
                            name: 'ORIGINS 品木宣言 Dr.WEIL青春無敵健康光潤機能水(200ml)X2-國際航空版',
                            tip: '蒜味辣椒*8 / 結帳後5日內出貨',
                            price: '799'
                        }, ]
                    }
                ],
                btngroup:[{
                    grid:'g-col-2 g-col-sm-4',
                    style: 'main-line',
                    text:'回首頁',
                    link:'/'
                },
                {
                    grid:'g-col-3 g-col-sm-8',
                    style: 'main',
                    text:'商品確認',
                    link:'/confirmproduct'
                }]



            }
        },

    }
</script>

<style lang="scss">
    @import '../../home/scss/cart.scss';
</style>