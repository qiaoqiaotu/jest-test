<template>
  <div>
    <Header @add="addUndoItem" />
    <UndoList :list="undoList" @delete="handleDeleteItem" />
  </div>
</template>

<script>
import Header from './components/Header'
import UndoList from './components/UndoList'
export default {
  name: 'TodoList',
  components: {
    Header,
    UndoList
  },
  props: {},
  data () {
    return {
      undoList: []
    }
  },
  methods: {
    addUndoItem (item) {
      this.undoList.push(item)
    },
    handleDeleteItem (index) {
      this.undoList.splice(index, 1)
    }
  }
}
</script>

<style scoped lang="stylus"></style>
