test('测试 测试代码生成', () => {
  const TestNow = require('../index')
  const src = new TestNow()
  const ret = src.getTestSource('function', 'class')
  console.log('ret = ', ret)
})
test('测试文件名生成', () => {
  const TestNow = require('../index')
  const src = new TestNow()
  const ret = src.getTestFileName('/abc/class.js')
  expect(ret).toEqual('/abc/__test__/class.spec.js')
})
