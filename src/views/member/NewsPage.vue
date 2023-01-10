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
                        最新公告
                    </div>

                    <div class="m-block-content">
                        <form class="m-block-form g-d-flex" style="align-items: center;">
                            <div class="m-block-radio">
                                <FormInput class="g-col-sm-6" :Inputtype="'radio'" :radioId="'coin'" :status="'error'" :type="'check'"
                                    :text="'全部'" :style="'check'" :clicked="true" />
                                <FormInput class="g-col-sm-6" :Inputtype="'radio'" :radioId="'coin'" :status="'error'" :type="'check'"
                                    :text="'活動進行中'" :style="'check'" :clg-col-sm-3icked="true" />
                                <FormInput class="g-col-sm-6" :Inputtype="'radio'" :radioId="'coin'" :status="'error'" :type="'check'"
                                    :text="'活動已過期'" :style="'check'" :clicked="true" />
                                <FormInput class="g-col-sm-6" :Inputtype="'radio'" :radioId="'coin'" :status="'error'" :type="'check'"
                                    :text="'活動預備中'" :style="'check'" :clicked="true" />
                            </div>
                        </form>
                        <div class="g-row">
                            <FormSelect class="g-col-sm-4 g-col-md-3" :type="'normal'" :select="areas" :text="'查詢日期'" />
                            <FormInput class="g-col-sm-8 g-col-md-5" :type="'btn'" :text="'查詢公告,請輸入關鍵字搜尋'" :status="''" :tip="''" />
                        </div>
                        <div class="m-block-table m-new-table">
                            <ul>
                                <li class="m-table-title">
                                    <div class="m-new-date">公告日期</div>
                                    <div class="m-new-kind">類別</div>
                                    <div class="m-new-range">活動時間</div>
                                    <div class="m-new-text">活動名稱</div>
                                </li>
                                <li class="m-table-item">
                                    <div class="m-new-date">2022/01/01</div>
                                    <div class="m-new-kind">防詐騙宣導</div>
                                    <div class="m-new-range">01/01<br>｜<br>01/30</div>
                                    <div class="m-new-text">
                                        <div class="m-new-text-part">
                                            <p class="m-new-text-title">超市營業時間異動公告</p>
                                            <p class="m-new-text-content">8/8 狂灑商城9折券🔥最高可折抵$2,000！限8/8使用，先用先贏！8.8免運父親節
                                                超強優惠千萬別錯過✨8/8 全站$299免運
                                                每人6張立即領💪</p>
                                        </div>

                                        <div class="m-new-icon">
                                            <router-link to="/memberinnerpage" class="material-icons">
                                                arrow_forward_ios
                                            </router-link>
                                        </div>
                                    </div>


                                </li>
                            </ul>
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
    import FormSelect from '../../global/components/form/select.vue'
    import FormInput from '../../global/components/form/input.vue'
    export default {
        name: 'CoinPage',
        components: {
            FormSelect,
            FormInput,
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