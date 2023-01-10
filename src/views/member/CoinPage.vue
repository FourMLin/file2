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
                        會員點數/美廉幣/金幣查詢
                    </div>
                    <div class="m-coin">
                        <div class="m-coin-col">
                            <div class="c-coin-img">
                                <img src="../../home/assets/point.png" alt="">
                            </div>
                            <div class="c-coin-text">
                                <p class="c-coin-text-name">我的點數</p>
                                <div class="c-coin-text-number">12,088</div>
                                <p class="c-coin-text-tip">使用期限：永久效期</p>
                            </div>
                        </div>
                        <div class="m-coin-col">
                            <div class="c-coin-img">
                                <img src="../../home/assets/m-coin.png" alt="">
                            </div>
                            <div class="c-coin-text">
                                <p class="c-coin-text-name">我的美廉幣</p>
                                <div class="c-coin-text-number">20,088</div>
                                <p class="c-coin-text-tip">使用期限：永久效期</p>
                            </div>
                        </div>
                        <div class="m-coin-col">
                            <div class="c-coin-img">
                                <img src="../../home/assets/coin.png" alt="">
                            </div>
                            <div class="c-coin-text">
                                <p class="c-coin-text-name">我的金幣</p>
                                <div class="c-coin-text-number">9000</div>
                                <p class="c-coin-text-tip">使用期限：永久效期</p>
                            </div>
                        </div>
                    </div>
                    <div class="m-block-content">
                        <FormSelect :type="'normal'" :select="areas" :text="'查詢日期'" />
                        <TabRegular :style="tab.style" :data="tab.data" class="">
                            <template #tab0>
                                <form class="m-block-form g-d-flex" style="align-items: center;">
                                    <div class="m-block-radio">
                                        <FormInput :Inputtype="'radio'" :radioId="'coin'" :status="'error'"
                                            :type="'check'" :text="'全部'" :style="'check'" :clicked="true" />
                                        <FormInput :Inputtype="'radio'" :radioId="'coin'" :status="'error'"
                                            :type="'check'" :text="'門市付款'" :style="'check'" :clg-col-sm-3icked="true" />
                                        <FormInput :Inputtype="'radio'" :radioId="'coin'" :status="'error'"
                                            :type="'check'" :text="'線上結帳'" :style="'check'" :clicked="true" />
                                    </div>
                                    <div class="m-data-show">
                                        每頁顯示
                                        <FormSelect class="g-col-6" :type="'normal'" :select="areas" :text="'10'" />
                                        筆
                                    </div>
                                </form>
                                <div class="m-block-table">
                                    <ul>
                                        <li class="m-coin-table m-table-title">
                                            <div class="m-table-date">訂單日期</div>
                                            <div class="m-table-number">訂單編號</div>
                                            <div class="m-table-price">訂單總額</div>
                                            <div class="m-table-note">備註</div>
                                            <div class="m-table-point">會員點數</div>
                                        </li>
                                        <li class="m-coin-table m-table-item">
                                            <div class="m-table-date"><span>訂單日期</span>2022/06/19 20:20</div>
                                            <div class="m-table-number"><span>訂單編號</span>234320202002600</div>
                                            <div class="m-table-price"><span>訂單總額</span>1,125</div>
                                            <div class="m-table-note"><span>備註</span>門市付款</div>
                                            <div class="m-table-point"><span>會員點數</span>+12</div>
                                        </li>
                                    </ul>
                                </div>
                                <Pagination :pageposition="'center'" />
                            </template>
                            <template #tab1>
                                <form class="m-block-form g-d-flex" style="align-items: center;">
                                    <div class="m-block-radio">
                                        <FormInput :Inputtype="'radio'" :radioId="'coin'" :status="'error'"
                                            :type="'check'" :text="'全部'" :style="'check'" :clicked="true" />
                                        <FormInput :Inputtype="'radio'" :radioId="'coin'" :status="'error'"
                                            :type="'check'" :text="'門市付款'" :style="'check'" :clg-col-sm-3icked="true" />
                                        <FormInput :Inputtype="'radio'" :radioId="'coin'" :status="'error'"
                                            :type="'check'" :text="'線上結帳'" :style="'check'" :clicked="true" />
                                    </div>
                                    <div class="m-data-show">
                                        每頁顯示
                                        <FormSelect class="g-col-6" :type="'normal'" :select="areas" :text="'10'" />
                                        筆
                                    </div>
                                </form>
                                <div class="m-block-table">
                                    <ul>
                                        <li class="m-coin-table m-table-title">
                                            <div class="m-table-date">訂單日期</div>
                                            <div class="m-table-number">訂單編號</div>
                                            <div class="m-table-price">訂單總額</div>
                                            <div class="m-table-note">備註</div>
                                            <div class="m-table-point">會員點數</div>
                                        </li>
                                        <li class="m-coin-table m-table-item">
                                            <div class="m-table-date"><span>訂單日期</span>2022/06/19 20:20</div>
                                            <div class="m-table-number"><span>訂單編號</span>234320202002600</div>
                                            <div class="m-table-price"><span>訂單總額</span>1,125</div>
                                            <div class="m-table-note"><span>備註</span>門市付款</div>
                                            <div class="m-table-point"><span>會員點數</span>+12</div>
                                        </li>
                                    </ul>
                                </div>
                                <Pagination :pageposition="'center'" />
                            </template>
                            <template #tab2>
                                <form class="m-block-form g-d-flex" style="align-items: center;">
                                    <div class="m-block-radio">
                                        <FormInput :Inputtype="'radio'" :radioId="'coin'" :status="'error'"
                                            :type="'check'" :text="'全部'" :style="'check'" :clicked="true" />
                                        <FormInput :Inputtype="'radio'" :radioId="'coin'" :status="'error'"
                                            :type="'check'" :text="'門市付款'" :style="'check'" :clg-col-sm-3icked="true" />
                                        <FormInput :Inputtype="'radio'" :radioId="'coin'" :status="'error'"
                                            :type="'check'" :text="'線上結帳'" :style="'check'" :clicked="true" />
                                    </div>
                                    <div class="m-data-show">
                                        每頁顯示
                                        <FormSelect class="g-col-6" :type="'normal'" :select="areas" :text="'10'" />
                                        筆
                                    </div>
                                </form>
                                <div class="m-block-table">
                                    <ul>
                                        <li class="m-coin-table m-table-title">
                                            <div class="m-table-date">訂單日期</div>
                                            <div class="m-table-number">訂單編號</div>
                                            <div class="m-table-price">訂單總額</div>
                                            <div class="m-table-note">備註</div>
                                            <div class="m-table-point">會員點數</div>
                                        </li>
                                        <li class="m-coin-table m-table-item">
                                            <div class="m-table-date"><span>訂單日期</span>2022/06/19 20:20</div>
                                            <div class="m-table-number"><span>訂單編號</span>234320202002600</div>
                                            <div class="m-table-price"><span>訂單總額</span>1,125</div>
                                            <div class="m-table-note"><span>備註</span>門市付款</div>
                                            <div class="m-table-point"><span>會員點數</span>+12</div>
                                        </li>
                                    </ul>
                                </div>
                                <Pagination :pageposition="'center'" />
                            </template>
                        </TabRegular>
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
    import TabRegular from '../../global/components/tab/TabRegular.vue'
    import FormSelect from '../../global/components/form/select.vue'
    import FormInput from '../../global/components/form/input.vue'
    import Pagination from '../../global/components/pagination/Pagination.vue'
    export default {
        name: 'CoinPage',
        components: {
            TabRegular,
            FormSelect,
            FormInput,
            Header,
            Footer,
            ScrollTop,
            Membermenu,
            Pagination
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