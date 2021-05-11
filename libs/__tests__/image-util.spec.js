const { test, expect } = require('@jest/globals')
const ImageUtil = require('../image.util')

describe('ImageUtil', () => {
  describe('New Instance', () => {
    test('should create new instance of ImageUtil', () => {
      const image = new ImageUtil('new.png')

      expect.assertions(3)
      expect(image).toBeInstanceOf(ImageUtil)
      expect(image.filename).toEqual('new.png')
      expect(image.widths).toEqual([100, 200, 512])
    })

    test('throw error if filename is not provided', () => {
      expect(() => {
        new ImageUtil()
      }).toThrowError()
    })

    test('should use provided widths instead of default widths', () => {
      const image = new ImageUtil('new.png', [1024])

      expect(image.widths).toEqual([1024])
    })
  })
})
