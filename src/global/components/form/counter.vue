<template>
  <div class="g-count">
    <button class="g-count-btn g-count-btn-left" v-on:click="subtract()">-</button>
    <input type="text" v-model="count">
    <button class="g-count-btn g-count-btn-right" v-on:click="add()">+</button>
  </div>
</template>

<script>
  export default {
    name: 'FormCounter',

    data() {
      return {
        count: 0
      }
    },
    methods: {
      add: function () {
        this.count++;
      },
      subtract: function () {
        if (this.count > 0) {
          this.count -= 1;
        }
      }
    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  @import '../../../global/scss/footer.scss';
</style>