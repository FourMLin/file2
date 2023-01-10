<template>
  <div class="c-buttons">
    <div class="c-con-alert c-alert-yellow" v-if="show"><span class="material-icons">campaign</span> <span
        class="c-con-alert-text">差$1,234，可使用宅配到府，免運費</span>
    </div>

    <div class="c-consumption-bottom" :class="{'pc-show' : total == true, '' : total == false}">
      <div class="c-con-total"><span class="is-pc-title">總付款金額：</span><span>共4項商品</span></div>
      <div class="c-con-total-money">
        <span>總金額:</span>
        <div class="c-total-money-number">$1,799</div>
        <div class="c-total-money-discount">(金幣扣抵3000枚)</div>
      </div>
    </div>

    <div class="g-row g-center c-bottom-btn" v-if="btnshow">
      <div v-for="b in btngroup" :key="b" :class="b.grid">
        <router-link class="g-btn g-btn-s"
          :class="{'g-btn-main-line' : b.style == 'main-line' , 'g-btn-main' : b.style == 'main' }" :to="b.link">
          {{b.text}}
        </router-link>
      </div>
    </div>

  </div>

</template>

<script>
  export default {
    name: 'CartBottom',
    props: {
      'btngroup': {
        type: Object,
        require: false
      },
      'show': {
        type: Boolean,
        require: false
      },

      'btnshow': {
        type: Boolean,
        require: false
      },

      'allshow': {
        type: Boolean,
        require: false
      },

      'total': {
        type: Boolean,
        require: false
      },

    },
    components: {},
    data() {
      return {}
    }
  }
</script>

<style scoped>

</style>