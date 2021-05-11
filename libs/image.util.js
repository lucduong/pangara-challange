const gm = require('gm')
const path = require('path')

class ImageUtil {
  gm = null
  filename = null
  widths = [100, 200, 512]

  constructor(filename, widths = []) {
    if (!filename) {
      throw new Error('Filename is required')
    }
    this.filename = filename
    if (widths && widths.length) {
      this.widths = widths
    }
    this.gm = gm(this.filename)
  }

  size() {
    return new Promise((resolve, reject) => {
      this.gm = this.gm.size((err, size) => {
        if (err) {
          return reject(err)
        }
        resolve(size)
      })
    })
  }

  write(writeTo) {
    return new Promise((resolve, reject) => {
      this.gm.write(writeTo, (err) => {
        if (err) {
          return reject(err)
        }
        resolve(path.basename(writeTo))
      })
    })
  }

  async upload(toDir) {
    const filename = path.basename(this.filename)
    const size = await this.size()
    const aspect = size.width / size.height
    const sizes = this.widths.map((width) => ({ width, height: Math.round(width / aspect) }))

    // return all uploaded file: w100_filename.ext, w200_filename.ext
    return Promise.all(
      sizes.map(({ width, height }) => {
        const writeTo = path.join(toDir, `w${width}_${filename || Date.now()}`)
        this.gm = this.gm.resize(width, height)
        return this.write(writeTo)
      })
    )
  }
}

module.exports = ImageUtil
