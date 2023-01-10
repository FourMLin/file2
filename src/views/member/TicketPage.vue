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
                            電子票券查詢
                    </div>
                    <div class="m-block-content">
                        <div class="m-block-radio">
                            <div class="m-block-radio-title">
                                <div class="m-block-radio-title-img">
                                    <img src="../../home/assets/member-ticket2.png" alt="">
                                </div>
                                <span>電子票券類別：</span>
                                <div class="m-data-show">
                                    <FormSelect class="g-col-12" :type="'normal'" :select="ticket" :text="'商品禮券'" />
                                </div>

                            </div>
                            <FormInput :type="'btn'" :text="'請輸入商品名稱搜尋'" :status="''" :tip="''" />
                        </div>

                    </div>
                    <div class="m-block-content-yellow">
                        <FormInput :Inputtype="'radio'" :radioId="'cupon'" :type="'check'" :text="'全部'" :style="'check'"
                            :clicked="false" />
                        <FormInput :Inputtype="'radio'" :radioId="'cupon'" :type="'check'" :text="'未使用'"
                            :style="'check'" :clicked="true" />
                        <FormInput :Inputtype="'radio'" :radioId="'cupon'" :type="'check'" :text="'已使用'"
                            :style="'check'" :clicked="false" />
                        <div></div>
                    </div>
                    <div class="m-bill-wrap">
                        <div class="m-bill">
                            <div class="m-bill-date">
                                <div class="m-bill-date-img">
                                    <img src="../../home/assets/123.png" alt="">
                                </div>
                            </div>
                            <div class="m-bill-text">
                                <div class="m-bill-count">
                                    <span class="material-icons">local_activity</span> <span>1</span> 張
                                </div>
                                <div class="m-bill-info">
                                    <div class="m-bill-info-name">[限時6%加碼]【美廉社】1000元即享券(一次抵用券)</div>
                                    <div class="m-bill-info-text">
                                        <div class="m-bill-info-text__number is-bigger">$1,970 <del>$2,000</del></div>
                                        <div class="m-bill-info-text__kind">優惠時間：2022-07-12 14:20</div>
                                    </div>
                                </div>
                                <div class="m-bill-btn">
                                    <div class="m-bill-btn-wrap">
                                        <div class="g-btn g-btn-regular g-btn-gray-line" @click="use = true">
                                            使用票券
                                        </div>
                                    </div>

                                    <div class="m-bill-btn-tip">
                                        <a href="#" class="g-blue-link">使用說明</a>
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


    <ModalRegular :modaltype="'mini'" v-show="use" @close="use = false" :contentstyle="'top-line'">
        <template #header>
            <h3 class="g-vertical-title">使用票券</h3>
        </template>
        <template #content>
            <p class="m-cupon-modaltext">[限時6%加碼]【美廉社】1000元即享券(一次抵用券)</p>
            <div class="m-cupon-counter">
                <p>使用數量：</p>
                <FormCounter />
            </div>

        </template>
        <template #footer>
            <div class="g-modal-cta g-d-wrap g-center g-row">
                <div class="g-col-6">
                    <div class="g-btn g-btn-s g-btn-main-line" @click="use = false">
                        取消
                    </div>
                </div>
                <div class="g-col-6">
                    <div class="g-btn g-btn-s g-btn-main-line" @click="TwoModal()">
                        確認
                    </div>
                </div>


            </div>
        </template>
    </ModalRegular>

    <ModalRegular :modaltype="'mini'" v-show="ticket" @close="ticket = false"  :paddingstyle="'title-no-padding'">
        <template #header>
            <div class="m-ticket-top">
                <div class="m-ticket-hat">
                    <div class="m-ticket-hat-logo">
                        <img src="../../home/assets/little-white-logo.png" alt="">
                    </div>
                </div>
                
                <div class="m-ticket-barcode-part">
                    <div class="m-ticket-count">
                    第 1/6 張
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
        <template #content>
            <div class="m-ticket-modal">
                <div class="m-ticket-title">商品內容：</div>
                <div class="m-ticket-price">500元即享券(一次抵用券)</div>
                <div class="m-ticket-title">詳細內容：</div>
                <ul class="m-ticket-list">
                    <li>
                        <p class="m-ticket-info-title">剩餘天數</p>
                        <div class="m-ticket-info">剩餘112天</div>
                    </li>
                    <li>
                        <p class="m-ticket-info-title">使用日期</p>
                        <div class="m-ticket-info">2022-10-01</div>
                    </li>
                    <li>
                        <p class="m-ticket-info-title">訂單編號</p>
                        <div class="m-ticket-info">2022041984312250</div>
                    </li>
                    <li>
                        <p class="m-ticket-info-title">票券供應商</p>
                        <div class="m-ticket-info">三商家購股份有限公司</div>
                    </li>
                    <li>
                        <p class="m-ticket-info-title">門市資訊</p>
                        <div class="m-ticket-info">本券可於全台美廉社各分店量販賣場使用。</div>
                    </li>
                </ul>
                <div class="m-ticket-title">使用說明：</div>
                <ol class="m-ticket-list">
                    <li>1.使用本券請直接出示本券掃碼兌換(請將螢幕亮度調到最大)。</li>
                    <li>2.若無法成功掃碼,建議將手機螢幕旋轉至橫向,並可將序放大若仍無法成功掃碼,請出示本券條碼序,由門市人員輸入兌換。</li>
                    <li>3.每筆交易,僅限使用本券一次。</li>
                    <li>4.本券無法兌換現金或找零,請一次抵用完畢,不可重複使用。</li>
                    <li>5.本券為不記名,任何人皆可使用本券,請自行妥善保管,如他人盜用,不再補發或退貨。</li>
                </ol>
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
    import FormCounter from '../../global/components/form/counter.vue'

    export default {
        name: 'TicketPage',
        components: {
            Header,
            Footer,
            ScrollTop,
            Membermenu,
            FormSelect,
            FormInput,
            ModalRegular,
            FormCounter
        },
        data() {
            return {
                use: false,
                ticket: false
            }
        },
        methods: {
            TwoModal() {
                this.use = false,
                    this.ticket = true

            },

        },
    }
</script>

<style lang="scss">
</style>