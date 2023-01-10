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
                    <div class="m-block-title">
                        <router-link to="/member">
                            <span class="m-content-close material-icons">chevron_left</span>
                        </router-link>
                        會員資料
                    </div>
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
                                    <p>****</p>
                                </div>
                            </li>
                            <li>
                                <div class="m-data-title">
                                    <p>手機(訂購人聯絡電話)</p>
                                </div>
                                <div class="m-data-content">
                                    <p>0955001002</p>
                                </div>
                            </li>
                            <li>
                                <div class="m-data-title">
                                    <p>E-mail</p>
                                </div>
                                <div class="m-data-content">
                                    <p>simplemartretail@gmail.com</p>
                                </div>
                            </li>
                            <li>
                                <div class="m-data-title">
                                    <p>聯絡地址(商品宅配地址) <span>*地址請勿填寫郵政信箱，可能導致商品無法順利送達</span></p>

                                </div>
                                <div class="m-data-content">
                                    <p>10491 台北市中山區民權東路三段4號地下一樓</p>
                                </div>
                            </li>
                            <li>
                                <div class="m-data-title">
                                    <p>手機載具</p>
                                </div>
                                <div class="m-data-content">
                                    <p>/50L0J8R</p>
                                </div>
                            </li>
                            <li>
                                <div class="m-data-title">
                                    <p>公司用發票(統一編號)</p>
                                </div>
                                <div class="m-data-content">
                                    <p>50755354</p>
                                </div>
                            </li>
                            <li>
                                <div class="m-data-title">
                                    <p>發票捐贈(捐贈單位)</p>
                                </div>
                                <div class="m-data-content">
                                    <p>9118595</p>
                                </div>
                            </li>

                        </ul>

                        <div class="m-block-content g-d-flex" style="justify-content: flex-end;">
                            <router-link to="/membereditable" class="g-col-3 g-btn g-btn-regular g-btn-main">
                                修改
                            </router-link>
                        </div>

                    </div>
                </div>

            </div>


            <ScrollTop />
        </main>

    </div>
    <Footer></Footer>


</template>


<script>
    import Header from '../../global/components/header.vue'
    import Footer from '../../global/components/footer.vue'
    import ScrollTop from '../../global/components/scroll/scrollTop.vue'
    import Membermenu from '../../home/components/member/Membermenu.vue'
    export default {
        name: 'DataPage',
        components: {
            Header,
            Footer,
            ScrollTop,
            Membermenu
        },
        props: {
            'currentpage': {
                type: Object,
            }
        },
        data() {
            return {}
        },
        methods: {}
    }
</script>

<style lang="scss">
</style>