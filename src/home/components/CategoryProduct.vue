<template>
  <div class="h-category-carousel">
    <div class="h-carousel-banner">
      <CarouselRegular :type="'image'" :slides="carousel" :nav="true" :pagination="false" />
    </div>
    <div class="h-carousel-product">
      <div class="h-carousel-product-page">
        <span @click="carouselproduct.click = '1'" :class="{'active' : carouselproduct.click == '1'}">1</span>
        <span @click="carouselproduct.click = '2'" :class="{'active' : carouselproduct.click == '2'}">2</span>
        <span @click="carouselproduct.click = '3'" :class="{'active' : carouselproduct.click == '3'}">3</span>
      </div>
      <ProductBlock :content="SixProductShow" :column="carouselproduct.column" />
    </div>
  </div>


</template>

<script>
  import ProductBlock from '../../global/components/ProductBlock.vue'
  import CarouselRegular from '../../global/components/carousel/CarouselRegular.vue'
  export default {
    name: 'CategoryProduct',
    components: {
      ProductBlock,
      CarouselRegular
    },
    data() {
      return {
        carouselproduct: {
          click: '1',
          column: '3'
        },
        productblock: [{
            img: "https://www.bread.com.tw/media/catalog/product/cache/1/small_image/480x480/3914c5c7d0046eba129d91d064aba61b/0/4/04-florida-0865__1.jpg",
            title: "【日本 IRIS】拍打雙氣旋偵測除蟎清淨機 HEPA13 銀離子(送集塵盒 )",
            link: "#",
            pricestyle: "old-price",
            price: "3,590",
            oldprice: "635",
            iconAddCart: false,
          },
          {
            img: "https://cs-d.ecimg.tw/items/DBAR4EA90077GPZ/000001_1478525812.jpg",
            title: "【日本 IRIS】拍打雙氣旋偵測除蟎清淨機 HEPA13 銀離子(送集塵盒 )",
            link: "#",
            pricestyle: "old-price",
            pricetext: "折後價",
            price: "3,590",
            oldprice: "635",
            iconAddCart: false,
          },
          {
            img: "https://cs-d.ecimg.tw/items/DBAR4EA90077GPZ/000001_1478525812.jpg",
            title: "【日本 IRIS】拍打雙氣旋偵測除蟎清淨機 HEPA13 銀離子(送集塵盒 )",
            link: "#",
            pricestyle: "old-price",
            price: "3,590",
            oldprice: "635",
            iconAddCart: false,

          },
          {
            img: "https://www.bread.com.tw/media/catalog/product/cache/1/small_image/480x480/3914c5c7d0046eba129d91d064aba61b/0/4/04-florida-0865__1.jpg",
            title: "【日本 IRIS】拍打雙氣旋偵測除蟎清淨機 HEPA13 銀離子(送集塵盒 )",
            link: "#",
            pricestyle: "old-price",
            price: "3,590",
            oldprice: "635",
            iconAddCart: false,
          },
          {
            img: "https://cs-d.ecimg.tw/items/DBAR4EA90077GPZ/000001_1478525812.jpg",
            title: "【日本 IRIS】拍打雙氣旋偵測除蟎清淨機 HEPA13 銀離子(送集塵盒 )",
            link: "#",
            pricestyle: "old-price",
            pricetext: "折後價",
            price: "3,590",
            oldprice: "635",
            iconAddCart: false,
          },
          {
            img: "https://cs-d.ecimg.tw/items/DBAR4EA90077GPZ/000001_1478525812.jpg",
            title: "【日本 IRIS】拍打雙氣旋偵測除蟎清淨機 HEPA13 銀離子(送集塵盒 )",
            link: "#",
            pricestyle: "old-price",
            price: "3,590",
            oldprice: "635",
            iconAddCart: false,

          },
          {
            img: "https://cs-d.ecimg.tw/items/DBAR4EA90077GPZ/000001_1478525812.jpg",
            title: "【日本 IRIS】拍打雙氣旋偵測除蟎清淨機 HEPA13 銀離子(送集塵盒 )",
            link: "#",
            pricestyle: "old-price",
            price: "3,590",
            oldprice: "635",
            iconAddCart: false,
          },
          {
            img: "https://cs-d.ecimg.tw/items/DBAR4EA90077GPZ/000001_1478525812.jpg",
            title: "【日本 IRIS】拍打雙氣旋偵測除蟎清淨機 HEPA13 銀離子(送集塵盒 )",
            link: "#",
            pricestyle: "old-price",
            pricetext: "折後價",
            price: "3,590",
            oldprice: "635",
            iconAddCart: false,
          },
          {
            img: "https://cs-d.ecimg.tw/items/DBAR4EA90077GPZ/000001_1478525812.jpg",
            title: "【日本 IRIS】拍打雙氣旋偵測除蟎清淨機 HEPA13 銀離子(送集塵盒 )",
            link: "#",
            pricestyle: "old-price",
            price: "3,590",
            oldprice: "635",
            iconAddCart: false,

          },
          {
            img: "https://www.bread.com.tw/media/catalog/product/cache/1/small_image/480x480/3914c5c7d0046eba129d91d064aba61b/0/4/04-florida-0865__1.jpg",
            title: "【日本 IRIS】拍打雙氣旋偵測除蟎清淨機 HEPA13 銀離子(送集塵盒 )",
            link: "#",
            pricestyle: "old-price",
            price: "3,590",
            oldprice: "635",
            iconAddCart: false,
          },
          {
            img: "https://cs-d.ecimg.tw/items/DBAR4EA90077GPZ/000001_1478525812.jpg",
            title: "【日本 IRIS】拍打雙氣旋偵測除蟎清淨機 HEPA13 銀離子(送集塵盒 )",
            link: "#",
            pricestyle: "old-price",
            pricetext: "折後價",
            price: "3,590",
            oldprice: "635",
            iconAddCart: false,
          },
          {
            img: "https://cs-d.ecimg.tw/items/DBAR4EA90077GPZ/000001_1478525812.jpg",
            title: "【日本 IRIS】拍打雙氣旋偵測除蟎清淨機 HEPA13 銀離子(送集塵盒 )",
            link: "#",
            pricestyle: "old-price",
            price: "3,590",
            oldprice: "635",
            iconAddCart: false,

          },
          {
            img: "https://www.bread.com.tw/media/catalog/product/cache/1/small_image/480x480/3914c5c7d0046eba129d91d064aba61b/0/4/04-florida-0865__1.jpg",
            title: "【日本 IRIS】拍打雙氣旋偵測除蟎清淨機 HEPA13 銀離子(送集塵盒 )",
            link: "#",
            pricestyle: "old-price",
            price: "3,590",
            oldprice: "635",
            iconAddCart: false,
          },
          {
            img: "https://cs-d.ecimg.tw/items/DBAR4EA90077GPZ/000001_1478525812.jpg",
            title: "【日本 IRIS】拍打雙氣旋偵測除蟎清淨機 HEPA13 銀離子(送集塵盒 )",
            link: "#",
            pricestyle: "old-price",
            pricetext: "折後價",
            price: "3,590",
            oldprice: "635",
            iconAddCart: false,
          },
          {
            img: "https://cs-d.ecimg.tw/items/DBAR4EA90077GPZ/000001_1478525812.jpg",
            title: "【日本 IRIS】拍打雙氣旋偵測除蟎清淨機 HEPA13 銀離子(送集塵盒 )",
            link: "#",
            pricestyle: "old-price",
            price: "3,590",
            oldprice: "635",
            iconAddCart: false,

          },
          {
            img: "https://cs-d.ecimg.tw/items/DBAR4EA90077GPZ/000001_1478525812.jpg",
            title: "【日本 IRIS】拍打雙氣旋偵測除蟎清淨機 HEPA13 銀離子(送集塵盒 )",
            link: "#",
            pricestyle: "old-price",
            price: "3,590",
            oldprice: "635",
            iconAddCart: false,
          },
          {
            img: "https://www.bread.com.tw/media/catalog/product/cache/1/small_image/480x480/3914c5c7d0046eba129d91d064aba61b/0/4/04-florida-0865__1.jpg",
            title: "【日本 IRIS】拍打雙氣旋偵測除蟎清淨機 HEPA13 銀離子(送集塵盒 )",
            link: "#",
            pricestyle: "old-price",
            pricetext: "折後價",
            price: "3,590",
            oldprice: "635",
            iconAddCart: false,
          },
          {
            img: "https://cs-d.ecimg.tw/items/DBAR4EA90077GPZ/000001_1478525812.jpg",
            title: "【日本 IRIS】拍打雙氣旋偵測除蟎清淨機 HEPA13 銀離子(送集塵盒 )",
            link: "#",
            pricestyle: "old-price",
            price: "3,590",
            oldprice: "635",
            iconAddCart: false,

          },
        ],

        productblocktwo: [{
            img: "https://www.bread.com.tw/media/catalog/product/cache/1/small_image/480x480/3914c5c7d0046eba129d91d064aba61b/0/4/04-florida-0865__1.jpg",
            title: "【日本 IRIS】拍打雙氣旋偵測除蟎清淨機 HEPA13 銀離子(送集塵盒 )",
            link: "#",
            pricestyle: "button-old",
            price: "3,590",
            oldprice: "635",
            priceunit: "包",
            pricetext: "美廉價",
            iconAddCart: false,
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
            link: "#",
            pricestyle: "button-old",
            price: "3,590",
            oldprice: "635",
            priceunit: "包",
            pricetext: "美廉價",
            iconAddCart: false,
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
            link: "#",
            pricestyle: "button-old",
            price: "3,590",
            oldprice: "635",
            priceunit: "包",
            pricetext: "美廉價",
            iconAddCart: false,
            label: [{
              style: 'flag',
              text: '限量',
              number: '10',
              unit: "包"
            }, ]

          },
          {
            img: "https://www.bread.com.tw/media/catalog/product/cache/1/small_image/480x480/3914c5c7d0046eba129d91d064aba61b/0/4/04-florida-0865__1.jpg",
            title: "【日本 IRIS】拍打雙氣旋偵測除蟎清淨機 HEPA13 銀離子(送集塵盒 )",
            link: "#",
            pricestyle: "button-old",
            price: "3,590",
            oldprice: "635",
            priceunit: "包",
            pricetext: "美廉價",
            iconAddCart: false,
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
            link: "#",
            pricestyle: "button-old",
            price: "3,590",
            oldprice: "635",
            priceunit: "包",
            pricetext: "美廉價",
            iconAddCart: false,
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
            link: "#",
            pricestyle: "button-old",
            price: "3,590",
            oldprice: "635",
            priceunit: "包",
            pricetext: "美廉價",
            iconAddCart: false,
            label: [{
              style: 'flag',
              text: '限量',
              number: '10',
              unit: "包"
            }, ]

          },
        ],

        carousel: [{
            img: require('../../home/assets/c-banner.jpg'),
          },
          {
            img: require('../../home/assets/c-banner.jpg'),
          },
        ]
      }
    },
    // window.innerWidth
    computed: {
      SixProductShow: function () {
        const show = this.productblock
        const col = this.carouselproduct.column
        if (col == '3') {
          if (this.carouselproduct.click == '1') {
            return show.slice(0, 6)
          } else if (this.carouselproduct.click == '2') {
            return show.slice(6, 12)
          } else {
            return show.slice(12, 18)
          }
        } else if (col == '2') {
          if (window.innerWidth <= 568) {
            return this.productblocktwo.slice(0, 6)
          } else if (this.carouselproduct.click == '1') {
            return this.productblocktwo.slice(0, 2)
          } else if (this.carouselproduct.click == '2') {
            return this.productblocktwo.slice(2, 4)
          } else if (this.carouselproduct.click == '3') {
            return this.productblocktwo.slice(4, 6)
          } else {
            return this.productblocktwo.slice(0, 6)
          }
        } else if (col == '1-5') {
          if (this.carouselproduct.click == '1') {
            return show.slice(0, 4)
          } else if (this.carouselproduct.click == '2') {
            return show.slice(4, 8)
          } else {
            return show.slice(8, 12)
          }
        }

        return show

      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>