<template>
  <div>
    <Header @add="addUndoItem" />
    <UndoList
      :list="undoList"
      @delete="handleDeleteItem"
      @status="changeStatus"
      @reset="resetStatus"
      @change="changeItemValue"
    />
  </div>
</template>

<script>
import Header from "./components/Header";
import UndoList from "./components/UndoList";
export default {
  name: "TodoList",
  components: {
    Header,
    UndoList
  },
  props: {},
  data() {
    return {
      undoList: []
    };
  },
  methods: {
    addUndoItem(item) {
      this.undoList.push({ status: "div", value: item });
    },
    handleDeleteItem(index) {
      this.undoList.splice(index, 1);
    },
    changeStatus(index) {
      this.undoList = this.undoList.map((item, itemIndex) => {
        if (itemIndex === index) {
          return { status: "input", value: item.value };
        } else {
          return { status: "div", value: item.value };
        }
      });
    },
    resetStatus() {
      this.undoList = this.undoList.map((item, itemIndex) => ({
        status: "div",
        value: item.value
      }));
    },
    changeItemValue(obj) {
      this.undoList[obj.index].value = obj.value;
    }
  }
};
</script>

<style scoped lang="stylus"></style>
