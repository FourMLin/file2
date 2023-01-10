<template>
    <div class="c-orderlist-item-wrap" v-for="order in ordersection" :key="order">

        <div class="c-orderlist-item">
            <div class="c-orderlist-head">
                <div class="c-orderlist-img">
                    <img :src="order.img" alt="">
                </div>
                <div class="c-orderlist-state">

                    <div class="c-orderlist-group">
                        <div class="c-order-label"
                            :class="{'is-light-blue' : order.labelcolor == 'light-blue', 'is-blue' : order.labelcolor == 'blue', 'is-light-green' : order.labelcolor == 'light-green', 'is-green' : order.labelcolor == 'green', 'is-orange' : order.labelcolor == 'orange', 'is-gray' : order.labelcolor == 'gray', 'is-dark-gray' : order.labelcolor == 'dark-gray'}">
                            {{order.labeltext}}
                        </div>
                        <div class="c-orderlist-group-name">{{order.name}}</div>
                    </div>
                    <div class="c-order-message is-green">
                        <span class="material-icons">cancel</span> 已申請退貨/退款：商品問題 (品質不好(質感/性能...)｜1657878986893.jpg
                    </div>

                </div>
            </div>


            <div class="c-orderlist-price">${{order.price}}</div>
            <div class="c-orderlist-detail" @click="order.contentslide = !order.contentslide">訂單詳情<span
                    class="material-icons">expand_more</span></div>
        </div>

        <div class="c-orderlist-content" :class="{'active' : order.contentslide == true}">
            <div class="c-orderlist-content-title" @click="order.contentslide = false">
                訂單詳情<span class="material-icons-outlined">expand_less</span>
            </div>
            <div class="c-order-label c-order-label-inside"
                :class="{'is-light-blue' : order.labelcolor == 'light-blue', 'is-blue' : order.labelcolor == 'blue', 'is-light-green' : order.labelcolor == 'light-green', 'is-green' : order.labelcolor == 'green', 'is-orange' : order.labelcolor == 'orange', 'is-gray' : order.labelcolor == 'gray', 'is-dark-gray' : order.labelcolor == 'dark-gray'}">
                {{order.labeltext}}
            </div>
            <div class="c-orderlist-info">
                <div class="c-orderlist-info-text">
                    <ul>
                        <li>
                            <div class="c-orderlist-info-title">訂單日期</div>
                            <div class="c-orderlist-info-content">{{order.date}} {{order.time}}</div>
                        </li>
                        <li>
                            <div class="c-orderlist-info-title">訂單編號</div>
                            <div class="c-orderlist-info-content">{{order.code}}</div>
                        </li>
                        <li>
                            <div class="c-orderlist-info-title">付款序號</div>
                            <div class="c-orderlist-info-content">
                                <div class="c-orderlist-col c-orderlist-pay">
                                    <div class="c-pay-words" v-if="order.payment == 'store'"><span
                                            class="material-icons-round">storefront</span> 門市付款：{{order.paymentcode}}
                                    </div>
                                    <div class="c-pay-img" v-else-if="order.payment == 'cridit'">
                                        <img src="../../home/assets/cridit.png" alt="">
                                    </div>
                                    <div class="c-pay-img" v-else-if="order.payment == 'line'">
                                        <img src="../../home/assets/line.png" alt="">
                                    </div>
                                    <div class="c-pay-img" v-else-if="order.payment == 'jco'">
                                        <img src="../../home/assets/jco.png" alt="">
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="c-orderlist-info-title">運單編號</div>
                            <div class="c-orderlist-info-content">{{order.delivercode}}</div>
                        </li>
                    </ul>
                </div>
                <div class="c-orderlist-btn">
                    <div class="c-orderlist-btn-group g-row" v-if="order.btngroup == '1'">
                        <div class="g-col-4 g-btn g-btn-s c-btn-gray-mainline">重新付款</div>
                        <div class="g-col-4 g-btn g-btn-s c-btn-gray-mainline">變更付款方式</div>
                        <div class="g-col-4 g-btn g-btn-s c-btn-gray-mainline" @click="cancel = true">取消訂單</div>
                    </div>
                    <div class="c-orderlist-btn-group g-row" v-else-if="order.btngroup == '2'">
                        <div class="g-col-12 g-btn g-btn-s c-btn-gray-mainline" @click="cancel = true">取消訂單</div>
                    </div>
                    <div class="c-orderlist-btn-group g-row" v-else-if="order.btngroup == '3'">
                        <div class="g-col-12 g-btn g-btn-s c-btn-gray-mainline">查詢物流</div>
                    </div>
                    <div class="c-orderlist-btn-group g-row" v-else-if="order.btngroup == '4'">
                        <div class="g-col-6 g-btn g-btn-s g-btn-main" @click="sendback = true">申請退貨/退款</div>
                        <div class="g-col-6 g-btn g-btn-s c-btn-gray-mainline">再買一次</div>
                    </div>
                    <div class="c-orderlist-btn-group g-row" v-else-if="order.btngroup == '5'">
                        <div class="g-col-12 g-btn g-btn-s c-btn-gray-mainline">再買一次</div>
                    </div>
                    <div class="c-orderlist-btn-group g-row" v-else-if="order.btngroup == '6'">
                        <div class="g-col-6 g-btn g-btn-s c-btn-gray-mainline" @click="nosend = true">取消退貨</div>
                        <div class="g-col-6 g-btn g-btn-s c-btn-gray-mainline">再買一次</div>
                    </div>
                    <template v-else></template>

                </div>
            </div>

            <div class="c-finish-track">
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

            <CartBottom :total="false" />
        </div>

    </div>

    <ModalRegular :modaltype="'mini'" v-show="cancel" @close="cancel = false" :contentstyle="'top-line'">
        <template #header>
            <h3 class="g-vertical-title">取消原因</h3>
        </template>
        <template #content>
            <FormSelect class="g-col-12" :type="'normal'" :select="selectdeliver" :text="'商品問題'" />
            <FormSelect class="g-col-12" :type="'normal'" :select="selectdeliver" :text="'品質不好(質感/性能...)'" />
        </template>
        <template #footer>
            <div class="g-modal-cta g-d-wrap g-center">
                <div class="g-col-12">
                    <div class="g-btn g-btn-s g-btn-main-line " @click="add = false">
                        確定送出
                    </div>
                </div>
            </div>
        </template>
    </ModalRegular>

    <ModalRegular :modaltype="'mini'" v-show="sendback" @close="sendback = false" :contentstyle="'top-line'">
        <template #header>
            <h3 class="g-vertical-title">退貨/退款原因</h3>
        </template>
        <template #content>
            <div class="c-sendback-product">
                <div class="g-form-item c-sendback-product-item">
                    <label class="c-sendback-product-inner">
                        <div class="c-sendback-product-img">
                            <img src="../../global/assets/chicken.png" alt="">
                        </div>
                        <div class="c-sendback-product-text">
                            <p>日式碳烤/普羅旺斯/泰式檸檬/川味椒麻雞小腿</p>
                            <span>規格： 川味椒麻*4</span>
                        </div>
                        <input type="checkbox" id="sendback" name="sendback" value="">
                    </label>
                </div>
                <div class="g-form-item c-sendback-product-item">
                    <label class="c-sendback-product-inner">
                        <div class="c-sendback-product-img">
                            <img src="../../global/assets/chicken.png" alt="">
                        </div>
                        <div class="c-sendback-product-text">
                            <p>日式碳烤/普羅旺斯/泰式檸檬/川味椒麻雞小腿</p>
                            <span>規格： 川味椒麻*4</span>
                        </div>
                        <input type="checkbox" id="sendback" name="sendback" value="">
                    </label>
                </div>
            </div>
            <FormSelect class="g-col-12" :type="'normal'" :select="selectdeliver" :text="'商品問題'" />
            <FormSelect class="g-col-12" :type="'normal'" :select="selectdeliver" :text="'品質不好(質感/性能...)'" />
            <p class="c-sendback-text">請上傳您收到的包裹/商品照片，或是與賣家的聊聊紀錄，
                並確認照片為清晰可辨識，以利蝦皮審核。
            </p>
            <div class="g-row">
                <div class="g-input-file-custom g-col-3">
                    <input type="file">
                    <div class="g-input-file-dash">
                        <span class="material-icons">add</span>
                        <p>1/4</p>
                        <!-- 圖片顯示區域，叉叉已經設定好 -->
                        <!-- <div class="g-file-img-preview">
                                <span class="material-icons-outlined">close</span>
                            </div> -->
                    </div>

                </div>
                <div class="g-input-file-custom g-col-3">
                    <input type="file">
                    <div class="g-input-file-dash">
                        <span class="material-icons">add</span>
                        <p>2/4</p>
                    </div>
                </div>
                <div class="g-input-file-custom g-col-3">
                    <input type="file">
                    <div class="g-input-file-dash">
                        <span class="material-icons">add</span>
                        <p>3/4</p>
                    </div>
                </div>
                <div class="g-input-file-custom g-col-3">
                    <input type="file">
                    <div class="g-input-file-dash">
                        <span class="material-icons">add</span>
                        <p>4/4</p>
                    </div>
                </div>
            </div>


        </template>
        <template #footer>
            <div class="g-modal-cta g-d-wrap g-center">
                <div class="g-col-12">
                    <div class="g-btn g-btn-s g-btn-main-line " @click="sendback = false">
                        確定送出
                    </div>
                </div>
            </div>
        </template>
    </ModalRegular>

    <ModalRegular :modaltype="'mini'" v-show="nosend" @close="nosend = false" :contentstyle="'top-line'">
        <template #header>
            <h3 class="g-vertical-title">選擇取消商品</h3>
        </template>
        <template #content>
            <div class="c-sendback-product">
                <div class="g-form-item c-sendback-product-item">
                    <label class="c-sendback-product-inner">
                        <div class="c-sendback-product-img">
                            <img src="../../global/assets/chicken.png" alt="">
                        </div>
                        <div class="c-sendback-product-text">
                            <p>日式碳烤/普羅旺斯/泰式檸檬/川味椒麻雞小腿</p>
                            <span>規格： 川味椒麻*4</span>
                        </div>
                        <input type="checkbox" id="sendback" name="sendback" value="">
                    </label>
                </div>
                <div class="g-form-item c-sendback-product-item">
                    <label class="c-sendback-product-inner">
                        <div class="c-sendback-product-img">
                            <img src="../../global/assets/chicken.png" alt="">
                        </div>
                        <div class="c-sendback-product-text">
                            <p>日式碳烤/普羅旺斯/泰式檸檬/川味椒麻雞小腿</p>
                            <span>規格： 川味椒麻*4</span>
                        </div>
                        <input type="checkbox" id="sendback" name="sendback" value="">
                    </label>
                </div>
            </div>
            
        </template>
        <template #footer>
            <div class="g-modal-cta g-d-wrap g-center">
                <div class="g-col-6">
                    <div class="g-btn g-btn-s g-btn-main-line " @click="sendback = false">
                        取消
                    </div>
                </div>
                <div class="g-col-6">
                    <div class="g-btn g-btn-s g-btn-main" @click="sendback = false">
                        取消退貨
                    </div>
                </div>
            </div>
        </template>
    </ModalRegular>
</template>


<script>
    import CartBottom from '../../home/components/CartBottom.vue'
    import ProcessStep from '../../global/components/process/ProcessStep.vue'
    import Consumption from '../../home/components/Consumption.vue'
    import OrderPage from '../../global/components/product/OrderPage.vue'
    import ModalRegular from '../../global/components/modal/ModalRegular.vue'
    import FormSelect from '../../global/components/form/select.vue'

    export default {
        name: 'CheckOrder',
        props: {
            'ordersection': {
                type: Object,
                require: false
            },
        },
        components: {
            CartBottom,
            ProcessStep,
            Consumption,
            OrderPage,
            ModalRegular,
            FormSelect
        },
        data() {
            return {
                cancel: false,
                sendback: false,
                nosend: false,
                track: [{
                        text: '選購清單',
                        date: '2022.11.15',
                        time: '20:20:20',
                        done: true,
                        
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
                            open: false,

                        }, ]
                    },

                ],

            }
        },
        methods: {}

    }
</script>

<style lang="scss">
</style>