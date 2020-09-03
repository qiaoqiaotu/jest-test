import { shallowMount } from "@vue/test-utils";
import TodoList from "../../TodoList.vue";
import Header from "../../components/Header.vue";
const todoList = shallowMount(TodoList);
const data = todoList.vm.$data;
it("TodoList 初始化时，undoList 应该为空", () => {
  expect(data.undoList).toEqual([]);
});

it("TodoList 监听到 Header 的 add 事件时，会增加一个内容", () => {
  const header = todoList.findComponent(Header);
  const content = "coding";
  header.vm.$emit("add", content);
  expect(data.undoList).toEqual([content]);
});
