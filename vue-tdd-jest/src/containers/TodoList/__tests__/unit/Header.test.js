import { shallowMount } from "@vue/test-utils";
import Header from "../../components/Header.vue";
import { findTestWrapper } from "../../../../utils/testUtils";
const wrapper = shallowMount(Header); // Header 组件
const input = findTestWrapper(wrapper, "input"); // input 框
const data = wrapper.vm.$data; // data

it("Header 样式发生改变时，提示", () => {
  expect(wrapper).toMatchSnapshot();
});
it("Header 包含一个 input 框", () => {
  expect(input.exists()).toBe(true);
});
it("Header 中的 input 发生变化，数据应该接着变化", () => {
  input.setValue("qiaoling");
  expect(data.inputValue).toBe("qiaoling");
});
it("Header 中的 input 输入回车，无内容时，无反应", () => {
  input.setValue("");
  input.trigger("keyup.enter");
  expect(wrapper.emitted().add).toBeFalsy();
});
it("Header 中的 input 输入回车，有内容时，有反应，同时清空 inputValue", () => {
  input.setValue("qiaoling");
  input.trigger("keyup.enter");
  expect(wrapper.emitted().add).toBeTruthy();
  expect(data.inputValue).toBe("");
});
