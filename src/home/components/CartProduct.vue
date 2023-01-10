<template>
  <div class="c-buy-list c-in-cart" v-for="item in cartproduct" :key="item">
    <div class="c-buy-list-title"
      :class="{'is-pink' : item.type == 'room-trans', 'is-nile' : item.type == 'low-trans','is-green' : item.type == 'room-shop','is-purple' : item.type == 'low-shop','is-brown' : item.type == 'room-store','is-yellow' : item.type == 'low-store','is-gray' : item.type == 'cupon'}">
      <form action="" v-if="checkable">
        <input type="checkbox">
      </form>
      <div class="c-title-text">{{item.titletext}}</div>
      <div class="c-title-col c-title-number">數量</div>
      <div class="c-title-col c-title-gold">使用金幣</div>
      <div class="c-title-col c-title-price">價格</div>
    </div>
    <div class="c-buy-list-content" v-for="p in item.products" :key="p" :class="{'is-out-stock' : p.state == true}">
      <form action="" v-if="checkable">
        <input type="checkbox" :disabled="p.state == true">
      </form>
      <div class="c-buy-img">
        <img :src="p.img" alt="">
      </div>
      <div class="c-buy-name c-buy-pc">
        <div class="c-name-code">{{p.code}}</div>
        <div class="c-name-text">{{p.name}}</div>
        <div class="c-name-tip">{{p.tip}}</div>
      </div>
      <div class="c-buy-number c-buy-pc">
        <FormCounter v-if="p.state == false" />
      </div>
      <div class="c-buy-gold c-buy-pc">
        <template v-if="p.state == false">
          <input type="checkbox">
          <span>{{item.gold}} /枚</span>
        </template>
      </div>
      <div class="c-buy-price c-buy-pc">
        ${{p.price}}
      </div>
      <div class="c-buy-delet c-buy-pc"><span class="material-icons">delete</span></div>
      
      <div class="c-buy-info-mobile">
        <div class="c-buy-name">
          <div class="c-name-code">{{p.code}}</div>
          <div class="c-name-text">{{p.name}}</div>
          <div class="c-name-tip">{{p.tip}}</div>
        </div>
        <div class="g-d-flex">
          <div class="c-buy-gold">
            <template v-if="p.state == false">
              <input type="checkbox">
              <span>{{item.gold}} /枚</span>
            </template>
          </div>
          <div class="c-buy-price">
            ${{p.price}}
          </div>
        </div>
        <div class="g-d-flex">
          <div class="c-buy-number">
            <FormCounter v-if="p.state == false" />
          </div>

          <div class="c-buy-delet"><span class="material-icons">delete</span></div>
        </div>

      </div>

    </div>
  </div>

</template>

<script>
  import FormCounter from '../../global/components/form/counter.vue'
  export default {
    name: 'CartProduct',
    props: {
      'cartproduct': {
        type: Object,
        require: false
      },
      'checkable': {
        type: Boolean,
        require: false
      }

    },
    components: {
      FormCounter,
    },
    data() {
      return {

      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>