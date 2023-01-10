<template>
  <div class="c-buy-list c-order-product" v-for="item in cartproduct" :key="item">
    <div class="c-buy-list-title"
      :class="{'is-pink' : item.type == 'room-trans', 'is-nile' : item.type == 'low-trans','is-green' : item.type == 'room-shop','is-purple' : item.type == 'low-shop','is-brown' : item.type == 'room-store','is-yellow' : item.type == 'low-store','is-gray' : item.type == 'cupon'}">
      <div class="c-name c-title-text">品名</div>
      <div class="c-info">
        <div class="c-price c-title-price">單價</div>
        <div class="c-col c-title-number">數量</div>
        <div class="c-col c-title-cupon">優惠碼</div>
        <div class="c-col c-title-gold">會員點數</div>
        <div class="c-col c-title-point">美廉幣</div>
        <div class="c-col c-title-count">小計</div>
        <div class="c-col c-title-state">訂單狀態</div>
      </div>

    </div>
    <div class="c-buy-list-content" v-for="p in item.products" :key="p" :class="{'is-out-stock' : p.state == true}">
      <div class="c-name" @click="p.open = !p.open">
        <div class="c-buy-img">
          <img :src="p.img" alt="">
        </div>
        <div class="c-buy-name">
          <div class="c-name-text">{{p.name}}</div>
          <div class="c-name-tip">{{p.tip}}</div>
        </div>
      </div>
      <div class="c-info" :class="{'active': p.open == true, '': p.open == false}">
        <div class="c-price c-buy-price">
          <span>單價</span>${{p.price}}
        </div>
        <div class="c-col c-buy-number"><span>數量</span>1</div>
        <div class="c-col c-buy-cupon"><span>優惠碼</span>-20</div>
        <div class="c-col c-buy-gold"><span>會員點數</span>-20</div>
        <div class="c-col c-buy-point"><span>美廉幣</span>-20</div>
        <div class="c-col c-buy-count"><span>小計</span>339</div>
        <div class="c-col c-buy-state"><span>訂單狀態</span>待付款</div>
      </div>


    </div>
  </div>

</template>

<script>
  export default {
    name: 'OrderPage',
    props: {
      'cartproduct': {
        type: Object,
        require: false
      },

    },
    components: {},
    data() {
      return {

      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>