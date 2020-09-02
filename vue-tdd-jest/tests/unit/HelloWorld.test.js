import { shallowMount } from "@vue/test-utils"; // 浅渲染
import HelloWorld from "@/components/HelloWorld.vue";

describe("测试 HelloWorld 组件", () => {
  it("renders props.msg when passed", () => {
    const msg = "wang qiaoling";
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg }
    });
    // 断言 wrapper 的内容为 msg
    expect(wrapper.text()).toMatch(msg);
    // 断言 wrapper 中的 .mmm 选择器一共有一个
    expect(wrapper.findAll(".mmm").length).toBe(1);
    // 断言 wrapper 中的 propsData 的内容为 msg
    expect(wrapper.props("msg")).toEqual(msg);
  });
  // 快照测试可以迅速发现组件中 DOM 的变化
  it("组件渲染正常", () => {
    const msg = "wang qiaoling";
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg }
    });
    expect(wrapper).toMatchSnapshot();
  });
});
