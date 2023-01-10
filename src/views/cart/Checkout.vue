<template>
    <Header :marquee="false"></Header>
    <CategoryMenu :style="'herizon'" />
    <main class="g-main-layout">
        <div class="g-container">
            <div class="g-breadcrumb">
                <a href="#">首頁</a> > <a href="#">購物車</a> > <a href="#" class="current">選購清單</a>
            </div>
            <div class="c-list-title">
                <h2>結帳</h2>
            </div>
            <ProcessStep :type="'basic'" :active="'3'" />
            <DeliverChoice :type="'store'" />

            <div class="c-payment">
                <div class="c-payment-col c-payment-option">
                    <p class="c-payment-title">付款方式</p>
                    <div class="c-payment-btn">
                        <div class="g-btn g-btn-s g-col-2 g-col-sm-6"
                            :class="{'g-btn-main' : payonline == true, 'g-btn-main-line' : payonline == false}"
                            @click="payonline = true">
                            <span class="material-icons" v-if="payonline == true">check_circle_outline</span>
                            我要線上結帳
                        </div>
                        <div class="g-btn g-btn-s g-col-2 g-col-sm-6"
                            :class="{'g-btn-main' : payonline == false, 'g-btn-main-line' : payonline == true}"
                            @click="payonline = false">
                            <span class="material-icons" v-if="payonline == false">check_circle_outline</span>
                            我要去美廉社結帳
                        </div>
                    </div>
                    <div class="c-payment-radio" v-if="payonline == true">
                        <FormInput :Inputtype="'radio'" :radioId="'option'" :status="'error'" :type="'check'"
                            :img="require('../../home/assets/cridit.png')" :style="'check'" :clicked="true"
                            @click="paymothods = '1'" />
                        <FormInput :Inputtype="'radio'" :radioId="'option'" :type="'check'"
                            :img="require('../../home/assets/line.png')" :style="'check'" @click="paymothods = '2'" />
                        <FormInput :Inputtype="'radio'" :radioId="'option'" :type="'check'"
                            :img="require('../../home/assets/jco.png')" :style="'check'" @click="paymothods = '3'" />
                    </div>
                    <template v-else></template>
                    <div class="c-payment-form" v-if="payonline == true && paymothods == '1'">
                        <div class="c-payment-form-inner">
                            <div class="g-row">
                                <form class="g-col-6 g-col-sm-12">
                                    <p>卡號</p>
                                    <div class="c-payment-cridit g-d-flex">
                                        <FormInput :type="'normal'" :status="'checked'" :text="'0000'" />&ensp;-&ensp;
                                        <FormInput :type="'normal'" :status="'checked'" :text="'0000'" />&ensp;-&ensp;
                                        <FormInput :type="'normal'" :status="'checked'" :text="'0000'" />&ensp;-&ensp;
                                        <FormInput :type="'normal'" :status="'checked'" :text="'0000'" />
                                    </div>
                                </form>
                                <form class="g-col-2 g-col-sm-6">
                                    <p>卡片到期日</p>
                                    <div class="c-payment-cridit g-d-flex">
                                        <FormInput :type="'normal'" :status="'checked'" :text="'MM / YY'" />
                                    </div>
                                </form>
                                <form class="g-col-3 g-col-sm-6 g-d-flex">
                                    <div>
                                        <p>安全驗證碼</p>
                                        <div class="c-payment-cridit g-d-flex">
                                            <FormInput :type="'normal'" :status="'checked'" :text="'卡片末三碼'" />
                                        </div>
                                    </div>

                                    <div class="c-payment-cridit-img">
                                        <img src="../../home/assets/card.png" alt="">
                                    </div>
                                </form>
                            </div>
                            <FormInput :Inputtype="'checkbox'" :type="'check'"
                                :text="'我同意本次付款資訊，並設定為快速結帳。(可節省您下次結帳時間，且保有修改、刪除之權利。)'" :style="'check'" />
                        </div>
                    </div>
                    <template v-else></template>
                </div>
                <div class="c-payment-col c-payment-bill">
                    <p class="c-payment-title">電子發票載具及類型</p>
                    <div class="c-payment-radio">
                        <FormInput :Inputtype="'radio'" :radioId="'bill'" :status="'error'" :type="'check'"
                            :text="'手機載具'" :style="'check'" :clicked="true" @click="bills = '1'" />
                        <FormInput :Inputtype="'radio'" :radioId="'bill'" :status="'error'" :type="'check'"
                            :text="'會員載具'" :style="'check'" :clicked="true" @click="bills = '2'" />
                        <FormInput :Inputtype="'radio'" :radioId="'bill'" :status="'error'" :type="'check'"
                            :text="'公司發票'" :style="'check'" :clicked="true" @click="bills = '3'" />
                        <FormInput :Inputtype="'radio'" :radioId="'bill'" :status="'error'" :type="'check'"
                            :text="'捐贈發票'" :style="'check'" :clicked="true" @click="bills = '4'" />
                    </div>

                    <div class="c-payment-form" v-if="bills == '1'">
                        <FormInput :Inputtype="'checkbox'" :type="'check'"
                            :text="'我同意本次付款資訊，並設定為快速結帳。(可節省您下次結帳時間，且保有修改、刪除之權利。)'" :style="'check'" />
                        <form class="c-payment-form-inner">
                            <p>手機條碼載具</p>
                            <FormInput :type="'normal'" :status="'checked'" :text="'/1234567 (共8碼)'" />
                        </form>
                    </div>
                    <div class="c-payment-form" v-else-if="bills == '3'">
                        <FormInput :Inputtype="'checkbox'" :type="'check'"
                            :text="'我同意本次付款資訊，並設定為快速結帳。(可節省您下次結帳時間，且保有修改、刪除之權利。)'" :style="'check'" />
                        <form class="c-payment-form-inner">
                            <p>統一編號</p>
                            <FormInput :type="'normal'" :status="'checked'" :text="'請輸入統一編號'" />
                        </form>
                    </div>
                    <div class="c-payment-form" v-else-if="bills == '4'">
                        <FormInput :Inputtype="'checkbox'" :type="'check'"
                            :text="'我同意本次付款資訊，並設定為快速結帳。(可節省您下次結帳時間，且保有修改、刪除之權利。)'" :style="'check'" />
                        <form class="c-payment-form-inner">
                            <p>受贈單位代碼</p>
                            <FormInput :type="'normal'" :status="'checked'" :text="'請輸入捐贈碼'" />
                        </form>
                    </div>
                    <template v-else></template>
                </div>
                <div class="c-payment-col c-payment-help">
                    <p class="c-payment-title">如遇缺貨請幫我</p>
                    <div class="c-payment-radio">
                        <FormInput class="g-col-sm-6" :Inputtype="'radio'" :radioId="'help'" :status="'error'" :type="'check'"
                            :text="'專人聯繫確認'" :style="'check'" :clicked="true" />
                        <FormInput class="g-col-sm-6" :Inputtype="'radio'" :radioId="'help'" :status="'error'" :type="'check'"
                            :text="'等待商品'" :style="'check'" :clicked="true" />
                        <FormInput class="g-col-sm-6" :Inputtype="'radio'" :radioId="'help'" :status="'error'" :type="'check'" :text="'退款'"
                            :style="'check'" :clicked="true" />
                        <FormInput class="g-col-sm-12" :Inputtype="'radio'" :radioId="'help'" :status="'error'" :type="'check'" :text="'其他'"
                            :write="true" :style="'check'" :clicked="true" />
                    </div>
                    <div class="c-payment-help-bottom">
                        <FormInput :Inputtype="'checkbox'" :type="'check'" :text="'我同意遵守'" :style="'check'" />
                        <a href="#" class="g-underline g-s-link g-main-link"><span
                                class="material-icons">help_outline</span>訂購服務條款</a>
                    </div>

                </div>
            </div>


            <CartBottom :btngroup="btngroup" :btnshow="true" />



        </div>
    </main>


    <Footer></Footer>
</template>


<script>
    import Header from '../../global/components/header.vue'
    import Footer from '../../global/components/footer.vue'
    import CategoryMenu from '../../global/components/category/CategoryMenu.vue'
    import FormInput from '../../global/components/form/input.vue'
    import ProcessStep from '../../global/components/process/ProcessStep.vue'
    import DeliverChoice from '../../home/components/DeliverChoice.vue'
    import CartBottom from '../../home/components/CartBottom.vue'

    export default {
        name: 'ConfirmProduct',
        components: {
            Header,
            Footer,
            CategoryMenu,
            FormInput,
            ProcessStep,
            DeliverChoice,
            CartBottom
        },
        data() {
            return {
                payonline: true,
                paymothods: '1',
                bills: '1',
                btngroup:[{
                    grid:'g-col-2 g-col-sm-4',
                    style: 'main-line',
                    text:'上一步',
                    link:'/confirmproduct'
                },
                {
                    grid:'g-col-3 g-col-sm-8',
                    style: 'main',
                    text:'確認付款',
                    link:'/finishorder'
                }]

            }
        },
        methods: {
            // PayOnline() {
            //     this.payonline = true,
            //     this.payshop = false
            // },
            // PayShop() {
            //     this.payonline = false,
            //     this.payshop = true
            // },
        }

    }
</script>

<style lang="scss">
</style>