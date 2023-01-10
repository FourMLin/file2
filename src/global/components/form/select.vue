<template>
<div class="g-form-item"  v-if="type == 'normal'">
    <form class="g-select-type">
      <select>
        <option value="0">{{text}}</option>
        <option value="" v-for="item in select" :key="item">{{item}}</option>
      </select>
      <div class="g-right-things">
        <span class="material-icons is-error" v-if="status == 'error'">error</span>
        <span class="material-icons is-correct" v-else-if="status == 'checked'">check</span>
        <template v-else></template>
      </div>
      <div class="select-arrow"></div>

    </form>
    <span class="g-input-tip">{{tip}}</span>
  </div>
  <div class="g-form-item"  v-else-if="type == 'innerwords'">
    <form class="g-select-type is-innerwords" :data-text="text">
      <select>
        <option value="" v-for="item in select" :key="item">{{item}}</option>
      </select>
      <div class="g-right-things">
        <span class="material-icons is-error" v-if="status == 'error'">error</span>
        <span class="material-icons is-correct" v-else-if="status == 'checked'">check</span>
        <template v-else></template>
      </div>
      <div class="select-arrow"></div>
    </form>
    <span class="g-input-tip">{{tip}}</span>
  </div>
</template>

<script>
  export default {
    name: 'FormSelect',
    props:{
      'select': {
        type: Object,
        required: true,
      },
      'text': {
        type: String,
        required: true,
      },
      'type': {
        type: String,
        required: true,
      },
    },
    data() {
      return {

      }
    },
    methods: {

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  @import '../../../global/scss/footer.scss';
</style>