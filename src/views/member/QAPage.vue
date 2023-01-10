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
                        常見問題
                    </div>

                    <div class="m-block-content">
                        <div class="m-block-top-section">
                            <p>您可採輸入關鍵字方式或是選擇依類別方式查詢所欲知道的問題答案：</p>
                            <div class="g-row">
                                <FormSelect class="g-col-3" :type="'normal'" :select="areas" :text="'查詢日期'" />
                                <FormInput class="g-col-5" :type="'btn'" :text="'請輸入問題關鍵字'" :status="''" :tip="''" />
                            </div>

                        </div>
                        <TabRegular :style="tab.style" :data="tab.data" class="">
                            <template #tab0>

                                <div class="m-block-table-list">
                                    <ul>
                                        <li>
                                            <div class="m-qa-question">
                                                <span class="material-icons">contact_support</span>
                                                <p>我要如何查詢配送進度？</p>
                                            </div>
                                            <div class="m-qa-amswer">
                                                <span class="material-icons">support_agent</span>
                                                <p>您於登入會員後，至『我的帳戶』→『訂單管理』查詢配送狀況，訂單狀態：配送中-表示已通知廠商出貨；已配送-表示廠商已送交郵局或貨運寄送
                                                </p>
                                            </div>
                                            <div class="m-qa-link" @click="modalimg = true">
                                                <a href="#" class="g-s-link g-underline g-blue-link">圖片範例</a>
                                            </div>
                                        </li>
                                    </ul>
                                </div>

                            </template>
                            <template #tab1>
                            </template>
                            <template #tab2>
                            </template>
                        </TabRegular>
                    </div>
                </div>

            </div>


            <ScrollTop />
        </main>

    </div>
    <Footer></Footer>

    <ModalImage v-show="modalimg" @close="modalimg = false">
        <template #content>
            <div class="m-modal-image">
                <img src="../../home/assets/memberimg.png" alt="">
            </div>

        </template>
    </ModalImage>

</template>


<script>
    import Header from '../../global/components/header.vue'
    import Footer from '../../global/components/footer.vue'
    import ScrollTop from '../../global/components/scroll/scrollTop.vue'
    import Membermenu from '../../home/components/member/Membermenu.vue'
    import TabRegular from '../../global/components/tab/TabRegular.vue'
    import FormSelect from '../../global/components/form/select.vue'
    import FormInput from '../../global/components/form/input.vue'
    import ModalImage from '../../global/components/modal/ModalImage.vue'
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
            ModalImage
        },
        data() {
            return {
                modalimg: false,
                tab: {
                    style: {
                        type: 'white-button-two',
                        title: true,
                        responsive: true,
                    },
                    data: {
                        title: [{
                                text: '配送/回收商品'
                            },
                            {
                                text: '異動訂單資料'
                            },
                            {
                                text: '付/退款怎麼看'
                            },
                            {
                                text: '如何登入會員'
                            },
                            {
                                text: '商品購物須知'
                            },
                            {
                                text: '發票開立/領獎'
                            },
                            {
                                text: '超商取貨須知'
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