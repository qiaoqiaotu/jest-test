const path = require('path')
module.exports = class TestNow {
  /**
   * 生成测试文件名
   * @param {*} filename 代码文件名
   */
  getTestFileName(filename) {
    const dirName = path.dirname(filename)
    const baseName = path.basename(filename)
    const extName = path.extname(filename)
    const testName = baseName.replace(extName, `.spec${extName}`)
    return path.format({
      root: dirName + '/__test__/',
      base: testName,
    })
  }
  /**
   * 生成测试代码
   * @param {*} methodName
   * @param {*} classFile
   * @param {*} isClass
   */
  getTestSource(methodName, classFile, isClass = false) {
    return `
      test('${'测试 ' + methodName}', () => {
        const ${isClass ? '{' + methodName + '}' : methodName} = require('${
      '../' + classFile
    }')

      })
    `
  }
}
