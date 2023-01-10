<template>
  <!-- 最上面粉紅色那一條 -->
  <header>
    <div class="h-fixed">
      <nav class="h-pc-menu" v-if="windowWidth > 568">
        <ul class="g-container">
          <li class="h-home">
            <a href="#">
              <span></span>
              <span>回首頁</span>
            </a>
          </li>
          <li>
            <router-link to="/signin">登入 / 註冊</router-link>
          </li>
          <li>
            <router-link to="/memberdata">會員中心</router-link>
          </li>
          <li>
            <router-link to="/checkorder">查詢訂單</router-link>
          </li>
          <li>
            <a href="#">追蹤商品</a>
          </li>
          <li>
            <a href="#">優惠券</a>
          </li>
          <li class="h-cart">
            <a href="#">
              <router-link to="/cart">購物車</router-link>
              <span class="h-cart-number">1</span>
            </a>
          </li>
        </ul>
      </nav>
      <nav class="h-mobile-mactionbar" v-else-if="windowWidth <= 568 && mobileshow">
        <ul>
          <li>
            <a href="#">
              <span class="material-icons-outlined">home</span>
              <p>首頁</p>
            </a>
          </li>
          <li>
            <a href="#">
              <span class="material-icons-outlined">schedule</span>
              <p>瀏覽紀錄</p>
            </a>
          </li>
          <li>
            <a href="#">
              <span class="material-icons-outlined">shopping_cart</span>
              <p>購物車</p>
            </a>
          </li>
          <li>
            <a href="#">
              <span class="material-icons-outlined">favorite_border</span>
              <p>追蹤商品</p>
            </a>
          </li>
          <li>
            <a href="#">
              <span class="material-icons-outlined">account_circle</span>
              <p>會員中心</p>
            </a>
          </li>
        </ul>
      </nav>
      <HeaderLogo :count="count" :marquee="marquee" />
    </div>

  </header>
</template>

<script>
  import HeaderLogo from '../../global/components/header-logo.vue'
  export default {
    name: 'HeaderCom',
    components: {
      HeaderLogo
    },
    props: {
      'marquee': {
        type: Boolean,
        required: true,
      },
      'mobileshow': {
        type: Boolean,
        required: false,
      },
    },

    data() {
      return {
        count: [{
            img: "https://assets-au-01.kc-usercontent.com/e095818a-c2b1-025d-b9b3-a502057ea75e/e84744b0-795a-4301-84e4-98dbab320f36/guidebanner.jpg"
          },
          {
            img: "https://assets-au-01.kc-usercontent.com/e095818a-c2b1-025d-b9b3-a502057ea75e/e84744b0-795a-4301-84e4-98dbab320f36/guidebanner.jpg"
          },

        ],
        windowWidth: window.innerWidth
      }
    },
    mounted() {
      window.onresize = () => {
        this.windowWidth = window.innerWidth
      }
    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  @import '../../global/scss/header.scss';
</style>