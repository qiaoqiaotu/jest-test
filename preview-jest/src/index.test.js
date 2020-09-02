const index_module = require('./index')
const { add, mul } = index_module
// toBe ===
test('测试 add 普通数字', () => {
  expect(add(1, 2)).toBe(3)
})
test('测试 add 字符串和数字', () => {
  expect(add('1', 2)).toBe('12')
})
// test('测试 add 数组 ', () => {
//   let arr1 = [1, 2]
//   let arr2 = [3, 4]
//   expect(add(arr1, arr2)).toEqual([1, 2, 3, 4])
// })
test('测试 mul', () => {
  expect(mul(1, 2)).toBe(2)
})
// 对象使用 toEqual
test('toEqual 匹配器', () => {
  const obj = { num: 18 }
  expect(obj).toEqual({ num: 18 })
})
test('toBeNull 匹配器', () => {
  const obj = null
  expect(obj).toBeNull()
})
test('toBeUndefined 匹配器', () => {
  const obj = undefined
  expect(obj).toBeUndefined()
})
