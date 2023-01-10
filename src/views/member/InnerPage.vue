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
                        超市營業時間異動公告
                    </div>

                    <div class="m-block-content">
                        <div class="m-block-content-img">
                            <img src="../../home/assets/memberimg.png" alt="">
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
    // import FormSelect from '../../global/components/form/select.vue'
    // import FormInput from '../../global/components/form/input.vue'
    export default {
        name: 'CoinPage',
        components: {
            // FormSelect,
            // FormInput,
            Header,
            Footer,
            ScrollTop,
            Membermenu
        },
        data() {
            return {
                tab: {
                    style: {
                        type: 'white-button-two',
                        title: true,
                        responsive: true,
                    },
                    data: {
                        title: [{
                                text: '我的點數紀錄'
                            },
                            {
                                text: '我的美廉幣紀錄'
                            },
                            {
                                text: '我的金幣紀錄'
                            }

                        ],

                    },
                },
            }
        },
    }
</script>

<style lang="scss">
</style>