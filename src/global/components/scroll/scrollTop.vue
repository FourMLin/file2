<template>
  <div class="h-fix-record">
    <div class="h-record-line">
      <a href="#">
        <picture>
          <source srcset="../../../global/assets/mobile-join.png" media="(max-width: 568px)">
          <img src="../../../global/assets/join.png" alt="">
        </picture>
      </a>
    </div>
    <div class="h-record-menu">
      <div class="h-record-produt">
        <div class="h-record-fill h-record-title">瀏覽紀錄</div>
        <ul class="h-record-product">
          <li class="h-record-produc-item" v-for="record in recordlist.slice(0,3)" :key="record">
            <a :href="record.link">
              <img :src="record.img" alt="">
            </a>
          </li>
        </ul>
      </div>
      <div class="h-record-fill h-record-cart">
        <a href="#">購物車</a>
      </div>
      <div class="h-record-fill h-record-payment">
        <a href="#">結帳</a>
      </div>
    </div>
    <div class="h-scrolltotop" @click="scrollTop">
      <span class="material-icons">arrow_drop_up</span>
      <span class="h-scrolltotop-text">TOP</span>
    </div>
    <picture class="h-scrolltotop-m" @click="scrollTop">
      <source srcset="../../../global/assets/mobile-up.png" media="(max-width: 568px)">
      <img src="../../../global/assets/mobile-up.png" alt="">
    </picture>

  </div>

</template>

<script>
  export default {
    name: 'scrollTop',

    data() {
      return {
        //瀏覽紀錄
        recordlist: [{
          link: '#',
          img: 'https://www.bread.com.tw/media/catalog/product/cache/1/small_image/480x480/3914c5c7d0046eba129d91d064aba61b/0/4/04-florida-0865__1.jpg'
        }, {
          link: '#',
          img: 'https://d2ug13roilyhpx.cloudfront.net/image/productitem/o/5i/q54r1e5ifc7olos2bp.jpg'
        }, {
          link: '#',
          img: 'https://www.bread.com.tw/media/catalog/product/cache/1/small_image/480x480/3914c5c7d0046eba129d91d064aba61b/0/4/04-florida-0865__1.jpg'
        }, {
          link: '#',
          img: 'https://d2ug13roilyhpx.cloudfront.net/image/productitem/o/5i/q54r1e5ifc7olos2bp.jpg'
        }, ],
      }
    },
    methods: {
      scrollTop() {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth'
        })
      },

    },

  }
</script>
<style lang="scss">
</style>