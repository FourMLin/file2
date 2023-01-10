<template>
<div class="g-form-item" :class="{'is-error' : status == 'error'}" v-if="type == 'normal'">
    <form class="g-input-type">
      <input :type="Inputtype" ref="input" :placeholder="text" :value="valueinner">
      <div class="g-right-things">
        <span class="material-icons g-icons"
          onclick="var input = this.parentElement.previousElementSibling; input.value = ''; input.focus();"
          v-if="Inputtype == 'text'">highlight_off</span>
        <span class="material-icons g-icons" v-else-if="Inputtype == 'password'" @click="showPassword()">{{visibility}}</span>
      </div>
    </form>
    <div class="g-under-input" v-if="under">
      <form class="g-under-checkbox" v-if="underbox">
        <input type="checkbox">
        <span>記住我的資料</span>
      </form>
      <span class="g-input-tip">{{tip}}</span>
    </div>

  </div>
  <div class="g-form-item" :class="{'is-error' : status == 'error'}" v-else-if="type == 'innerwords'">
    <form class="g-input-type is-innerwords" :data-text="text">
      <input :type="Inputtype" ref="input" :placeholder="ErrorValue()">
      <div class="g-right-things">
        <span class="material-icons is-error" v-if="status == 'error'">error</span>
        <span class="material-icons is-correct" v-else-if="status == 'checked'">check</span>
        <template v-else></template>
        <div class="g-input-btn-group" v-if="innerBtn">
          <div class="g-btn g-btn-big" :class="{'g-btn-main' : btnclick , 'g-btn-gray' : !btnclick ,}" @click="btnclick = !btnclick">{{VerifyCode()}}</div>
        </div>
        <span class="material-icons g-icons"
          onclick="var input = this.parentElement.previousElementSibling; input.value = ''; input.focus();"
          v-else-if="Inputtype == 'text'">highlight_off</span>
        <span class="material-icons g-icons" v-if="Inputtype == 'password'" @click="showPassword()">{{visibility}}</span>
        <!-- <span class="material-icons" v-if="Inputtype == 'date'">calendar_today</span> -->
      </div>
    </form>
    <div class="g-under-input" v-if="under">
      <form class="g-under-checkbox" v-if="underbox">
        <input type="checkbox">
        <span>記住我的資料</span>
      </form>
      <span class="g-input-tip">{{tip}}</span>
    </div>

  </div>
  <div class="g-form-item" v-else-if="type == 'check'">
    <label :class="{'g-radiobtn' : Inputtype == 'radio', 'g-checkbtn' : Inputtype == 'checkbox'}">
      <input :type="Inputtype" :class="{'is-check' : style == 'check'}" :id="radioId" :name="radioId" value=""
        :checked="clicked">
      <span class="g-check-text" :for="radioId">{{text}}</span>
      <div class="g-check-img">
        <img :src="img" alt="">
      </div>
      <input type="text" class="g-check-input" v-if="write">
      <template v-else></template>
    </label>
  </div>

  <div class="g-form-item g-btn-input" :class="{'is-error' : status == 'error'}" v-else-if="type == 'btn'">
    <form class="g-input-type g-d-flex">
      <!-- <span class="material-icons g-search-icon">search</span> -->
      <input :type="Inputtype" ref="input" :placeholder="text">
      <div class="g-search-btn"><span>搜尋</span></div>
    </form>

  </div>

  
</template>

<script>
  export default {
    name: 'FormInput',
    props: {
      'type': {
        type: Object,
        required: true,
      },
      'valueinner': {
        type: String,
        required: false,
      },
      'Inputtype': {
        type: String,
        required: false,
        default: 'text'
      },
      'text': {
        type: String,
        required: true,
      },
      'Btntext': {
        type: String,
        required: false,
      },
      'tip': {
        type: String,
        required: false,
      },
      'status': {
        type: Object,
        required: false,
      },
      'errorvalue': {
        type: String,
        required: false,
      },
      'innerBtn': {
        type: Boolean,
        required: false
      },
      'style': {
        type: Object,
        required: false,
      },
      'radioId': {
        type: String,
        required: false,
      },
      'clicked': {
        type: Boolean,
        required: false,
      },
      'name': {
        type: String,
        required: false,
      },
      'under': {
        type: Boolean,
        required: false,
        default: false
      },
      'underbox': {
        type: Boolean,
        required: false,
      },
      'write': {
        type: Boolean,
        required: false,
      },
      'img': {
        type: Object,
        required: false,
      },


    },

    data() {
      return {
        value: '',
        visibility: 'visibility',
        btnclick:true
      }
    },
    methods: {
      ErrorValue() {
        if (this.$props.status == 'error') {
          return this.$props.errorvalue
        }
      },
      VerifyCode() {
        if (!this.btnclick) {
          return this.$props.Btntext = '重新發送(153)'
        } else {
          return this.$props.Btntext
        }
      },
      showPassword() {
        const input = this.previousElement.$ref.input;
        if (input.$props.Inputtype == 'password') {
          input.$props.Inputtype = 'text'
          this.visibility = 'visibility_off'
        } else {
          input.$props.Inputtype = 'password'
          this.visibility = 'visibility'
        }
      }

    },
    computed: {

    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  @import '../../../global/scss/footer.scss';
</style>