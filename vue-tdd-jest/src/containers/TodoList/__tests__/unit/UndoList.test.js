import { shallowMount } from "@vue/test-utils";
import UndoList from "../../components/UndoList.vue";
import { findTestWrapper } from "../../../../utils/testUtils";
describe("UndoList 组件", () => {
  it("list 参数为 []，count 为 0，且列表没有内容", () => {
    const wrapper = shallowMount(UndoList, {
      propsData: {
        list: []
      }
    });
    const countElem = findTestWrapper(wrapper, "count"); // 待办事项数
    const listItems = findTestWrapper(wrapper, "item"); // 待办列表
    expect(countElem.at(0).text()).toEqual("0");
    expect(listItems.length).toEqual(0);
  });

  it("list 参数为 [1, 2, 3]，count 为 3，且列表有内容，且存在删除按钮", () => {
    const wrapper = shallowMount(UndoList, {
      propsData: {
        list: [
          { status: "div", value: 1 },
          { status: "div", value: 2 },
          { status: "div", value: 3 }
        ]
      }
    });
    const countElem = findTestWrapper(wrapper, "count"); // 待办事项数
    const listItems = findTestWrapper(wrapper, "item"); // 待办列表
    const deleteButtons = findTestWrapper(wrapper, "delete-button");
    expect(countElem.at(0).text()).toEqual("3");
    expect(listItems.length).toEqual(3);
    expect(deleteButtons.length).toEqual(3);
  });
  it("list 删除按钮被点击时，向外触发删除事件", () => {
    const wrapper = shallowMount(UndoList, {
      propsData: {
        list: [
          { status: "div", value: 1 },
          { status: "div", value: 2 },
          { status: "div", value: 3 }
        ]
      }
    });
    const deleteButtons = findTestWrapper(wrapper, "delete-button").at(1);
    deleteButtons.trigger("click");
    expect(wrapper.emitted().delete).toBeTruthy();
  });
  it("列表项被点击时，向外触发 status 事件", () => {
    const wrapper = shallowMount(UndoList, {
      propsData: {
        list: [
          { status: "div", value: 1 },
          { status: "div", value: 2 },
          { status: "div", value: 3 }
        ]
      }
    });
    const deleteButtons = findTestWrapper(wrapper, "item").at(1);
    deleteButtons.trigger("click");
    expect(wrapper.emitted().status).toBeTruthy();
  });

  it("列表项显示两个正常列表内容，一个输入框", () => {
    const wrapper = shallowMount(UndoList, {
      propsData: {
        list: [
          { status: "input", value: 1 },
          { status: "div", value: 2 },
          { status: "div", value: 3 }
        ]
      }
    });
    const inputElem = findTestWrapper(wrapper, "input");
    expect(inputElem.at(0).element.value).toBe("1");
    expect(inputElem.length).toBe(1);
  });

  it("输入框失去焦点时，向外出发 reset 事件", () => {
    const wrapper = shallowMount(UndoList, {
      propsData: {
        list: [
          { status: "input", value: 1 },
          { status: "div", value: 2 },
          { status: "div", value: 3 }
        ]
      }
    });
    const inputElem = findTestWrapper(wrapper, "input").at(0);
    inputElem.trigger("blur");
    expect(wrapper.emitted().reset).toBeTruthy();
  });

  it("输入框变化时，向外出发 change 事件", () => {
    const wrapper = shallowMount(UndoList, {
      propsData: {
        list: [
          { status: "input", value: 1 },
          { status: "div", value: 2 },
          { status: "div", value: 3 }
        ]
      }
    });
    const inputElem = findTestWrapper(wrapper, "input").at(0);
    inputElem.trigger("change", { value: 123, index: 1 });
    expect(wrapper.emitted().change).toBeTruthy();
  });
});
