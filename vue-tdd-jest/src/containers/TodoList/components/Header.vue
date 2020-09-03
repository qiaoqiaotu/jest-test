<template>
  <div class="header">
    <div class="header-content">
      TodoList
      <input class="header-input"
             data-test="input"
             placeholder="请输入待办事项..."
             v-model="inputValue"
             @keyup.enter="addTodoItem" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
  },
  data () {
    return {
      inputValue: ''
    }
  },
  methods: {
    addTodoItem () {
      if (!this.inputValue) return
      this.$emit('add', this.inputValue)
      this.inputValue = ''
    }
  }
}
</script>

<style scoped lang="stylus">
.header
  background #666
  line-height 60px
  .header-content
    width 600px
    margin 0 auto
    color #FFF
    font-size 20px
    .header-input
      float right
      width 360px
      line-height 24px
      margin-top 16px
      outline none
      color #333
      text-indent 10px
</style>
