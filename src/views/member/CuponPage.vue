<template>
    <Header :marquee="false" :mobileshow="true"></Header>
    <CategoryMenu :style="'herizon'" />
    <div class="g-wrapper g-container no-padding-mobile">
        <div class="g-breadcrumb">
            <a href="#">首頁</a> > <a href="#">酒類商品123</a> > <a href="#" class="current">威士忌</a>
        </div>
        <main class="g-main-layout m-main m-sub-page">
            <Membermenu />
            <div class="m-content">
                <div class="m-block">
                    <div class="m-block-title m-block-title-mobile">
                        <router-link to="/member">
                                <span class="m-content-close material-icons">chevron_left</span>
                            </router-link>
                        我的優惠券
                    </div>
                    <div class="m-block-content">
                        <div class="m-block-radio">
                            <div class="m-block-radio-title">
                                <div class="m-block-radio-title-img">
                                    <img src="../../home/assets/member-ticket.png" alt="">
                                </div>
                                <span class="m-block-radio-title-text">我的優惠券：</span>
                                <FormInput :Inputtype="'radio'" :radioId="'cupon'" :type="'check'" :text="'全部'"
                                    :style="'check'" :clicked="true" />
                                <FormInput :Inputtype="'radio'" :radioId="'cupon'" :type="'check'" :text="'可使用'"
                                    :style="'check'" :clicked="false" />
                                <FormInput :Inputtype="'radio'" :radioId="'cupon'" :type="'check'" :text="'已使用'"
                                    :style="'check'" :clicked="false" />
                                <FormInput :Inputtype="'radio'" :radioId="'cupon'" :type="'check'" :text="'已逾期'"
                                    :style="'check'" :clicked="false" />
                            </div>

                        </div>
                        <div class="m-cupon g-row">
                            <div class="m-cupon-col g-col-sm-12 g-col-md-6">
                                <div class="m-cupon-item is-main">
                                    <div class="m-cupon-item-left">
                                        <div>
                                            <h4>全站折價券</h4>
                                            <div class="m-cupon-number">1000 <span>元</span></div>
                                        </div>

                                        <div class="g-btn g-btn-ss g-btn-round m-btn-white">
                                            可使用
                                        </div>
                                    </div>
                                    <div class="m-cupon-item-right">
                                        <ul>
                                            <li>優惠券名稱：家電商品優惠券</li>
                                            <li>適用金額˙：單筆消費滿699可折抵</li>
                                            <li>適用類別：家電商品適用</li>
                                            <li>適用商品：電風扇</li>
                                        </ul>
                                        <p>優惠券號：aabbcc1234567890</p>
                                        <p>使用效期：2022/06/14 00:00 - 2022/06/21 23:59</p>
                                        <div class="g-btn g-btn-ss g-btn-round m-btn-color-line" @click="change = true">
                                            轉贈
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="m-cupon-col g-col-sm-12 g-col-md-6">
                                <div class="m-cupon-item is-blue">
                                    <div class="m-cupon-item-left">
                                        <div>
                                            <h4>全站折價券</h4>
                                            <div class="m-cupon-number">1000 <span>元</span></div>
                                        </div>

                                        <div class="g-btn g-btn-ss g-btn-round m-btn-white">
                                            可使用
                                        </div>
                                    </div>
                                    <div class="m-cupon-item-right">
                                        <ul>
                                            <li>優惠券名稱：家電商品優惠券</li>
                                            <li>適用金額˙：單筆消費滿699可折抵</li>
                                            <li>適用類別：家電商品適用</li>
                                            <li>適用商品：電風扇</li>
                                        </ul>
                                        <p>優惠券號：aabbcc1234567890</p>
                                        <p>使用效期：2022/06/14 00:00 - 2022/06/21 23:59</p>
                                        <div class="g-btn g-btn-ss g-btn-round m-btn-color-line" @click="change = true">
                                            轉贈
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="m-cupon-col g-col-sm-12 g-col-md-6">
                                <div class="m-cupon-item is-gray">
                                    <div class="m-cupon-item-left">
                                        <div>
                                            <h4>全站折價券</h4>
                                            <div class="m-cupon-number">1000 <span>元</span></div>
                                        </div>

                                        <div class="g-btn g-btn-ss g-btn-round m-btn-white">
                                            已逾期
                                        </div>
                                    </div>
                                    <div class="m-cupon-item-right">
                                        <ul>
                                            <li>優惠券名稱：家電商品優惠券</li>
                                            <li>適用金額˙：單筆消費滿699可折抵</li>
                                            <li>適用類別：家電商品適用</li>
                                            <li>適用商品：電風扇</li>
                                        </ul>
                                        <p>優惠券號：aabbcc1234567890</p>
                                        <p>使用效期：2022/06/14 00:00 - 2022/06/21 23:59</p>

                                    </div>
                                </div>
                            </div>
                            <div class="m-cupon-col g-col-sm-12 g-col-md-6">
                                <div class="m-cupon-item is-green">
                                    <div class="m-cupon-item-left">
                                        <div>
                                            <h4>全站折價券</h4>
                                            <div class="m-cupon-number">1000 <span>元</span></div>
                                        </div>

                                        <div class="g-btn g-btn-ss g-btn-round m-btn-white">
                                            可使用
                                        </div>
                                    </div>
                                    <div class="m-cupon-item-right">
                                        <ul>
                                            <li>優惠券名稱：家電商品優惠券</li>
                                            <li>適用金額˙：單筆消費滿699可折抵</li>
                                            <li>適用類別：家電商品適用</li>
                                            <li>適用商品：電風扇</li>
                                        </ul>
                                        <p>優惠券號：aabbcc1234567890</p>
                                        <p>使用效期：2022/06/14 00:00 - 2022/06/21 23:59</p>
                                        <div class="g-btn g-btn-ss g-btn-round m-btn-color-line" @click="change = true">
                                            轉贈
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>


                    <Pagination :pageposition="'center'" />
                </div>

                

            </div>


            <ScrollTop />
        </main>
        

    </div>
    <Footer></Footer>



    <ModalRegular :modaltype="'mini'" v-show="change" @close="change = false" :contentstyle="'top-line'">
        <template #header>
            <h3 class="g-vertical-title">優惠券轉贈</h3>
        </template>
        <template #content>
            <p class="m-cupon-modaltext">優惠券名稱：100元家電商品折價券</p>
            <p class="m-cupon-modaltext">優惠券面額：$100</p>
            <FormInput :type="'normal'" :status="'checked'" :text="'請輸入轉入人手機'" />
            <div class="m-cupon-card">
                <p>選擇卡號</p>
                <div class="g-row">
                    <FormInput class="g-col-6" :Inputtype="'radio'" :radioId="'card'" :type="'check'"
                        :text="'32012005220702'" :style="'check'" :clicked="true" />
                    <FormInput class="g-col-6" :Inputtype="'radio'" :radioId="'card'" :type="'check'"
                        :text="'32012005339785'" :style="'check'" :clicked="false" />
                </div>
                <div class="m-cupon-card-error">
                    <span class="material-icons">error</span> 此帳號尚未啟用，無法轉贈
                </div>
            </div>
        </template>
        <template #footer>
            <div class="g-modal-cta g-d-wrap g-center g-row">
                <div class="g-col-6">
                    <div class="g-btn g-btn-s g-btn-main-line" @click="add = false">
                        取消
                    </div>
                </div>
                <div class="g-col-6">
                    <div class="g-btn g-btn-s g-btn-main" @click="add = false">
                        確定
                    </div>
                </div>


            </div>
        </template>
    </ModalRegular>
</template>


<script>
    import Header from '../../global/components/header.vue'
    import Footer from '../../global/components/footer.vue'
    import ScrollTop from '../../global/components/scroll/scrollTop.vue'
    import Membermenu from '../../home/components/member/Membermenu.vue'
    import ModalRegular from '../../global/components/modal/ModalRegular.vue'
    import FormInput from '../../global/components/form/input.vue'
    import Pagination from '../../global/components/pagination/Pagination.vue'
    export default {
        name: 'CuponPage',
        components: {
            Header,
            Footer,
            ScrollTop,
            Membermenu,
            FormInput,
            ModalRegular,
            Pagination
        },
        data() {
            return {
                change: false
            }
        },
    }
</script>

<style lang="scss">
</style>