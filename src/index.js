const add = (x, y) => {
  const x_type = typeof x
  const y_type = typeof y
  // 普通数字和字符串拼接
  if (x_type !== 'object' && y_type !== 'object') return x + y
  // 如果两个都是数组
  if (x_type instanceof Array && y_type instanceof Array) return x.concat(y)
}
const mul = (x, y) => x * y
module.exports = { add, mul }
