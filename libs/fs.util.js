const fs = require('fs')

const readdir = (pathDir) =>
  new Promise((resolve, reject) => {
    fs.readdir(pathDir, (err, files) => {
      if (err) {
        return reject(`Error finding files: ${err.message}`)
      }
      resolve(files)
    })
  })

module.exports = {
  readdir,
}
