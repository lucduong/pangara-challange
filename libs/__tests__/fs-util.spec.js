const path = require('path')
const { readdir } = require('../fs.util')

describe('fs.util', () => {
  test('should through error if the directory does not exist', () => {
    expect(readdir('anydir')).rejects.toBeTruthy()
  })

  test('should return list of files', () => {
    expect(readdir(path.resolve(__dirname))).resolves.toBeTruthy()
  })
})
