<template>
  <div class="c-deliver" v-if="type == 'home'">
    <div class="c-deliver-title">配送方式—宅配</div>
    <div class="c-deliver-form">
      <form class="c-deliver-form-col c-orderer">
        <div class="c-deliver-form-title">
          <p>訂購人資料</p>
          <FormInput :Inputtype="'checkbox'" :type="'check'" :text="'同會員資料'" :style="'check'" />
        </div>
        <div class="c-deliver-form-item">
          <p class="g-col-1 g-col-sm-3">訂購人：</p>
          <FormInput class="g-col-3 g-col-sm-4" :type="'normal'" :status="'checked'" :text="'此為付款人聯繫資訊'" />
          <FormInput class="g-col-3 g-col-sm-5" :type="'normal'" :status="'checked'" :text="'付款人電話'" />
        </div>
      </form>
      <form class="c-deliver-form-col c-receiver">
        <div class="c-deliver-form-title">
          <p>收件人資料</p>
          <FormInput :Inputtype="'checkbox'" :type="'check'" :text="'同會員資料'" :style="'check'" />
        </div>
        <div class="c-deliver-form-item">
          <p class="g-col-1 g-col-sm-3">收件人：</p>
          <FormInput class="g-col-3 g-col-sm-4" :type="'normal'" :status="'checked'" :text="'此為物流運送時聯繫資訊'" />
          <FormInput class="g-col-3 g-col-sm-5" :type="'normal'" :status="'checked'" :text="'物流運送時聯繫電話'" />
        </div>
        <div class="c-deliver-form-item">
          <p class="g-col-1 g-col-sm-3">收件地址：</p>
          <FormSelect class="g-col-2 g-col-sm-4" :type="'normal'" :select="selectdeliver" :text="'台北市'" />
          <FormSelect class="g-col-2 g-col-sm-5" :type="'normal'" :select="selectdeliver" :text="'110中正區'" />
          <FormInput class="g-col-7 g-col-sm-9" :type="'normal'" :status="'checked'" :text="'物流運送時聯繫電話'" />
        </div>
        <div class="c-con-alert c-alert-yellow"><span class="material-icons">campaign</span> <span
            class="c-con-alert-text">差$1,234，可使用宅配到府，免運費</span></div>
        <div class="c-deliver-form-item">
          <p class="g-col-1 g-col-sm-3">希望配送：</p>
          <FormSelect class="g-col-3 g-col-sm-9" :type="'normal'" :select="selectdeliver" :text="'西元年/月/日'" />
        </div>
      </form>
    </div>
  </div>
  <div class="c-deliver" v-else-if="type == 'shop'">
    <div class="c-deliver-title">配送方式—店取</div>
    <div class="c-deliver-form">
      <form class="c-deliver-form-col c-orderer">
        <div class="c-deliver-form-title">
          <p>訂購人資料</p>
          <FormInput :Inputtype="'checkbox'" :type="'check'" :text="'同會員資料'" :style="'check'" />
        </div>
        <div class="c-deliver-form-item">
          <p class="g-col-1 g-col-sm-3">訂購人：</p>
          <FormInput class="g-col-3 g-col-sm-4" :type="'normal'" :status="'checked'" :text="'此為付款人聯繫資訊'" />
          <FormInput class="g-col-3 g-col-sm-5" :type="'normal'" :status="'checked'" :text="'付款人電話'" />
        </div>
      </form>
      <div class="g-d-flex c-deliver-form-wrap">
        <form class="c-deliver-form-col c-receiver">
          <div class="c-deliver-form-title">
            <p>取件人資料</p>
            <FormInput :Inputtype="'checkbox'" :type="'check'" :text="'同會員資料'" :style="'check'" />
          </div>
          <div class="c-deliver-form-item">
            <p class="g-col-1 g-col-sm-3">取件人：</p>
            <FormInput class="g-col-4 g-col-sm-4" :type="'normal'" :status="'checked'" :text="'商品到貨取件人'" />
            <FormInput class="g-col-4 g-col-sm-5" :type="'normal'" :status="'checked'" :text="'此為接收到貨簡訊之手機號碼'" />
          </div>
          <div class="c-deliver-form-item">
            <p class="g-col-1 g-col-sm-3">門市選擇：</p>
            <FormSelect class="g-col-3 g-col-sm-4" :type="'normal'" :select="selectdeliver" :text="'台北市'" />
            <FormSelect class="g-col-3 g-col-sm-5" :type="'normal'" :select="selectdeliver" :text="'110中正區'" />
            <FormSelect class="g-col-4 g-col-sm-9" :type="'normal'" :select="selectdeliver" :text="'蘆洲長安店'" />
          </div>
          <div class="c-con-alert c-alert-white"><span class="material-icons-round">storefront</span><span
              class="c-con-alert-text">蘆洲長安店｜07:00~24:00｜(02)2288-2846｜新北市蘆洲區長安街79號</span></div>
          <div class="c-deliver-form-item">
            <p class="g-col-1 g-col-sm-3">希望配送：</p>
            <FormSelect class="g-col-4 g-col-sm-9" :type="'normal'" :select="selectdeliver" :text="'西元年/月/日'" />
          </div>
        </form>
        <iframe class="g-google-map"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14459.190358178159!2d121.5207651!3d25.0409423!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a9729f13e59d%3A0x8398ab0c37b6418!2z5Y-w5YyX6LuK56uZ!5e0!3m2!1szh-TW!2stw!4v1668415799117!5m2!1szh-TW!2stw"
          width="600" height="300" style="border:0;" allowfullscreen="" loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>

    </div>
  </div>

  <div class="c-deliver" v-else-if="type == 'store'">
    <div class="c-deliver-title">配送方式—超商取</div>
    <div class="g-d-flex c-deliver-form-wrap c-store-delivery">
      <div class="c-deliver-form ">
        <form class="c-store c-deliver-form-col">
          <div class="c-deliver-form-item g-d-flex">
            <p class="g-col-1 g-col-sm-12">超商選擇：</p>
            <div class="c-deliver-input-group g-col-11 g-col-sm-9">
              <div class="c-deliver-radio">
                <FormInput class="g-col-sm-6" :Inputtype="'radio'" :radioId="'help'" :status="'error'" :type="'check'" :text="'7-11'"
                  :style="'check'" :clicked="true" />
                <FormInput class="g-col-sm-6" :Inputtype="'radio'" :radioId="'help'" :status="'error'" :type="'check'" :text="'全家'"
                  :style="'check'" :clg-col-sm-3icked="true" />
                <FormInput class="g-col-sm-6" :Inputtype="'radio'" :radioId="'help'" :status="'error'" :type="'check'" :text="'萊爾富'"
                  :style="'check'" :clicked="true" />
                <FormInput class="g-col-sm-6" :Inputtype="'radio'" :radioId="'help'" :status="'error'" :type="'check'" :text="'OK Mart'"
                  :style="'check'" :clicked="true" />
                <FormInput class="g-col-sm-6" :Inputtype="'radio'" :radioId="'help'" :status="'error'" :type="'check'" :text="'蝦皮店到店'"
                  :style="'check'" :clicked="true" />
              </div>
              <div class="g-row">
                <FormSelect class="g-col-4 g-col-sm-6" :type="'normal'" :select="selectdeliver" :text="'台北市'" />
                <FormSelect class="g-col-4 g-col-sm-6" :type="'normal'" :select="selectdeliver" :text="'110中正區'" />
                <FormSelect class="g-col-4 g-col-sm-12" :type="'normal'" :select="selectdeliver" :text="'蘆洲長安店'" />
              </div>
              <div class="c-con-alert c-alert-white"><span class="material-icons-round">storefront</span><span
              class="c-con-alert-text">蘆洲長安店｜07:00~24:00｜(02)2288-2846｜新北市蘆洲區長安街79號</span></div>
            </div>

          </div>
        </form>
        <form class="c-deliver-form-col c-orderer">
          <div class="c-deliver-form-title">
            <p>訂購人資料</p>
            <FormInput :Inputtype="'checkbox'" :type="'check'" :text="'同會員資料'" :style="'check'" />
          </div>
          <div class="c-deliver-form-item">
            <p class="g-col-1 g-col-sm-3">訂購人：</p>
            <FormInput class="g-col-4 g-col-sm-4" :type="'normal'" :status="'checked'" :text="'此為付款人聯繫資訊'" />
            <FormInput class="g-col-4 g-col-sm-5" :type="'normal'" :status="'checked'" :text="'付款人電話'" />
          </div>
        </form>
        <form class="c-deliver-form-col c-receiver">
          <div class="c-deliver-form-title">
            <p>取件人資料</p>
            <FormInput :Inputtype="'checkbox'" :type="'check'" :text="'同會員資料'" :style="'check'" />
          </div>
          <div class="c-deliver-form-item">
            <p class="g-col-1 g-col-sm-3">取件人：</p>
            <FormInput class="g-col-4 g-col-sm-4" :type="'normal'" :status="'checked'" :text="'商品到貨取件人'" />
            <FormInput class="g-col-4 g-col-sm-5" :type="'normal'" :status="'checked'" :text="'此為接收到貨簡訊之手機號碼'" />
          </div>
        </form>


      </div>
      <iframe class="g-google-map"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14459.190358178159!2d121.5207651!3d25.0409423!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a9729f13e59d%3A0x8398ab0c37b6418!2z5Y-w5YyX6LuK56uZ!5e0!3m2!1szh-TW!2stw!4v1668415799117!5m2!1szh-TW!2stw"
        width="600" height="300" style="border:0;" allowfullscreen="" loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  </div>

</template>

<script>
  import FormInput from '../../global/components/form/input.vue'
  import FormSelect from '../../global/components/form/select.vue'
  export default {
    name: 'DeliverChoice',
    props: {
      'type': {
        type: Object,
        required: true,
      },
    },
    components: {
      FormInput,
      FormSelect
    },
    data() {
      return {
        selectdeliver: ['2022/05/16', '2022/05/18'],

      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>