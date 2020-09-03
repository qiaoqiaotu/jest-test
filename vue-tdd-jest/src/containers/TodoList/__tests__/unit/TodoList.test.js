import { shallowMount } from '@vue/test-utils'
import TodoList from '../../TodoList.vue'
import UndoList from '../../components/UndoList.vue'
const todoList = shallowMount(TodoList)
const data = todoList.vm.$data
describe('TodoList 组件', () => {
  it('初始化时，undoList 应该为空', () => {
    expect(data.undoList).toEqual([])
  })

  it('调用 addUndoItem 时，UndoList列表中会增加一个', () => {
    todoList.setData({
      undoList: [1, 2, 3]
    })
    todoList.vm.addUndoItem(4)
    expect(data.undoList).toEqual([1, 2, 3, 4])
  })

  it('使用 UndoList 组件，应该传递 list 参数', () => {
    const undoList = todoList.findComponent(UndoList)
    const list = undoList.props('list')
    expect(list).toBeTruthy()
  })

  it('调用 handleDeleteItem 方法时，UndoList列表中会减少一个', () => {
    todoList.setData({
      undoList: [1, 2, 3]
    })
    todoList.vm.handleDeleteItem(1)
    expect(data.undoList).toEqual([1, 3])
  })
})
