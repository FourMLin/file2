<template>
    <!-- 有logo的白色那條 -->
  <div class="h-main ">
    <div class="g-container h-menu-content">
      <div class="h-mobile-menu" :class="{'active' : openAllMenu}">
        <div class="h-mobile-menu-close" v-if="openAllMenu" @click="openAllMenu = false">
          <span class="material-icons">close</span>
        </div>
        <div class="h-mobile-menu-inner" v-else @click="openAllMenu = true">
          <p>全部商品</p>
          <span class="material-icons">menu</span>
        </div>

        <div class="h-mobile-menu-all">
          <div class="h-mobile-menu-main" :class="{'isopen' : c.openSub}" v-for="(c, index) in category"
            :key="index">
            <div class="h-main-text" @click="c.openSub = !c.openSub">
              <p>{{c.text}} </p>
              <span class="material-icons"> expand_more</span>
            </div>
            <ul class="h-mobile-menu-sub">
              <li v-for="s in c.subs" :key="s"><a :href="s.link">{{s.text}}</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="h-main-content">
        <div class="h-logo">
          <router-link to="/" class="h-logo-img"><img src="https://goshopping.simplemart.com.tw/images/logo.png" alt=""></router-link>
        </div>
        <div class="h-search">
          <div class="h-search-input">
            <span class="material-icons">search</span>
            <input type="text" placeholder="請輸入關鍵字或商品">
            <a href="#" class="h-search-btn"><span>搜尋</span></a>
          </div>
          <div class="h-hot">
            <span>熱門商品:</span>
            <ul>
              <li v-for="hot in keyword" :key="hot"><a :href="hot.link"><span>{{hot.text}}</span></a></li>
            </ul>
          </div>
        </div>
        <div class="h-banner">
          <div class="h-banner-img" v-for="c in count" :key="c">
            <img :src="c.img" alt="">
          </div>
        </div>
      </div>

    </div>

  </div>
  <div class="h-marquee h-marquee-pc" v-if="marquee">
    <div class="g-container">
      <span><span class="material-icons">error</span> 本公司不會主動聯繫要求您提供個人金融資訊，也不會要求您操作ATM轉帳或網銀匯款</span>
    </div>
  </div>
  <template v-else></template>
</template>

<script>
import {
        bannercategory
    } from '../../global/js/BannerCategory.js';
  export default {
    name: 'HeaderLogo',
    props: {
      'count': {
        type: Object,
        required: true,
      },
      'menu': {
        type: Boolean,
        required: true,
      },
      'marquee': {
        type: Boolean,
        required: true,
      },
    },
    data() {
      return {
        category: bannercategory,
        openAllMenu: false,
        keyword: [{
          link: "#",
          text: '除溼'
        }, {
          link: "#",
          text: '除溼'
        }, {
          link: "#",
          text: '除溼'
        }, {
          link: "#",
          text: '除溼'
        }, {
          link: "#",
          text: '除溼'
        }, ],
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->