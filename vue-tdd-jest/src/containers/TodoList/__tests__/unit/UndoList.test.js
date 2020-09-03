import { shallowMount } from '@vue/test-utils'
import UndoList from '../../components/UndoList.vue'
import { findTestWrapper } from '../../../../utils/testUtils'

it('UndoList 参数为 []，count 为 0，且列表没有内容', () => {
  const wrapper = shallowMount(UndoList, {
    propsData: {
      list: []
    }
  })
  const countElem = findTestWrapper(wrapper, 'count') // 待办事项数
  const listItems = findTestWrapper(wrapper, 'item') // 待办列表
  expect(countElem.at(0).text()).toEqual('0')
  expect(listItems.length).toEqual(0)
})

it('UndoList 参数为 [1, 2, 3]，count 为 3，且列表有内容，且存在删除按钮', () => {
  const wrapper = shallowMount(UndoList, {
    propsData: {
      list: [1, 2, 3]
    }
  })
  const countElem = findTestWrapper(wrapper, 'count') // 待办事项数
  const listItems = findTestWrapper(wrapper, 'item') // 待办列表
  const deleteButtons = findTestWrapper(wrapper, 'delete-button')
  expect(countElem.at(0).text()).toEqual('3')
  expect(listItems.length).toEqual(3)
  expect(deleteButtons.length).toEqual(3)
})
it('UndoList 删除按钮被点击时，向外触发删除事件', () => {
  const wrapper = shallowMount(UndoList, {
    propsData: {
      list: [1, 2, 3]
    }
  })
  const deleteButtons = findTestWrapper(wrapper, 'delete-button').at(1)
  deleteButtons.trigger('click')
  expect(wrapper.emitted().delete).toBeTruthy()
})
