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
                    <div class="m-block-title">會員資料</div>
                    <div class="m-member-data">
                        <ul>
                            <li>
                                <div class="m-data-title">
                                    <p>姓名</p>
                                </div>
                                <div class="m-data-content">
                                    <p>吳美蓮</p>
                                </div>
                            </li>
                            <li>
                                <div class="m-data-title">
                                    <p>性別</p>
                                </div>
                                <div class="m-data-content">
                                    <p>女</p>
                                </div>
                            </li>
                            <li>
                                <div class="m-data-title">
                                    <p>生日</p>
                                </div>
                                <div class="m-data-content">
                                    <p>1990/01/01</p>
                                </div>
                            </li>
                            <li>
                                <div class="m-data-title">
                                    <p>會員卡號</p>
                                </div>
                                <div class="m-data-content">
                                    <p>32012005220702</p>
                                </div>
                            </li>
                            <li>
                                <div class="m-data-title">
                                    <p>密碼</p>
                                </div>
                                <div class="m-data-content">
                                    <FormInput :type="'normal'" :Inputtype="'password'" :valueinner="'****'" />
                                </div>
                            </li>
                            <li>
                                <div class="m-data-title">
                                    <p>手機(訂購人聯絡電話)</p>
                                </div>
                                <div class="m-data-content">
                                    <FormInput :type="'normal'" :Inputtype="'text'" :valueinner="'0955001002'" />
                                </div>
                            </li>
                            <li>
                                <div class="m-data-title">
                                    <p>E-mail</p>
                                </div>
                                <div class="m-data-content">
                                    <FormInput :type="'normal'" :Inputtype="'text'"
                                        :valueinner="'simplemartretailgmail.com'" />
                                </div>
                            </li>
                            <li>
                                <div class="m-data-title">
                                    <p>聯絡地址(商品宅配地址) <span>*地址請勿填寫郵政信箱，可能導致商品無法順利送達</span></p>

                                </div>
                                <div class="m-data-content">
                                    <FormInput :type="'normal'" :Inputtype="'text'"
                                        :valueinner="'10491 台北市中山區民權東路三段4號地下一樓'" />
                                </div>
                            </li>
                            <li>
                                <div class="m-data-title">
                                    <p>手機載具</p>
                                </div>
                                <div class="m-data-content">
                                    <FormInput :type="'normal'" :Inputtype="'text'" :valueinner="'/50L0J8R'" />
                                </div>
                            </li>
                            <li>
                                <div class="m-data-title">
                                    <p>公司用發票(統一編號)</p>
                                </div>
                                <div class="m-data-content">
                                    <FormInput :type="'normal'" :Inputtype="'text'" :valueinner="'50755354'" />
                                </div>
                            </li>
                            <li>
                                <div class="m-data-title">
                                    <p>發票捐贈(捐贈單位)</p>
                                </div>
                                <div class="m-data-content">
                                    <FormInput :type="'normal'" :Inputtype="'text'" :valueinner="'9118595'" />
                                </div>
                            </li>
                        </ul>

                        <div class="m-block-content g-d-flex" style="justify-content: flex-end;"
                            @click="dataedit = true">
                            <div class="g-col-3 g-btn g-btn-regular g-btn-main">
                                確認
                            </div>
                        </div>

                    </div>
                </div>

            </div>


            <ScrollTop />
        </main>

    </div>
    <Footer></Footer>

    <ModalRegular :modaltype="'mini'" v-show="dataedit" @close="dataedit = false" :contentstyle="'top-line'">
        <template #header>
            <h3 class="g-vertical-title">身分驗證</h3>
            <p class="g-modal-title-tip is-red">為確保個資安全，請進行身分驗證</p>
        </template>
        <template #content>
            <div class="m-modal-card-error">
                <span class="material-icons">error</span> 請選擇驗證方式
            </div>
            <div class="g-form-item">
                <label class="g-radiobtn g-radiobtn-block">
                    <span>pan0955011901@gmail.com</span>
                    <input type="radio" class="is-check" id="id" name="id" value="">
                </label>
                <label class="g-radiobtn g-radiobtn-block">
                    <span>0955011901</span>
                    <input type="radio" class="is-check" id="id" name="id" value="">
                </label>
            </div>
            <div class="g-modal-warning-tip">
                <p>※ 注意</p>
                <ul>
                    <li>如設定過拒收企業簡訊，建議向電信業者反應</li>
                    <li>若手機號碼變更，請依變更手機程序說明</li>
                </ul>
            </div>
        </template>
        <template #footer>
            <div class="g-modal-cta g-d-wrap g-center g-row">
                <div class="g-col-12">
                    <div class="g-btn g-btn-s g-btn-main-line" @click="TwoModal()">
                        確定
                    </div>
                </div>


            </div>
        </template>
    </ModalRegular>
    <ModalRegular :modaltype="'mini'" v-show="dataeditverify" @close="dataeditverify = false"
        :contentstyle="'top-line'">
        <template #header>
            <h3 class="g-vertical-title">請輸入驗證碼</h3>
        </template>
        <template #content>
            <div class="m-cupon-card">
                <FormInput :type="'innerwords'" :status="''" :text="'驗證碼'" :tip="''" :errorvalue="'驗證碼不正確'"
                    :Btntext="'獲取手機驗證碼'" :innerBtn="true" />
                <div class="m-cupon-card-error">
                    <span class="material-icons">error</span> 驗證碼輸入錯誤
                </div>

            </div>
        </template>
        <template #footer>
            <div class="g-modal-cta g-d-wrap g-center g-row">
                <div class="g-col-12">
                    <div class="g-btn g-btn-s g-btn-main-line" @click="dataeditverify = false">
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
    import FormInput from '../../global/components/form/input.vue'
    import ModalRegular from '../../global/components/modal/ModalRegular.vue'
    export default {
        name: 'DataPage',
        props: {
            'currentpage': {
                type: Object,
            }
        },
        components: {
            Header,
            Footer,
            ScrollTop,
            Membermenu,
            FormInput,
            ModalRegular
        },
        data() {
            return {
                dataedit: false,
                dataeditverify: false
            }
        },
        methods: {
            NotifyPage: function (component) {
                this.currentComponent = component;
            },
            TwoModal() {
                this.dataeditverify = true,
                    this.dataedit = false

            },
        }
    }
</script>

<style lang="scss">
</style>