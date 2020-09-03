<template>
  <div class="undolist">
    <div class="title">
      正在进行
      <span data-test="count" class="count">{{ list.length }}</span>
    </div>
    <ul class="list">
      <li
        class="item"
        v-for="(item, index) in list"
        :key="index"
        data-test="item"
      >
        {{ item }}
        <span
          data-test="delete-button"
          @click="handleDelete(index)"
          class="delete"
        >
          -
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'UndoList',
  props: {
    list: {
      type: Array,
      default: () => []
    }
  },
  components: {},
  methods: {
    handleDelete (index) {
      this.$emit('delete', index)
    }
  }
}
</script>

<style lang="stylus">
.undolist
  width 600px
  margin 0 auto
  .title
    line-height 30px
    font-size 24px
    margin 10px 0
    font-weight bold
    .count
      margin-top 5px
      display block
      float right
      width 20px
      height 20px
      line-height 20px
      text-align center
      background #e6e6e6
      border-radius 10px
      color #000
      font-size 12px
  .list
    list-style none
    .item
      margin-bottom 10px
      line-height 32px
      font-size 14px
      background #FFF
      border-left 5px solid #629A9A
      border-radius 3px
      text-indent 10px
      .delete
        float right
        margin-top 5px
        margin-right 10px
        display block
        width 20px
        height 20px
        line-height 20px
        text-align center
        background #e6e6e6
        border-radius 10px
        color #000
        font-size 12px
        text-indent 0
        cursor pointer
</style>
