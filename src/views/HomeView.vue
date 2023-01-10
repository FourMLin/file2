<template>
  <Header :marquee="true" :mobileshow="true"></Header>
  <div class="h-home-banner">
    <div class="g-container g-tab-btn-wraper">
      <div class="h-tab-button">
        <ul class="h-tab-list">
          <li class="h-tab-item" v-for="tab in bigbannertab" :key="tab"
            :class="{'h-blue' : tab.color == 'blue' ,'h-purple' : tab.color == 'purple', 'h-indigo' : tab.color == 'indigo', 'h-yellow' : tab.color == 'yellow'}">
            <router-link :to="{path:tab.link}">{{tab.text}}</router-link>
          </li>
        </ul>
      </div>
    </div>
    <div class="h-home-banner-inner">
      <div class="g-container h-category-menu">
        <CategoryMenu :style="'vertical'" />
        <CarouselRegular :slides="carousel" :nav="true" :pagination="false" :itemcount="1" :loop="true"
          :type="'image'" />
        <div class="h-banner-side-product">
          <div class="h-side-product-title">
            <p>今日最美聯</p>
            <div class="h-side-product-page">
              <span @click="sideproductwork.click = '1'" :class="{'active' : sideproductwork.click == '1'}">1</span>
              <span @click="sideproductwork.click = '2'" :class="{'active' : sideproductwork.click == '2'}">2</span>
            </div>
          </div>
          <div class="h-side-product">
            <ul>
              <li class="h-side-product-item" v-for="(product, i) in showTwoProduct" :key="i">
                <a :href="product.link">
                  <div class="h-side-item-img">
                    <img :src="product.img" alt="">
                  </div>
                  <div class="h-side-item-price">
                    <s>${{product.oldprice}}</s> <span><span>$</span>{{product.price}}</span>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!-- :style="{backgroundColor: banner.bg[0]}" -->

  </div>
  <div class="h-mobile-event">
    <ul>
      <li v-for="event in mobileevent" :key="event">
        <a :href="event.link">
          <div class="h-mobile-event-img">
            <img :src="event.img" alt="">
          </div>
          <p class="h-mobile-event-text">{{event.text}}</p>
        </a>
      </li>
    </ul>
  </div>
  <div class="h-marquee h-marquee-m">
    <div class="g-container">
      <span><span class="material-icons">error</span> 本公司不會主動聯繫要求您提供個人金融資訊</span>
    </div>
  </div>
  <main>
    <MainProduct />
    <div class="h-category-section">
      <div class="g-container">
        <h3 class="h-section-title">
          <div class="h-title-icon">
            <img src="../home/assets/title-star.svg" alt="">
          </div>
          <span>館別推薦</span>
        </h3>
        <div class="h-category-title">主站分類</div>
        <TabRegular :style="tab.style" :data="tab.data" class="">
          <template #tab0>
            <CategoryProduct />
          </template>
          <template #tab1>
            <CategoryProduct />
          </template>
          <template #tab2>
            <CategoryProduct />
          </template>
          <template #tab3>
            <CategoryProduct />
          </template>
          <template #tab4>
            <CategoryProduct />
          </template>
          <template #tab5>
            <CategoryProduct />
          </template>
          <template #tab6>
            <CategoryProduct />
          </template>
          <template #tab7>
            <CategoryProduct />
          </template>
          <template #tab8>
            <CategoryProduct />
          </template>
        </TabRegular>
      </div>
    </div>
    <div class="h-recommend-section">
      <div class="g-container">
        <h3 class="h-section-title">
          <div class="h-title-icon">
            <img src="../home/assets/title-star.svg" alt="">
          </div>
          <span>推薦商品</span>
        </h3>
        <div class="g-product-block-row">
          <ProductBlock :content="productblocktwo" :column="'4'" />
          <ProductBlock :content="productblock" :column="'5'" />
        </div>
      </div>
    </div>
    <ScrollTop />
    <!-- 春聯 -->
    <div class="h-couplets h-couplets-left">
      <div class="h-couplets-item">
        <img src="../global/assets/couplets.png" alt="">
      </div>
    </div>
    <div class="h-couplets h-couplets-right">
      <div class="h-couplets-item">
        <img src="../global/assets/couplets.png" alt="">
      </div>
    </div>
  </main>


  <Footer></Footer>
</template>


<script>
  import Header from '../global/components/header.vue'
  import Footer from '../global/components/footer.vue'
  import MainProduct from '../home/components/MainProduct.vue'
  import ProductBlock from '../global/components/ProductBlock.vue'
  import TabRegular from '../global/components/tab/TabRegular.vue'
  import CategoryProduct from '../home/components/CategoryProduct.vue'
  import CarouselRegular from '../global/components/carousel/CarouselRegular.vue'
  import CategoryMenu from '../global/components/category/CategoryMenu.vue'
  import ScrollTop from '../global/components/scroll/scrollTop.vue'

  export default {
    name: 'HomePage',
    components: {
      Header,
      MainProduct,
      ProductBlock,
      Footer,
      TabRegular,
      CategoryProduct,
      CarouselRegular,
      CategoryMenu,
      ScrollTop
    },
    data() {
      return {
        banner: {
          bg: ['#FF4000', '#FF9E29']
        },
        // banner上的 tab
        bigbannertab: [{
            link: '/sortview',
            text: '酒國英雄專區',
            color: 'blue'
          },
          {
            link: '#',
            text: '防疫專區',
            color: 'blue'
          },
          {
            link: '#',
            text: '端午粽專區',
            color: 'blue'
          },
        ],
        // banner 輪播
        carousel: [
          // {
          //   img: require('../home/assets/b-banner.jpg')
          // },
          // {
          //   img: 'https://blog.accupass.com/wp-content/uploads/2022/03/Cover-Tiny_guide-to-design-the-best-event-banners-1.png'
          // },
          // {
          //   img: require('../home/assets/b-banner.jpg')
          // },
          // {
          //   img: 'https://blog.accupass.com/wp-content/uploads/2022/03/Cover-Tiny_guide-to-design-the-best-event-banners-1.png'
          // },{
          //   img: require('../home/assets/b-banner.jpg')
          // },
          // {
          //   img: 'https://blog.accupass.com/wp-content/uploads/2022/03/Cover-Tiny_guide-to-design-the-best-event-banners-1.png'
          // },
        ],

        // 今日最美廉
        sideproductwork: {
          click: '1'
        },
        sideproduct: [{
            link: "#",
            img: "https://cs-d.ecimg.tw/items/DBAR4EA90077GPZ/000001_1478525812.jpg",
            oldprice: "654",
            price: "1,756"
          },
          {
            link: "#",
            img: "https://www.rosacake.com/image/cache/data/MACARON-360x360.jpg",
            oldprice: "654",
            price: "1,756"
          },
          {
            link: "#",
            img: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/123-1587291176.jpg?crop=0.493xw:0.987xh;0,0&resize=640:*",
            oldprice: "654",
            price: "1,756"
          },
          {
            link: "#",
            img: "https://cdn1.cybassets.com/media/W1siZiIsIjIxMzc2L3Byb2R1Y3RzLzM2NDc3OTQ1LzE2NDc1MTYzOTlfNzM3YzRiNmNjZWUyNWM1ODdkYTcuanBlZyJdLFsicCIsInRodW1iIiwiNjAweDYwMCJdXQ.jpeg?sha=f214ae80ae9c6885",
            oldprice: "654",
            price: "1,756"
          },
          {
            link: "#",
            img: "https://d2ug13roilyhpx.cloudfront.net/image/productitem/o/5i/q54r1e5ifc7olos2bp.jpg",
            oldprice: "654",
            price: "1,756"
          },
          {
            link: "#",
            img: "https://www.bread.com.tw/media/catalog/product/cache/1/small_image/480x480/3914c5c7d0046eba129d91d064aba61b/0/4/04-florida-0865__1.jpg",
            oldprice: "654",
            price: "1,756"
          },
        ],
        // 推薦商品X4
        productblocktwo: [{
            img: "https://cs-d.ecimg.tw/items/DBAR4EA90077GPZ/000001_1478525812.jpg",
            title: "【日本 IRIS】拍打雙氣旋偵測除蟎清淨機 HEPA13 銀離子(送集塵盒 )",
            pricestyle: "sale-price",
            oldprice: "635",
            link: '#',
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
        ],
        // 推薦商品X5
        productblock: [{
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
        // 館別推薦 tab
        tab: {
          style: {
            type: 'vertical-list',
            title: true,
            responsive: true,
          },
          data: {
            title: [{
                text: '推薦商品'
              },
              {
                text: '普渡buy拜區'
              },
              {
                text: '生鮮/低溫食品'
              },
              {
                text: '一般食品'
              },
              {
                text: '酒類商品'
              },
              {
                text: '美體保健/清潔品'
              },
              {
                text: '居家生活/紙用品'
              },
              {
                text: '3C/家電商品'
              },

            ],

          },
        },

        //mobile 活動內容
        mobileevent: [{
          link: '#',
          img: require('../global/assets/menu-event.png'),
          text: '中元節'
        }, {
          link: '#',
          img: require('../global/assets/menu-clock.png'),
          text: '限時搶購'
        }, {
          link: '#',
          img: require('../global/assets/menu-fish.png'),
          text: '牲果'
        }, {
          link: '#',
          img: require('../global/assets/menu-jar.png'),
          text: '零食'
        }, {
          link: '#',
          img: require('../global/assets/menu-jar.png'),
          text: '電子商品'
        }, {
          link: '#',
          img: require('../global/assets/menu-jar.png'),
          text: '零食'
        }, {
          link: '#',
          img: require('../global/assets/menu-jar.png'),
          text: '電子商品'
        }, ],


      }
    },
    created() {
          this.home_sys()
      },
      methods:{
        home_sys() {
          this.carousel = 
                [{
                  img: require('../home/assets/b-banner.jpg')
                },
                {
                  img: 'https://blog.accupass.com/wp-content/uploads/2022/03/Cover-Tiny_guide-to-design-the-best-event-banners-1.png'
                },{
                  img: require('../home/assets/b-banner.jpg')
                },];
        }
      },
    computed: {
      showTwoProduct: function () {
        if (this.sideproductwork.click == '1') {
          return this.sideproduct.slice(0, 2)
        } else if (this.sideproductwork.click == '2') {
          return this.sideproduct.slice(2, 4)
        } else {
          return this.sideproduct.slice(4, 6)
        }

      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  @import '../home/scss/style.scss';
</style>