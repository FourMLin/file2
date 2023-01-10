<template>
  <div class="g-container h-main-product-wrap">
    <div class="h-main-product h-hot-style">
      <div class="h-main-product-title">
        <a href="#">看更多 <span class="material-icons">chevron_right</span></a>
      </div>
      <div class="h-main-product-body g-product-block-row">
        <ProductBlock :content="productblock" :column="'1'" :style="styleObject" />
      </div>
    </div>

    <div class="h-main-product h-limit-style">
      <div class="h-main-product-title">
        倒數 <span class="h-limit-count">3</span> 天
      </div>
      <div class="h-main-product-body g-product-block-row">
        <ProductBlock :content="productblocktwo" :column="'2'" />
      </div>
    </div>
  </div>

</template>

<script>
  import ProductBlock from '../../global/components/ProductBlock.vue'
  export default {
    name: 'MainProduct',
    components: {
      ProductBlock
    },
    data() {
      return {
        styleObject: {
          flex: '1 0 100%',
          'max-width': '100%',
        },
        productblock: [{
            img: "https://cs-d.ecimg.tw/items/DBAR4EA90077GPZ/000001_1478525812.jpg",
            title: "【日本 IRIS】拍打雙氣旋偵測除蟎清淨機 HEPA13 銀離子(送集塵盒 )",
            link: '#',
            pricestyle: "button",
            pricetext: "折後價",
            price: "3,590",
            priceunit: "包",
            iconAddCart: false,
            iconHeart: false,
            label: [{
                style: 'flag',
                text: '限量',
                number: '10',
                unit: "包"
              },
              {
                style: 'origin',
                text: '美廉價',
                number: '200',
                unit: ""
              },

              {
                style: 'average',
                text: '',
                number: '10.5',
                unit: "包"
              }
            ]
          },
          {
            img: "https://cs-d.ecimg.tw/items/DBAR4EA90077GPZ/000001_1478525812.jpg",
            title: "【日本 IRIS】拍打雙氣旋偵測除蟎清淨機 HEPA13 銀離子(送集塵盒 )",
            link: '#',
            pricestyle: "button",
            pricetext: "折後價",
            price: "3,590",
            priceunit: "包",
            iconAddCart: false,
            iconHeart: false,
            label: [{
                style: 'flag',
                text: '限量',
                number: '10',
                unit: "包"
              },
              {
                style: 'origin',
                text: '美廉價',
                number: '200',
                unit: ""
              },
              {
                style: 'ticket',
                text: '',
                number: 'KE6H01K',
                unit: ""
              },
              // {
              //   style:'point',
              //   text:'',
              //   number:'300',
              //   unit:""
              // },
              // {
              //   style:'average',
              //   text:'',
              //   number:'10.5',
              //   unit:"包"
              // }
            ]
          },
        ],

        productblocktwo: [{
            img: "https://cs-d.ecimg.tw/items/DBAR4EA90077GPZ/000001_1478525812.jpg",
            title: "【日本 IRIS】拍打雙氣旋偵測除蟎清淨機 HEPA13 銀離子(送集塵盒 )",
            link: '#',
            pricestyle: "old-price",
            oldprice: "635",
            price: "3,590",
            iconAddCart: false,
            iconHeart: false,
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
            link: '#',
            pricestyle: "old-price",
            oldprice: "635",
            price: "3,590",
            iconAddCart: false,
            iconHeart: false,
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
            link: '#',
            pricestyle: "old-price",
            oldprice: "635",
            price: "3,590",
            iconAddCart: false,
            iconHeart: false,
            label: [{
              style: 'flag',
              text: '限量',
              number: '10',
              unit: "包"
            }, ]
          }, {
            img: "https://cs-d.ecimg.tw/items/DBAR4EA90077GPZ/000001_1478525812.jpg",
            title: "【日本 IRIS】拍打雙氣旋偵測除蟎清淨機 HEPA13 銀離子(送集塵盒 )",
            link: '#',
            pricestyle: "old-price",
            oldprice: "635",
            price: "3,590",
            iconAddCart: false,
            iconHeart: false,
            label: [{
              style: 'flag',
              text: '限量',
              number: '10',
              unit: "包"
            }, ]
          },
        ]
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>