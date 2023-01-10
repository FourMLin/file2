<template>
    <Header :marquee="false"></Header>
    <CategoryMenu :style="'herizon'" />
    <main class="g-main-layout">
        <div class="g-container">
            <div class="g-breadcrumb">
                <a href="#">首頁</a> > <a href="#">購物車</a> > <a href="#" class="current">選購清單</a>
            </div>
            <div class="c-list-title">
                <h2>商品確認</h2>
            </div>
            <ProcessStep :type="'basic'" :active="'2'" />
            <CartProduct :cartproduct="cartproduct" :checkable=false />
            <Consumption :show="true" />
            <CartBottom :btngroup="btngroup" :total="true" :btnshow="true" />
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
    import Consumption from '../../home/components/Consumption.vue'
    import CartBottom from '../../home/components/CartBottom.vue'


    export default {
        name: 'ConfirmProduct',
        components: {
            Header,
            Footer,
            CategoryMenu,
            ProcessStep,
            CartProduct,
            Consumption,
            CartBottom
        },
        data() {
            return {
                cartproduct: [{
                        type: 'room-trans',
                        titletext: '常溫宅配',
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

                ],
                btngroup:[{
                    grid:'g-col-2 g-col-sm-4',
                    style: 'main-line',
                    text:'繼續購物',
                    link:'/'
                },
                {
                    grid:'g-col-3 g-col-sm-8',
                    style: 'main',
                    text:'去結帳',
                    link:'/checkout'
                }]



            }
        },

    }
</script>

<style lang="scss">
</style>