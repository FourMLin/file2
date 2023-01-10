<template>
  <div class="g-product-block-wrap"
    :class="{'': column == '0', 'g-col-12': column == '1', 'g-col-6': column == '2','g-col-4 g-col-sm-6': column == '3', 'g-col-3 g-col-sm-6': column == '4', 'g-col-2-5 g-col-sm-6': column == '5' , 'g-col-12-s g-col-sm-6': column == '1-5'}"
    v-for="item in content" :key="item" :style="style">
    <div class="g-product-block">
      <div class="g-block-img" :class="{'is-alchol': imgtype == 'alchol'}">
        <a :href="item.link">
          <img :src="item.img" alt="">
        </a>
      </div>
      <div class="g-block-content">
        <div class="g-block-title">
          <a :href="item.link">{{item.title}}</a>
        </div>
        <div class="g-block-feature">
          <div class="g-block-info">
            <!-- 元件使用 -->
            <!-- label內的style: 橘色旗子:flag, 灰色文字:origin 優惠券:ticket, 點數:point, 平均價格:average -->
            <div class="g-block-label" v-for="l in item.label" :key="l">
              <div class="g-block-label-item g-label-flag" v-if="l.style == 'flag'"><span>{{l.text}} {{l.number}}
                  {{l.unit}}</span></div>
              <div class="g-block-label-item g-label-originprice" v-else-if="l.style == 'origin'">
                {{l.text}}：${{l.number}}
              </div>
              <div class="g-block-label-item g-label-ticket" v-else-if="l.style == 'ticket'"><span
                  class="material-icons">confirmation_number</span> {{l.number}}</div>
              <div class="g-block-label-item g-label-point" v-else-if="l.style == 'point'"><span
                  class="material-icons">confirmation_number</span> {{l.number}} {{l.unit}}</div>
              <div class="g-block-label-item g-label-average" v-else-if="l.style == 'average'">
                平均每{{l.unit}}：${{l.number}}
              </div>
            </div>

          </div>
          <div class="g-block-bottom">
            <!-- 元件使用 -->
            <!-- pricestyle: 紫色按鈕:button, 紫色按鈕+灰色文字:button-old, 新舊價格:old-price, 點數:point, 優惠價格:sale-price, 優惠價格精簡版:g-price-text-s -->
            <div class="g-block-price">
              <a class="g-btn-price" href="#" v-if="item.pricestyle == 'button'">
                <span class="g-price-text">{{item.pricetext}}</span>
                <span class="g-price-number">$ <b>{{item.price}}</b> /{{item.priceunit}}</span>
              </a>
              <div class="g-btn-price-old" v-else-if="item.pricestyle == 'button-old'">
                <p class="g-price-old">市價：${{item.oldprice}}</p>
                <a class="g-btn-price" href="#">
                  <span class="g-price-text">{{item.pricetext}}</span>
                  <span class="g-price-number">$ <b>{{item.price}}</b> /{{item.priceunit}}</span>
                </a>
              </div>

              <div class="g-text-price" v-else-if="item.pricestyle == 'old-price'">
                <s class="g-price-old">${{item.oldprice}}</s>
                <span class="g-price-number">$<b>{{item.price}}</b></span>
              </div>
              <div class="g-text-price" v-else-if="item.pricestyle == 'sale-price'">
                <span class="g-price-old">市價：${{item.oldprice}}</span>
                <p class="g-price-number g-price-main"><span class="g-price-text-s">{{item.pricetext}}</span>
                  <span>$</span> <b class="g-price-big">{{item.price}} <span>/{{item.priceunit}}</span></b></p>
              </div>
              <div class="g-text-price" v-else-if="item.pricestyle == 'only-price'">
                <span class="g-price-number">$<b>{{item.price}}</b></span>
              </div>
            </div>
            <div class="g-block-icons" v-if="iconshow == true">
              <span class="g-block-icons-item g-icon-cart"
                :class="{'material-icons': item.iconAddCart, 'material-icons-outlined': !item.iconAddCart}"
                @click="item.iconAddCart=!item.iconAddCart">shopping_cart</span>
              <span class="g-block-icons-item material-icons g-icon-heart" @click="item.iconHeart=!item.iconHeart"
                :class="{'active' : item.iconHeart, 'none' : !item.iconHeart}">favorite_border</span>
            </div>
            <!-- <template v-else></template> -->
          </div>
        </div>

      </div>
    </div>


  </div>



</template>

<script>
  export default {
    name: 'ProductBlock',
    props: {
      'column': {
        type: Number,
        required: true,
      },
      'content': {
        type: Object,
        required: true,
      },
      'style': {
        type: Object,
        required: true,
      },
      'imgtype': {
        type: Object,
        required: true,
      },
      'iconshow': {
        type: Boolean,
        required: false,
      },
    },
    data() {
      return {
        iconAddCart: false,
        iconHeart: false
      }
    },
  }
</script>

<style scoped>

</style>