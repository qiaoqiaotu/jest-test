import { shallowMount } from "@vue/test-utils";
import Header from "../../components/Header.vue";
import { findTestWrapper } from "../../../../utils/testUtils";
const wrapper = shallowMount(Header); // Header 组件
const input = findTestWrapper(wrapper, "input"); // input 框
const data = wrapper.vm; // data
describe("Header 组件", () => {
  it("样式发生改变时，需要做提示", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("包含一个输入框", () => {
    expect(input.exists()).toBe(true);
  });

  it("输入框发生变化，数据跟随变化", () => {
    input.setValue("qiaoling");
    expect(data.inputValue).toBe("qiaoling");
  });

  it("输入框回车，无内容，无反应", () => {
    input.setValue("");
    input.trigger("keyup.enter");
    expect(wrapper.emitted().add).toBeFalsy();
  });

  it("输入框回车，有内容时，有反应，同时清空 inputValue", () => {
    input.setValue("qiaoling");
    input.trigger("keyup.enter");
    expect(wrapper.emitted().add).toBeTruthy();
    expect(data.inputValue).toBe("");
  });
});
