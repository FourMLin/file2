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
                        電子發票說明
                    </div>


                    <div class="m-block-content">
                        <div class="m-block-top-section m-block-article">
                            <p>一、載具資料可以修改嗎？
                                請您登入Go美廉帳號後，前往資料修改，即可進行修改。
                            </p>
                            <p>二、商品於Go美廉線上完成結帳，發票如何提供？
                                根據財政部令 台財資字第 1070001765 號
                                「電子發票實施作業要點」，於Go美廉消費開立之電子發票，無實體紙本發票故不會寄送。Go美廉網站會將期限內開立之電子發票上傳至「財政部電子發票整合服務平台」留存供會員查閱。相關資料詳見財政部電子發票整合平台
                                https://www.einvoice.nat.gov.tw。</p>
                            <p>
                                三、Go美廉線上結帳之中獎發票，如何取得發票兌獎？
                                •據統一發票使用辦法規定，發票兌獎必須使用發票正本。Go美廉帳號內所呈現發票樣章僅供參考用。中獎發票依不同載具方式之通知方式如下：
                                (1) 手機載具：將由財政部統一通知中獎人。
                                (2)
                                會員載具：Go美廉網站每逢單月25日開獎後，將根據財政部公佈之統一發票中獎號碼進行電腦對獎(已索取、已作廢發票除外)，若有中獎將以簡訊通知您，您可持手機內條碼至任一美廉社門市列印中獎發票，五獎、六獎發票可於美廉社進行兌獎作業。
                            </p>
                            <p>
                                四、個人使用線上結帳，能否索取紙本發票？
                                根據財政部令 台財資字第 1070001765 號
                                「電子發票實施作業要點」，於Go美廉消費開立之電子發票，無實體紙本發票故不會寄送。但電子發票資訊需於期限內上傳至財政部電子發票整合服務平台留存，您可利用財政部電子發票整合平台查詢消費紀錄（https://www.einvoice.nat.gov.tw），亦可於您Go美廉個人帳號內所儲存的商品清單內下載取得該筆消費資訊。
                            </p>
                            <p>
                                五、如何取得公司戶電子發票證明聯？(發票需開立統一編號)
請在結帳流程中的「發票資料」處，選擇公司行號用（線上列印）並填寫統一編號即可。發票一經開立，不得更改或改開公司戶發票。另提醒，配合財政部新版電子發票格式，電子發票證明聯無抬頭欄位，恕無法加開抬頭。
                            </p>
                            <p>
                                六、因為報帳需求，能否先行開立發票？
發票號碼於訂單完成付款作業後隨即產生，將於帳戶內商品清單中呈現。建議您訂購時選擇公司行號用（線上列印）並填寫統一編號，發票開立後，選擇該筆訂單，即可下載列印電子發票證明聯(供報帳使用)。
您也可以於Go美廉網站下單結帳時選擇美廉社門市結帳，以取得的結帳碼前往門市結帳並告知門市人員需開立統一編號，完成後即可取得實體電子發票。

                            </p>
                            <p>
                                七、公司戶發票抬頭或統一編號開立錯誤如何處理？
Go美廉網站依財政部新版電子發票格式，電子發票證明無抬頭欄位，故無開立抬頭錯誤情況。若為統一編號開立錯誤，須開立聲明書，並連同首次列印之電子發票證明聯於次月3日前以掛號寄達「10477台北市中山區民權東路三段4號地下一層 三商家購(股)公司 電子商務部 收」，或致電聯絡客服洽詢。

                            </p>
                            <p>
                                八、如何取得公司戶網路銷貨折讓單？
商品一旦完成退款作業，同步開立該筆退貨退款之銷貨折讓單。您可登入Go美廉會員後查詢該筆訂單，即可下載銷貨折讓單檔案後列印。

                            </p>
                            <p>
                                九、收到發票後，可否換開為多張發票？
為配合電子請款結帳，故一次出貨對應一張發票，恕無法分別開立多張。

                            </p>
                            <p>
                                十、發票可以指定日期、開立其它品名或金額嗎？
Go美廉為合法正當經營公司網站，發票採自動化系統開立，故發票上商品、數量、金額及購買日期依訂購結帳當下資訊開立，恕無法指定開立其他品名、金額及日期。

                            </p>
                            <p>
                                十一、選用捐贈的發票將如何被運用？
根據財政部「電子發票實施作業要點」第二十二條說明，財政部電子發票整合平台應每二月為一期，於開獎日前，將買受人所捐贈之該期電子發票明細資料通知各該受捐贈機構，並由財政部電子發票整合平台於對獎後，通知受捐贈機構領獎。

                            </p>
                            <p>
                                十二、已開立的發票是否可改以捐贈方式？
若您訂購結帳時未選擇捐贈發票，則無法修改為捐贈發票。

                            </p>
                            <p>
                                十三、已捐贈的發票若有退換貨需求將如何處理？
依據法令規定，已捐贈的發票無法索取紙本發票及更改捐贈對象，如該筆交易有退貨需求，Go美廉即會將該筆發票作廢。
                            </p>

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