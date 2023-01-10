<template>
  <div class="c-consumption">
    <div class="c-consumption-left c-consumption-left-pc" v-if="show">
      <div class="c-con-point c-con-cupon">
        <span class="c-point-name">優惠碼：</span>
        <form action="">
          <input type="text" placeholder="選擇或輸入優惠碼">
          <div>
            <div class="g-btn g-btn-s g-btn-main g-input-btn" @click="close = true">選用</div>
            <ModalDrop class="is-right" :modaltype="'mini'" v-show="close" @close="close = false">
              <template #content>
                <span class="c-cupon-text">已選擇 <span>商品免運券</span> 優惠碼</span>
                <div class="c-cupon-select">
                  <div class="g-form-item">
                    <label class="g-radiobtn g-d-flex">
                      <div class="c-cupon-head g-main">
                        <p class="c-cupon-use">全站</p>
                        <p class="c-cupon-type">折價券</p>
                        <p class="c-cupon-money">$<span>100</span>元</p>
                      </div>
                      <div class="c-cupon-body">
                        <div class="c-cupon-content">指定商品折抵$1,000(限定商品)</div>
                        <div class="c-cupon-info">
                          <span class="c-cupon-code">GO012345</span>
                          <div class="c-cupon-exp">即將失效：2022/07/31到期</div>
                        </div>
                      </div>
                      <input type="radio" class="is-check" id="cupon" name="cupon" value="">
                    </label>
                  </div>
                </div>


                <div class="c-cupon-select">
                  <div class="g-form-item">
                    <label class="g-radiobtn g-d-flex">
                      <div class="c-cupon-head g-blue">
                        <p class="c-cupon-use">全站</p>
                        <p class="c-cupon-type">折價券</p>
                        <p class="c-cupon-money">$<span>100</span>元</p>
                      </div>
                      <div class="c-cupon-body">
                        <div class="c-cupon-content">指定商品折抵$1,000(限定商品)</div>
                        <div class="c-cupon-info">
                          <span class="c-cupon-code">GO012345</span>
                          <div class="c-cupon-exp">即將失效：2022/07/31到期</div>
                        </div>
                      </div>
                      <input type="radio" class="is-check" id="cupon" name="cupon" value="">
                    </label>
                  </div>
                </div>

                <div class="c-cupon-select">
                  <div class="g-form-item">
                    <label class="g-radiobtn g-d-flex">
                      <div class="c-cupon-head g-green">
                        <p class="c-cupon-use">全站</p>
                        <p class="c-cupon-type">折價券</p>
                        <p class="c-cupon-money">$<span>100</span>元</p>
                      </div>
                      <div class="c-cupon-body">
                        <div class="c-cupon-content">指定商品折抵$1,000(限定商品)</div>
                        <div class="c-cupon-info">
                          <span class="c-cupon-code">GO012345</span>
                          <div class="c-cupon-exp">即將失效：2022/07/31到期</div>
                        </div>
                      </div>
                      <input type="radio" class="is-check" id="cupon" name="cupon" value="">
                    </label>
                  </div>
                </div>

              </template>
              <template #footer>
                <div class="g-modal-cta g-d-wrap g-center">
                  <div class="g-col-4 g-btn g-btn-regular g-btn-main-line " @click="close = false">
                    確認
                  </div>
                </div>
              </template>
            </ModalDrop>
          </div>


        </form>


      </div>
      <div class="c-con-point">
        <span class="c-point-name">美廉幣：</span>
        <span class="is-price">17000點=17000元</span>
        <div class="c-point-input">
          <FormInput :Inputtype="'checkbox'" :type="'check'" :text="'使用美廉幣折抵'" :style="'check'" />
          <form action="">
            <input type="text">
            <span>元</span>
          </form>
        </div>
      </div>
      <div class="c-con-point">
        <span class="c-point-name">會員點數：</span>
        <span class="is-price">17000點=17元</span>
        <div class="c-point-input">
          <FormInput :Inputtype="'checkbox'" :type="'check'" :text="'使用美廉幣折抵'" :style="'check'" />
          <form action="">
            <input type="text">
            <span>元</span>
          </form>
        </div>
        <span class="is-price">(本單最高可折抵20元)</span>
      </div>
    </div>
    <div class="c-consumption-right">
      <div class="c-con-alert c-alert-yellow" v-if="show"><span class="material-icons">campaign</span> <span
          class="c-con-alert-text">差$1,234，可使用宅配到府，免運費</span></div>
      <div class="c-con-money">
        <ul>
          <li class="c-con-money-item">
            <div class="c-money-name">商品總金額：</div>
            <div class="c-money-number">$1,979</div>
          </li>
          <li class="c-con-money-item">
            <div class="c-money-name">運費總金額：</div>
            <div class="c-money-number">$100</div>
          </li>
        </ul>
      </div>
      <div class="c-con-money c-con-miner">
        <ul>
          <li class="c-con-money-item">
            <div class="c-money-name">折扣類型：</div>
            <div class="c-money-number">
              <ul>
                <li>
                  <span class="c-money-number-title">
                    <svg width="16.916" height="10.771" viewBox="0 0 16.916 10.771">
                      <path
                        d="M1.542,4.771H3.083V15.542H1.542Zm4.6,0h.771V15.542H6.146Zm-2.271,0h1.5V15.542h-1.5Zm12.271,0h2.312V15.542H16.146Zm-7.688,0H10V15.542H8.458Zm5.417,0h.75V15.542h-.75Zm-3.1,0H13.1V15.542H10.771Z"
                        transform="translate(-1.542 -4.771)" fill="#f34f59" />
                    </svg> 優惠碼</span>
                  <span>-$100</span>
                </li>
                <li>
                  <span class="c-money-number-title">
                    <svg width="18.334" height="13.334" viewBox="0 0 18.334 13.334">
                      <path
                        d="M14.146,13.335a2.476,2.476,0,0,1-1.781-.719,2.372,2.372,0,0,1-.74-1.76H6.771a2.372,2.372,0,0,1-.739,1.76,2.477,2.477,0,0,1-1.782.719,2.476,2.476,0,0,1-1.781-.719,2.372,2.372,0,0,1-.74-1.76H0v-9.1A1.692,1.692,0,0,1,.511.512,1.691,1.691,0,0,1,1.75,0H13.375V3.335h2.542l2.417,3.208v4.313H16.667a2.372,2.372,0,0,1-.74,1.76A2.476,2.476,0,0,1,14.146,13.335Zm0-3.292a.781.781,0,1,0,.542.229A.743.743,0,0,0,14.146,10.043Zm-9.9,0a.782.782,0,1,0,.542.229A.746.746,0,0,0,4.25,10.043Zm1-3.707v1h1.5v1h1v-1h.5a1,1,0,0,0,1-1v-1a1,1,0,0,0-1-1h-2v-1h3v-1H7.75v-1h-1v1h-.5a1,1,0,0,0-1,1v1a1,1,0,0,0,1,1h2v1Zm8.125-1.251V7.46h3.438L15.042,5.085Z"
                        transform="translate(0 -0.001)" fill="#f34f59" />
                    </svg> 運費</span>
                  <span>-$100</span>
                </li>
                <li>
                  <span class="c-money-number-title"><svg width="15.166"
                      height="15.166" viewBox="0 0 15.166 15.166">
                      <path d="M7.582,15.166a7.379,7.379,0,0,1-2.938-.593A7.723,7.723,0,0,1,.592,10.521,7.379,7.379,0,0,1,0,7.583,7.355,7.355,0,0,1,.592,4.635,7.75,7.75,0,0,1,4.644.593,7.379,7.379,0,0,1,7.582,0,7.355,7.355,0,0,1,10.53.593a7.778,7.778,0,0,1,4.042,4.042,7.355,7.355,0,0,1,.593,2.948,7.379,7.379,0,0,1-.593,2.938,7.75,7.75,0,0,1-4.042,4.052A7.355,7.355,0,0,1,7.582,15.166ZM5,3.43v8.308H6.938V8.992H8.219A2.776,2.776,0,0,0,11,6.211,2.776,2.776,0,0,0,8.219,3.43ZM8.254,7.053H6.938V5.369H8.254a.842.842,0,0,1,0,1.685Z" fill="#f34f59" />
                    </svg> 美廉幣</span>
                  <span>-$100</span>
                </li>
                <li>
                  <span class="c-money-number-title"><svg width="15.166"
                      height="15.166" viewBox="0 0 15.166 15.166">
                      <path d="M7.582,15.166a7.379,7.379,0,0,1-2.938-.593A7.723,7.723,0,0,1,.592,10.521,7.379,7.379,0,0,1,0,7.583,7.355,7.355,0,0,1,.592,4.635,7.75,7.75,0,0,1,4.644.593,7.379,7.379,0,0,1,7.582,0,7.355,7.355,0,0,1,10.53.593a7.778,7.778,0,0,1,4.042,4.042,7.355,7.355,0,0,1,.593,2.948,7.379,7.379,0,0,1-.593,2.938,7.75,7.75,0,0,1-4.042,4.052A7.355,7.355,0,0,1,7.582,15.166ZM5,3.43v8.308H6.938V8.992H8.219A2.776,2.776,0,0,0,11,6.211,2.776,2.776,0,0,0,8.219,3.43ZM8.254,7.053H6.938V5.369H8.254a.842.842,0,0,1,0,1.685Z" fill="#f34f59" />
                    </svg> 會員點數</span>
                  <span>-$100</span>
                </li>
              </ul>

            </div>

          </li>
        </ul>
      </div>
    </div>

  </div>
  



</template>

<script>
  import FormInput from '../../global/components/form/input.vue'
  import ModalDrop from '../../global/components/modal/ModalDrop.vue'
  export default {
    name: 'ConsumptionPage',
    props: {
      'show': {
        type: Boolean,
        require: false
      }
    },
    components: {
      FormInput,
      ModalDrop
    },
    data() {
      return {
        close: false
      }
    }
  }
</script>

<style scoped>

</style>