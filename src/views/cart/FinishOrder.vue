<template>
    <Header :marquee="false"></Header>
    <CategoryMenu :style="'herizon'" />
    <main class="g-main-layout">
        <div class="g-container">
            <div class="g-breadcrumb">
                <a href="#">首頁</a> > <a href="#">購物車</a> > <a href="#" class="current">選購清單</a>
            </div>
            <div class="c-list-title">
                <h2>訂單完成</h2>
            </div>

            <ProcessStep :type="'basic'" :active="'4'" />
            <div class="c-finish-track">
                <div class="c-finish-text">
                    <h5>訂單已成立</h5>
                    <p>Go美廉已收到您的訂單，感謝您的訂購~</p>
                </div>
                <ProcessStep :type="'track'" :track="track" />
            </div>
            <OrderPage :cartproduct="cartproduct" />

            <Consumption :show="false" />

            <div class="c-consumption-bottom" style="display: flex;">
                <div class="c-con-total"><span class="is-pc-title">總付款金額：</span><span>共4項商品</span></div>
                <div class="c-con-total-money">
                    <span>總金額:</span>
                    <div class="c-total-money-number">$1,799</div>
                    <div class="c-total-money-discount">(金幣扣抵3000枚)</div>
                </div>
            </div>

            <div class="c-receive-info">
                <div class="c-recieve-info-tip">假日物流不配送，遇假日需延後寄出及送達時間</div>
                <div class="c-info-flex">
                    <div class="c-info-flex-col c-reciever">
                        <p>收件人資訊</p>
                        <ul>
                            <li>收件人：陳美蓮</li>
                            <li>收件地址：333 山區文德路4巷10弄100號7樓-1</li>
                            <li>手機號碼：0955000111 </li>
                            <li>希望配送：2022年6月20日 / 不指定時段 </li>
                            <li>備註：</li>
                            <li>缺貨處理方式-退款</li>
                            <li>商品配送方式-宅配</li>
                        </ul>
                    </div>
                    <div class="c-info-flex-col c-payment">
                        <p>發票資訊</p>
                        <ul>
                            <li>發票號：發票處理中 </li>
                            <li>發票方式：會員載具 </li>
                            <li>統一編號：50005354</li>
                        </ul>
                    </div>
                    <div class="c-info-flex-col c-payment">
                        <p>付款資訊</p>
                        <ul>
                            <li>門市付款結帳碼：4461652</li>
                            <li class="c-alert">請於2022/6/30前憑結帳碼至美廉社付款訂單即可成立，逾期將取消訂單。</li>
                            <!-- <li>線上付款：信用卡 </li>
                            <li>付款時間：2022/06/08 20:10:37 </li>
                            <li>卡號：3569-69**-****-4680</li> -->
                        </ul>
                    </div>
                </div>
            </div>

            <CartBottom :btngroup="btngroup" :total="false" :btnshow="true" />

        </div>
    </main>


    <Footer></Footer>
</template>


<script>
    import Header from '../../global/components/header.vue'
    import Footer from '../../global/components/footer.vue'
    import CategoryMenu from '../../global/components/category/CategoryMenu.vue'
    import ProcessStep from '../../global/components/process/ProcessStep.vue'
    import OrderPage from '../../global/components/product/OrderPage.vue'
    import Consumption from '../../home/components/Consumption.vue'
    import CartBottom from '../../home/components/CartBottom.vue'

    export default {
        name: 'FinishOrder',
        components: {
            Header,
            Footer,
            CategoryMenu,
            ProcessStep,
            OrderPage,
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
                            img: require('../../global/assets/chicken.png'),
                            code: 'S81003397',
                            name: 'ORIGINS11 品木宣言 Dr.WEIL青春無敵健康光潤機能水(200ml)X2-國際航空版',
                            tip: '蒜味辣椒*8 / 結帳後5日內出貨',
                            price: '799',
                            open: false
                        }, ]
                    },

                ],
                track: [{
                        text: '選購清單',
                        date: '2022.11.15',
                        time: '20:20:20',
                        done: true
                    },
                    {
                        text: '付款完成',
                        date: '',
                        time: '',
                        done: false
                    },
                    {
                        text: '待出貨',
                        date: '',
                        time: '',
                        done: false
                    },
                    {
                        text: '已出貨',
                        date: '',
                        time: '',
                        done: false
                    },
                    {
                        text: '配送中',
                        date: '',
                        time: '',
                        done: false
                    },
                    {
                        text: '訂單完成',
                        date: '',
                        time: '',
                        done: false
                    }
                ],

                btngroup: [{
                        grid: 'g-col-2 g-col-sm-4',
                        style: 'main-line',
                        text: '訂單完成',
                        link: '/'
                    },
                    {
                        grid: 'g-col-3 g-col-sm-8',
                        style: 'main',
                        text: '繼續結帳',
                        link: '/cart'
                    }
                ]



            }
        },

    }
</script>

<style lang="scss">
</style>