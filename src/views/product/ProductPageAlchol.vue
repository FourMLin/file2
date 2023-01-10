<template>
    <Header :marquee="false" :mobileshow="false"></Header>
    <div class="g-container g-wrapper s-wrapper">
        <div class="g-breadcrumb">
            <a href="#">首頁</a> > <a href="#">酒類商品123</a> > <a href="#" class="current">威士忌</a>
        </div>
        <main class="g-main-layout g-d-flex">
            <div class="s-category-list-wrapper">
                <div class="s-category-list " v-for="sc in sorcategory" :key="sc">
                    <div class="s-category-list-title s-category-black">{{sc.title}}</div>
                    <ul class="s-category-list-content">
                        <li class="s-category-list-item" v-for="item in sc.listitem" :key="item">{{item}}</li>
                    </ul>
                </div>
                <div class="s-bestsale ">
                    <div class="s-product-title">
                        <h4>人氣熱銷</h4>
                    </div>
                    <div class="g-product-block-cut">
                        <ProductBlock :content="productblock" :column="'0'" />
                    </div>
                </div>
            </div>

            <div class="s-single-product">
                <div class="s-product-info">
                    <div class="s-product-info-left">
                        <div class="s-product-img">
                            <img src="../../global/assets/chicken.png" alt="">
                        </div>
                        <div class="s-product-list-img">
                            <CarouselRegular :slides="carousel" :nav="true" :pagination="false" :itemcount="4"
                                :loop="false" :type="'image'" />
                        </div>
                        <div class="g-block-label">
                            <div class="g-block-label-item g-label-flag s-product-label-mobile"><span>限量10組</span></div>
                        </div>

                        <div class="s-product-share">
                            <div class="s-share-media">
                                <span>分享至：</span>
                                <ul>
                                    <li><a href="#"><img src="../../global/assets/facebook.png" alt=""></a></li>
                                    <li><a href="#"><img src="../../global/assets/line-circle.png" alt=""></a></li>
                                    <li><a href="#"><img src="../../global/assets/link.png" alt=""></a></li>
                                    <li><a href="#"><img src="../../global/assets/messenger.png" alt=""></a></li>
                                </ul>
                            </div>
                            <div class="s-share-code s-share-code-pc">
                                商品品號：S81004875
                            </div>
                        </div>
                    </div>
                    <div class="s-product-info-right">
                        <div class="s-product-name">
                            <p class="s-product-slogen">可煎、可炸，無須任何廚藝也能完成的零失誤料理</p>
                            <h4 class="s-product-nametext">去骨調味雞腿排任選6包組(190g±10%/包)</h4>
                        </div>
                        <div class="s-product-label g-block-label">
                            <div class="g-block-label-item g-label-flag s-product-label-pc"><span>限量10組</span></div>
                            <div class="s-share-code s-share-code-mobile">
                                商品品號：S81004875
                            </div>
                            <div class="s-product-deliver">
                                <span class="material-icons">local_shipping</span> 配送方式：常溫宅配/冷凍宅配/店取
                            </div>
                        </div>
                        <div class="s-product-describe s-product-describe-pc">
                            <ul>
                                <li>肉品選用台灣人最愛的雞腿部位</li>
                                <li>配上獨家黃金比例的調味</li>
                                <li>放入百萬等級之真空按摩機</li>
                                <li>讓雞腿更加入味、肉質軟嫩多汁</li>
                                <li>可煎、可炸，無須任何廚藝也能完成的零失誤料理</li>
                            </ul>
                        </div>
                        <div class="s-product-format">
                            <div class="s-format">
                                <div class="s-format-text">規格1：</div>
                                <select name="" id="">
                                    <option value="0">請選擇規格</option>
                                    <option value="1">去骨紐奧良風味雞腿排*3</option>
                                </select>
                            </div>
                            <div class="s-format">
                                <div class="s-format-text">規格2：</div>
                                <select name="" id="">
                                    <option value="0">請選擇規格</option>
                                    <option value="1">去骨紐奧良風味雞腿排*3</option>
                                </select>
                            </div>
                            <div class="s-format">
                                <div class="s-format-text">到貨區間：</div>
                                <select name="" id="">
                                    <option value="0">請選擇</option>
                                    <option value="1">結帳後5日內到貨</option>
                                </select>
                            </div>
                        </div>
                        <div class="s-product-price">
                            <div class="g-text-price">
                                <span class="g-price-old">市價：$840</span>
                                <p class="g-price-number"><span class="g-price-text-s">美廉價</span>
                                    <span class="g-price-red">$<b class="g-price-big">588</b></span>/包</p>
                            </div>
                        </div>
                        <div class="s-product-buy">
                            <div class="s-buy-number">
                                <span>數量:</span>
                                <FormCounter />
                            </div>
                            <div class="s-buy-btn">
                                <div class="g-block-icons">
                                    <span class="g-block-icons-item g-icon-cart"
                                        :class="{'material-icons': iconAddCart, 'material-icons-outlined': !iconAddCart}"
                                        @click="iconAddCart=!iconAddCart">shopping_cart</span>
                                    <span class="g-block-icons-item material-icons g-icon-heart"
                                        @click="iconHeart=!iconHeart"
                                        :class="{'active' : iconHeart, 'none' : !iconHeart}">favorite_border</span>
                                </div>
                                <router-link to="/cart" class="g-btn g-btn-regular g-btn-main-gradient s-buy-btn-pc">
                                    直接購買
                                </router-link>
                                <div class="g-btn g-btn-regular g-btn-main-gradient s-buy-btn-mobile"
                                    @click="purchase = true">直接購買
                                </div>
                                <!-- <a class="g-btn g-btn-regular g-btn-main-gradient" href="#">我要加購</a> -->
                                <a class="g-btn g-btn-regular g-btn-gray" href="#">加入購物車</a>
                                <a class="g-btn g-btn-icon g-btn-gray-line" href="#"><span
                                        class="material-icons">favorite_border</span></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="s-product-hottag">
                    <div class="s-product-title">
                        <h5>熱門快搜</h5>
                    </div>
                    <ul class="g-tag-list">
                        <li class="g-tag-btn">
                            <a href="#">商品類型</a>
                        </li>
                        <li class="g-tag-btn">
                            <a href="#">商品類型</a>
                        </li>
                        <li class="g-tag-btn">
                            <a href="#">商品類型</a>
                        </li>
                    </ul>
                </div>
                <div class="s-product-more">
                    <div class="s-product-title">
                        <h5>加價購</h5>
                    </div>
                    <div class="s-product-list-img">
                        <CarouselRegular :slides="carouselproduct" :nav="true" :pagination="false"
                            :itemcount="ItemCount()" :loop="false" :type="'vertical-product'"
                            @clickmodal="add = true" />
                    </div>

                </div>
                <div class="s-product-describe s-product-describe-mobile">
                    <ul>
                        <li>肉品選用台灣人最愛的雞腿部位</li>
                        <li>配上獨家黃金比例的調味</li>
                        <li>放入百萬等級之真空按摩機</li>
                        <li>讓雞腿更加入味、肉質軟嫩多汁</li>
                        <li>可煎、可炸，無須任何廚藝也能完成的零失誤料理</li>
                    </ul>
                </div>
                <div class="s-product-intro">
                    <TabRegular :style="tab.style" :data="tab.data" class="">
                        <template #tab0>
                            <img src="../../global/assets/product-intro.png" alt="">
                        </template>
                        <template #tab1>
                            <h5>紐奧良風味雞腿排</h5>
                            <ul>
                                <li>成分：雞肉、水、紐奧良雞翅料(蒜粒、匈牙利紅椒、白胡椒、麥芽糊精、L-麩酸鈉、DL-胺基丙酸、5’-次黃嘌呤核苷磷酸二鈉、5’-鳥嘌呤核苷磷酸二鈉、琥珀酸二鈉、多磷酸鈉、焦磷酸鈉(無水)、肉味香料(酵母精粉、乳糖、食鹽、醬油粉、植物水解蛋白(大豆、玉米、小麥)、胺基乙酸、精緻芥花油、砂糖、棕櫚油、豬肉抽出物、洋蔥粉、葡萄糖、香料、D-木糖、中鏈三酸甘油酯、天然香料、
                                </li>
                                <li>過敏原：本產品含有魚、大豆、牛奶及麩質之穀物不適合對其過敏體質者食用。</li>
                            </ul>
                            <h5>台式雞腿排</h5>
                            <ul>
                                <li>成分：雞肉、水、紐奧良雞翅料(蒜粒、匈牙利紅椒、白胡椒、麥芽糊精、L-麩酸鈉、DL-胺基丙酸、5’-次黃嘌呤核苷磷酸二鈉、5’-鳥嘌呤核苷磷酸二鈉、琥珀酸二鈉、多磷酸鈉、焦磷酸鈉(無水)、肉味香料(酵母精粉、乳糖、食鹽、醬油粉、植物水解蛋白(大豆、玉米、小麥)、胺基乙酸、精緻芥花油、砂糖、棕櫚油、豬肉抽出物、洋蔥粉、葡萄糖、香料、D-木糖、中鏈三酸甘油酯、天然香料、
                                </li>
                                <li>過敏原：本產品含有魚、大豆、牛奶及麩質之穀物不適合對其過敏體質者食用。</li>
                            </ul>
                        </template>
                        <template #tab2>
                            <p>※ 依商品屬性不同，有【線上訂購】及【門市訂購】之區分，付款方式可選擇【線上結帳】或【門市結帳】。</p>
                            <p>※ 選擇門市結帳商品：訂購完成後，隨即收到付款通知簡訊，憑結帳碼至美廉社門市結帳，訂單方可成立並安排出貨作業；1天內未付款，結帳碼即失效，訂單不成立。</p>
                            <p>※ 門市訂購：登入Go美廉會員後，出示欲購買商品之頁面予美廉社門市人員，由門市人員進行身份、訂單確認，並協助完成結帳作業，消費者須填寫訂購資訊，完成確認後方可安排出貨。</p>
                        </template>
                        <template #tab3>
                            <p>1.選擇門市結帳商品：訂購完成後，隨即收到付款通知簡訊，憑結帳碼至美廉社門市結帳，訂單方可成立。逾期(1天)未付則自動取消訂單。</p>
                            <p>2.門市訂購商品：須至美廉社門市，出示欲購買商品頁面之Go美廉會員條碼，由門市人員進行身份、訂單確認及結帳作業，再由您填寫訂購資訊，完成確認後方可安排出貨。</p>
                            <p>3.Go美廉所有商品付款作業無論採線上結帳或門市結帳皆不會有專人以電話通知您付款或促銷相關事宜，請提高警覺防止詐騙。</p>
                        </template>
                        <template #tab4>
                            <p>1.未事先聯絡客服而72小時無人取貨導致商品退回者、訂購卻未付款取貨記錄達2次即列入黑名單，往後訂單一律直接取消，請特別注意。
                                <br>
                                2.商品的顏色會因為個人使用的電腦或手機畫面設定不同呈現出不同程度的色差，敬請見諒。
                                <br>
                                3.加入商品清單的商品須完成下單後商品才會為您保留。
                                <br>
                                4.商品會依供應商及材積大小進行拆單，不提供合併寄送之服務，敬請見諒。
                                <br>
                                5.商品於出貨階段後，恕不受理配送地址之變更。
                                <br>
                                6.Go美廉線上購物提供之商品配送區域範圍僅限台灣本島區域
                                <br>
                                7.活動各項辦法及規定，以活動網站公告及本公司官方說明為準，本公司擁有本活動隨時及最終保留、變更、修改、或撤回、取消發送等之權利，若因遇不可抗力之因素，本活動將有一部或全部份暫停、延後舉辦或取消之權利。如有其他未盡事宜，本公司有權隨時補充或修正，並以最新公告為主。
                            </p>
                        </template>
                    </TabRegular>
                </div>
            </div>
            <ScrollTop />
        </main>
    </div>
    <ModalSlide :modaltype="'mini'" v-show="purchase" @close="purchase = false">
        <template #content>
            <div class="s-buy-prodect-mobile">
                <div class="s-purchase-content">
                    <div class="s-purchase-img">
                        <img src="../../global/assets/chicken.png" alt="">
                    </div>
                    <div class="s-purchase-content-text">
                        <div class="s-purchase-title">【台灣豬】氣炸人生冷凍調味法式豬排</div>
                        <div class="g-d-flex">
                            <div class="g-text-price">
                                <s class="g-price-old">$345</s>
                                <span class="g-price-number">$<b>1,323</b></span>
                            </div>
                        </div>
                    </div>

                </div>
                <div class="s-product-format">
                    <div class="s-format">
                        <div class="s-format-text">規格1：</div>
                        <select name="" id="">
                            <option value="0">請選擇規格</option>
                            <option value="1">去骨紐奧良風味雞腿排*3</option>
                        </select>
                    </div>
                    <div class="s-format">
                        <div class="s-format-text">規格2：</div>
                        <select name="" id="">
                            <option value="0">請選擇規格</option>
                            <option value="1">去骨紐奧良風味雞腿排*3</option>
                        </select>
                    </div>

                </div>
            </div>
        </template>
        <template #footer>
            <div class="g-modal-cta g-row g-center">
                <div class="g-col-6">
                    <div class="s-buy-number">
                        <FormCounter />
                    </div>
                </div>
                <div class="g-col-6">
                    <div class="g-btn g-btn-s g-btn-main">
                        加入購物車
                    </div>
                </div>
            </div>
        </template>
    </ModalSlide>
    <ModalRegular :modaltype="'mini'" v-show="add" @close="add = false" :contentstyle="'top-line'">
        <template #header>
            <h3 class="g-vertical-title">我要加購</h3>
        </template>
        <template #content>
            <div class="s-add-prodect">
                <div class="s-add-img">
                    <img src="../../global/assets/chicken.png" alt="">
                </div>
                <div class="s-add-content">
                    <div class="s-add-title">【台灣豬】氣炸人生冷凍調味法式豬排</div>
                    <div class="s-format">
                        <div class="s-format-text">規格1：</div>
                        <select name="" id="">
                            <option value="0">請選擇規格</option>
                            <option value="1">去骨紐奧良風味雞腿排*3</option>
                        </select>
                    </div>
                    <div class="s-format">
                        <div class="s-format-text">規格2：</div>
                        <select name="" id="">
                            <option value="0">請選擇規格</option>
                            <option value="1">去骨紐奧良風味雞腿排*3</option>
                        </select>
                    </div>
                    <div class="s-buy-number">
                        <span>數量:</span>
                        <FormCounter />

                    </div>
                </div>
            </div>
        </template>
        <template #footer>
            <div class="g-modal-cta g-d-wrap g-center">
                <div class="g-col-6">
                    <div class="g-btn g-btn-s g-btn-main-line " @click="add = false">
                        取消
                    </div>
                </div>
                <div class="g-col-6">
                    <div class="g-btn g-btn-s g-btn-main" @click="AlertSeccess()">
                        確認
                    </div>
                </div>
            </div>
        </template>
    </ModalRegular>
    <ModalAlert :modaltype="'alert'" v-show="addseccess" @close="addseccess = false">
        <template #content>
            <div class="s-addseccess">
                <span class="material-icons">check_circle</span>&ensp; <span>加購成功</span>
            </div>

        </template>
    </ModalAlert>



    <Footer></Footer>
</template>


<script>
    import Header from '../../global/components/header.vue'
    import Footer from '../../global/components/footer.vue'
    import TabRegular from '../../global/components/tab/TabRegular.vue'
    import CarouselRegular from '../../global/components/carousel/CarouselRegular.vue'
    import ProductBlock from '../../global/components/ProductBlock.vue'
    import FormCounter from '../../global/components/form/counter.vue'
    import ScrollTop from '../../global/components/scroll/scrollTop.vue'
    import ModalRegular from '../../global/components/modal/ModalRegular.vue'
    import ModalAlert from '../../global/components/modal/ModalAlert.vue'
    import ModalSlide from '../../global/components/modal/ModalSlide.vue'

    export default {
        name: 'HomePage',
        components: {
            Header,
            TabRegular,
            Footer,
            CarouselRegular,
            ProductBlock,
            FormCounter,
            ScrollTop,
            ModalRegular,
            ModalAlert,
            ModalSlide
        },
        data() {
            return {
                purchase: false,
                add: false,
                addseccess: false,
                iconAddCart: false,
                iconHeart: false,
                carousel: [{
                        img: require('../../global/assets/chicken.png'),
                        link: '#',
                    },
                    {
                        img: require('../../global/assets/chicken.png'),
                        link: '#',
                    },
                    {
                        img: require('../../global/assets/chicken.png'),
                        link: '#',
                    },
                    {
                        img: require('../../global/assets/chicken.png'),
                        link: '#',
                    },
                    {
                        img: require('../../global/assets/chicken.png'),
                        link: '#',
                    },
                    {
                        img: require('../../global/assets/chicken.png'),
                        link: '#',
                    },
                ],
                carouselproduct: [{
                        img: require('../../global/assets/chicken.png'),
                        link: '#',
                        title: '【台灣豬】氣炸人生冷凍調味法式豬排',
                        price: '149'
                    },
                    {
                        img: require('../../global/assets/chicken.png'),
                        link: '#',
                        title: '【台灣豬】氣炸人生冷凍調味法式豬排',
                        price: '149'
                    },
                    {
                        img: require('../../global/assets/chicken.png'),
                        link: '#',
                        title: '【台灣豬】氣炸人生冷凍調味法式豬排',
                        price: '149'
                    },
                    {
                        img: require('../../global/assets/chicken.png'),
                        link: '#',
                        title: '【台灣豬】氣炸人生冷凍調味法式豬排',
                        price: '149'
                    },
                    {
                        img: require('../../global/assets/chicken.png'),
                        link: '#',
                        title: '【台灣豬】氣炸人生冷凍調味法式豬排',
                        price: '149'
                    },
                    {
                        img: require('../../global/assets/chicken.png'),
                        link: '#',
                        title: '【台灣豬】氣炸人生冷凍調味法式豬排',
                        price: '149'
                    },


                ],

                tab: {
                    style: {
                        type: 'button',
                        title: true,
                        responsive: true,
                    },
                    data: {
                        title: [{
                                text: '商品介紹'
                            },
                            {
                                text: '詳細規格'
                            },
                            {
                                text: '訂購方式'
                            },
                            {
                                text: '付款說明'
                            },
                            {
                                text: '注意事項'
                            },

                        ],

                    },
                },
                productblock: [{
                        img: "https://cs-d.ecimg.tw/items/DBAR4EA90077GPZ/000001_1478525812.jpg",
                        title: "【日本 IRIS】拍打雙氣旋偵測除蟎清淨機 HEPA13 銀離子(送集塵盒 )",
                        pricestyle: "only-price",
                        link: '#',
                        price: "3,590",
                    },
                    {
                        img: "https://cs-d.ecimg.tw/items/DBAR4EA90077GPZ/000001_1478525812.jpg",
                        title: "【日本 IRIS】拍打雙氣旋偵測除蟎清淨機 HEPA13 銀離子(送集塵盒 )",
                        pricestyle: "only-price",
                        link: '#',
                        price: "3,590",
                    },
                    {
                        img: "https://cs-d.ecimg.tw/items/DBAR4EA90077GPZ/000001_1478525812.jpg",
                        title: "【日本 IRIS】拍打雙氣旋偵測除蟎清淨機 HEPA13 銀離子(送集塵盒 )",
                        pricestyle: "only-price",
                        link: '#',
                        price: "3,590",
                    },
                    {
                        img: "https://cs-d.ecimg.tw/items/DBAR4EA90077GPZ/000001_1478525812.jpg",
                        title: "【日本 IRIS】拍打雙氣旋偵測除蟎清淨機 HEPA13 銀離子(送集塵盒 )",
                        pricestyle: "only-price",
                        link: '#',
                        price: "3,590",
                    },
                ],


                sorcategory: [{
                    title: '逛類別',
                    listitem: ['推薦商品', '普渡buy拜區', '生鮮/低溫食品', '一般食品', '酒類商品', '美體保健/清潔品', '居家生活/紙用品', '3C/家電商品',
                        '其他'
                    ],
                    openCategory: false,
                }, ]
            }
        },
        methods: {
            AlertSeccess() {
                this.addseccess = true,
                    this.add = false
            },
            ItemCount() {
                if (window.innerWidth > 568) {
                    return '6'
                } else {
                    return '2'
                }
            }
        }
    }
</script>

<style lang="scss">
</style>