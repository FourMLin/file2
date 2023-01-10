<template>
    <Header :marquee="false"></Header>
    <CategoryMenu :style="'herizon'" />
    <div class="s-wrapper" :class="{'is-alchol-page' : pagetype == 'alchol'}">
        <div class="g-container">
            <div class="g-breadcrumb">
                <a href="#">首頁</a> > <a href="#">酒類商品</a> > <a href="#" class="current">威士忌</a>
            </div>
            <main class="g-main-layout g-d-flex">
                <div class="s-category-list-wrapper">
                    <div class="s-category-list" v-for="sc in sorcategory" :key="sc">
                        <div class="s-category-list-title">{{sc.title}}</div>
                        <ul class="s-category-list-content">
                            <li class="s-category-list-item" v-for="item in sc.listitem" :key="item">{{item}}</li>
                            <li @click="sc.openCategory = false" class="s-category-toggle" v-if="sc.openCategory">
                                收起<span class="material-icons">expand_less</span></li>
                            <li @click="sc.openCategory = true" class="s-category-toggle" v-else>展開<span
                                    class="material-icons">expand_more</span></li>
                        </ul>
                    </div>
                </div>

                <div class="s-products">
                    <div class="s-product-searchresult">
                        <div class="s-search-text">搜尋 "<span class="s-search-text-pink">旺旺</span>" 共 <span>8</span> 項商品</div>
                        <div class="s-search-sale">銷售數量</div>
                        <div class="s-search-filter">價格↑</div>
                    </div>
                    <div class="s-product-banner">
                        <img src="../global/assets/sort-banner.png" alt="">
                    </div>
                    <div class="s-product-title">
                        <h5>烤肉食材</h5>
                    </div>
                    <div class="g-product-block-row">
                        <ProductBlock :content="productblock" :column="'4'" :imgtype="'alchol'" />
                    </div>
                </div>
            </main>
        </div>

    </div>



    <Footer></Footer>
</template>


<script>
    import Header from '../global/components/header.vue'
    import Footer from '../global/components/footer.vue'
    import ProductBlock from '../global/components/ProductBlock.vue'
    import CategoryMenu from '../global/components/category/CategoryMenu.vue'

    export default {
        name: 'HomePage',
        components: {
            Header,
            ProductBlock,
            Footer,
            CategoryMenu
        },
        data() {
            return {
                pagetype: 'alchol',
                productblock: [{
                        img: "https://cs-d.ecimg.tw/items/DBAR4EA90077GPZ/000001_1478525812.jpg",
                        title: "【日本 IRIS】拍打雙氣旋偵測除蟎清淨機 HEPA13 銀離子(送集塵盒 )",
                        pricestyle: "sale-price",
                        link: '/productpagealchol',
                        oldprice: "635",
                        price: "3,590",
                        pricetext: "美廉價",
                        priceunit: "包",
                        label: [{
                            style: 'flag',
                            text: '限量',
                            number: '10',
                            unit: "包"
                        }, ]
                    },
                    {
                        img: "https://cs-d.ecimg.tw/items/DBAR4EA90077GPZ/000001_1478525812.jpg",
                        title: "【日本 IRIS】拍打雙氣旋偵測除蟎清淨機 HEPA13 銀離子(送集塵盒 )",
                        pricestyle: "sale-price",
                        link: '#',
                        oldprice: "635",
                        price: "3,590",
                        pricetext: "美廉價",
                        priceunit: "包",
                        label: [{
                            style: 'flag',
                            text: '限量',
                            number: '10',
                            unit: "包"
                        }, ]
                    },
                    {
                        img: "https://cs-d.ecimg.tw/items/DBAR4EA90077GPZ/000001_1478525812.jpg",
                        title: "【日本 IRIS】拍打雙氣旋偵測除蟎清淨機 HEPA13 銀離子(送集塵盒 )",
                        pricestyle: "sale-price",
                        link: '#',
                        oldprice: "635",
                        price: "3,590",
                        pricetext: "美廉價",
                        priceunit: "包",
                        label: [{
                            style: 'flag',
                            text: '限量',
                            number: '10',
                            unit: "包"
                        }, ]
                    }, {
                        img: "https://cs-d.ecimg.tw/items/DBAR4EA90077GPZ/000001_1478525812.jpg",
                        title: "【日本 IRIS】拍打雙氣旋偵測除蟎清淨機 HEPA13 銀離子(送集塵盒 )",
                        pricestyle: "sale-price",
                        link: '#',
                        oldprice: "635",
                        price: "3,590",
                        pricetext: "美廉價",
                        priceunit: "包",
                        label: [{
                            style: 'flag',
                            text: '限量',
                            number: '10',
                            unit: "包"
                        }, ]
                    },
                    {
                        img: "https://cs-d.ecimg.tw/items/DBAR4EA90077GPZ/000001_1478525812.jpg",
                        title: "【日本 IRIS】拍打雙氣旋偵測除蟎清淨機 HEPA13 銀離子(送集塵盒 )",
                        pricestyle: "sale-price",
                        link: '#',
                        oldprice: "635",
                        price: "3,590",
                        pricetext: "美廉價",
                        priceunit: "包",
                        label: [{
                            style: 'flag',
                            text: '限量',
                            number: '10',
                            unit: "包"
                        }, ]
                    },
                ],
                sorcategory: [{
                        title: '逛類別',
                        listitem: ['推薦商品', '普渡buy拜區', '生鮮/低溫食品', '一般食品', '酒類商品', '美體保健/清潔品', '居家生活/紙用品', '3C/家電商品',
                            '其他'
                        ],
                        openCategory: false,
                    },
                    {
                        title: '逛國家',
                        listitem: ['推薦商品2', '普渡buy拜區3', '生鮮/低溫食品', '一般食品', '酒類商品', '美體保健/清潔品', '居家生活/紙用品',
                            '3C/家電商品', '其他'
                        ],
                        openCategory: false,
                    }
                ]
            }
        },
    }
</script>

<style lang="scss">
    @import '../home/scss/sort.scss';
</style>