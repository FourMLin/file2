<template>
  <div class="g-process" v-if="type == 'basic'">
    <ul>
      <li data-step="1" :class="{'active' : active == '1'}">選購清單</li>
      <li data-step="2" :class="{'active' : active == '2'}">商品確認</li>
      <li data-step="3" :class="{'active' : active == '3'}">結帳</li>
      <li data-step="4" :class="{'active' : active == '4'}">訂單完成</li>
    </ul>
  </div>

  <div class="g-process-track" v-else-if="type == 'track'">
    <ul>
      <li class="" :class="{'active' : t.done}" v-for="t in track" :key="t">
        <div class="g-process-circle">
          <span class="material-icons" v-if="t.done">check_circle</span>
          <span class="material-icons" v-else>check_circle_outline</span>
        </div>
        
        <div>{{t.text}}</div>
        <div class="g-process-date">{{t.date}}</div>
        <div class="g-process-time">{{t.time}}</div>
      </li>
    </ul>
  </div>

</template>

<script>
  export default {
    name: 'ProcessStep',
    props: {
      'active': {
        type: Object,
        require: false
      },
      'type': {
        type: Object,
        require: true
      },
      'done': {
        type: Boolean,
        require: false
      },
      'track': {
        type: Object,
        require: true
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