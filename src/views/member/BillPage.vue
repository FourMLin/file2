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
                        2022 1月~2月
                    </div>
                    <div class="m-block-content">
                        <div class="m-block-radio">
                            <div class="m-block-radio-title">
                                <div class="m-block-radio-title-img">
                                    <img src="../../home/assets/member-bill.png" alt="">
                                </div>
                                <span>發票期別：</span>
                                <div class="m-data-show">
                                    <FormSelect class="g-col-12" :type="'normal'" :select="areas" :text="'2022年'" />
                                    年
                                    <FormSelect class="g-col-12" :type="'normal'" :select="areas" :text="'05-06月'" />
                                </div>

                            </div>
                            <FormInput :type="'btn'" :text="'請輸入發票號碼或商品名稱'" :status="''" :tip="''" />
                        </div>

                    </div>
                    <div class="m-block-content-yellow">
                        <FormInput :Inputtype="'radio'" :radioId="'cupon'" :type="'check'" :text="'全部'" :style="'check'"
                            :clicked="true" />
                        <FormInput :Inputtype="'radio'" :radioId="'cupon'" :type="'check'" :text="'中獎發票'"
                            :style="'check'" :clicked="false" />
                    </div>
                    <div class="m-bill-wrap">
                        <div class="m-bill m-bill-mobile-block">
                            <div class="m-bill-date">
                                <div class="m-bill-date-img m-bill-mobile">
                             g-btn-s       <img src="../../home/assets/member-bill-bg1.png" alt="">
                                </div>

                            </div>
                            <div class="m-bill-info">
                                <div class="m-bill-info-date">2022/09/19</div>
                                <div class="m-bill-info-name">【空運預購品】美國9.5ROW華盛頓櫻桃，共2盒(1kg±10%/盒)</div>
                                <div class="m-bill-info-text">

                                    <div class="m-bill-info-text__number">BG-34409457</div>
                                    <div class="m-bill-info-text__total">訂購總額：NT$1,221</div>
                                    <div class="m-bill-info-text__kind">（手機載具）</div>
                                </div>
                            </div>
                            <div class="m-bill-btn">
                                <div class="m-bill-btn-wrap">
                                    <div class="g-btn g-btn-s g-btn-gray-line">
                                        訂單連結
                                    </div>
                                    <div class="g-btn g-btn-s g-btn-gray-line">
                                        發票明細
                                    </div>
                                    <div class="g-btn g-btn-s g-btn-gray-line">
                                        折讓單
                                    </div>
                                </div>
                                
                            </div>
                        </div>

                        <div class="m-bill m-bill-mobile-block">
                            <div class="m-bill-date">
                                <div class="m-bill-date-img m-bill-mobile">
                                    <img src="../../home/assets/member-bill-bg1.png" alt="">
                                </div>

                            </div>
                            <div class="m-bill-info">
                                <div class="m-bill-info-date">2022/09/19</div>
                                <div class="m-bill-info-name">【空運預購品】美國9.5ROW華盛頓櫻桃，共2盒(1kg±10%/盒)</div>
                                <div class="m-bill-info-text">

                                    <div class="m-bill-info-text__number">BG-34409457</div>
                                    <div class="m-bill-info-text__total">訂購總額：NT$1,221</div>
                                    <div class="m-bill-info-text__kind">（手機載具）</div>
                                </div>
                            </div>
                            <div class="m-bill-btn">
                                <div class="m-bill-btn-wrap">
                                    <div class="g-btn g-btn-s g-btn-gray-line">
                                        訂單連結
                                    </div>
                                    <div class="g-btn g-btn-s g-btn-gray-line">
                                        發票明細
                                    </div>
                                </div>
                                
                            </div>
                        </div>

                        

                        <div class="m-bill m-bill-checked m-is-print m-bill-mobile-block">
                            <div class="m-bill-date">
                                <div class="m-bill-date-img m-bill-mobile">
                                    <img src="../../home/assets/member-bill-bg2.png" alt="">
                                </div>

                            </div>
                            <div class="m-bill-info">
                                <div class="m-bill-info-date">2022/09/19</div>
                                <div class="m-bill-info-name">【空運預購品】美國9.5ROW華盛頓櫻桃，共2盒(1kg±10%/盒)</div>
                                <div class="m-bill-info-text">

                                    <div class="m-bill-info-text__number">BG-34409457</div>
                                    <div class="m-bill-info-text__total">訂購總額：NT$1,221</div>
                                    <div class="m-bill-info-text__kind">（手機載具）</div>
                                </div>
                            </div>
                            <div class="m-bill-btn">
                                <div class="m-bill-btn-wrap">
                                    <div class="g-btn g-btn-s g-btn-gray-line">
                                        訂單連結
                                    </div>
                                    <div class="g-btn g-btn-s g-btn-gray-line">
                                        發票明細
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="m-bill m-bill-checked m-no-print m-bill-mobile-block">
                            <div class="m-bill-date">
                                <div class="m-bill-date-img m-bill-mobile">
                                    <img src="../../home/assets/member-bill-bg3.png" alt="">
                                </div>

                            </div>
                            <div class="m-bill-info">
                                <div class="m-bill-info-date">2022/09/19</div>
                                <div class="m-bill-info-name">【空運預購品】美國9.5ROW華盛頓櫻桃，共2盒(1kg±10%/盒)</div>
                                <div class="m-bill-info-text">

                                    <div class="m-bill-info-text__number">BG-34409457</div>
                                    <div class="m-bill-info-text__total">訂購總額：NT$1,221</div>
                                    <div class="m-bill-info-text__kind">（手機載具）</div>
                                </div>
                            </div>
                            <div class="m-bill-btn">
                                <div class="m-bill-btn-wrap">
                                    <div class="g-btn g-btn-s g-btn-gray-line">
                                        訂單連結
                                    </div>
                                    <div class="g-btn g-btn-s g-btn-gray-line"  @click="bill = true">
                                        出示條碼
                                    </div>
                                    
                                </div>
                                <div class="m-bill-btn-tip ">
                                    <p>請持條碼至美廉社門市列印</p>
                                </div>
                            </div>
                        </div>
                        <div class="m-bill m-bill-checked m-outdate m-bill-mobile-block">
                            <div class="m-bill-date">
                                <div class="m-bill-date-img m-bill-mobile">
                                    <img src="../../home/assets/member-bill-bg4.png" alt="">
                                </div>

                            </div>
                            <div class="m-bill-info">
                                <div class="m-bill-info-date">2022/09/19</div>
                                <div class="m-bill-info-name">【空運預購品】美國9.5ROW華盛頓櫻桃，共2盒(1kg±10%/盒)</div>
                                <div class="m-bill-info-text">
                                    <div class="m-bill-info-text__number">BG-34409457</div>
                                    <div class="m-bill-info-text__total">訂購總額：NT$1,221</div>
                                    <div class="m-bill-info-text__kind">（手機載具）</div>
                                </div>
                            </div>
                            <div class="m-bill-btn">
                                <div class="m-bill-btn-wrap">
                                    <div class="g-btn g-btn-s g-btn-gray-line">
                                        訂單連結
                                    </div>
                                    <div class="g-btn g-btn-s g-btn-gray-line">
                                        發票明細
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>


            <ScrollTop />
        </main>

    </div>
    <Footer></Footer>

    <ModalRegular :modaltype="'mini'" v-show="bill" @close="bill = false" :paddingstyle="'all-no-padding'">
        <template #header>
            <div class="m-ticket-top">
                <div class="m-ticket-hat">
                    <div class="m-ticket-hat-logo">
                        <img src="../../home/assets/little-white-logo.png" alt="">
                    </div>
                </div>

                <div class="m-ticket-barcode-part">
                    <div class="m-ticket-count">
                        恭喜中獎
                    </div>
                    <div class="m-ticket-brcose">
                        <div class="m-ticket-stroke">
                            <img src="../../home/assets/ticket-stroke.png" alt="">
                        </div>
                        <div class="m-ticket-number">1231234311</div>
                    </div>
                </div>
            </div>

        </template>
        <template #footer>
            <div class="m-ticket-footer">
                請持條碼至美廉社門市列印中獎發票
            </div>
        </template>
    </ModalRegular>

</template>


<script>
    import Header from '../../global/components/header.vue'
    import Footer from '../../global/components/footer.vue'
    import ScrollTop from '../../global/components/scroll/scrollTop.vue'
    import Membermenu from '../../home/components/member/Membermenu.vue'
    import FormSelect from '../../global/components/form/select.vue'
    import FormInput from '../../global/components/form/input.vue'
    import ModalRegular from '../../global/components/modal/ModalRegular.vue'
    export default {
        name: 'CuponPage',
        components: {
            Header,
            Footer,
            ScrollTop,
            Membermenu,
            FormSelect,
            FormInput,
            ModalRegular
        },
        data() {
            return {
                bill: false
            }
        },
    }
</script>

<style lang="scss">
</style>