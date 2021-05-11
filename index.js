const chunk = require('lodash.chunk')
const path = require('path')
const { readdir } = require('./libs/fs.util')
const ImageUtil = require('./libs/image.util')

const uploadMultipleFiles = async (imageDir) => {
  const files = await readdir(imageDir)
  const fileChunks = chunk(files, 5)
  // upload every 5 files
  fileChunks.forEach((chunks) => {
    Promise
      //
      .all(chunks.map((filePath) => new ImageUtil(path.join(imageDir, filePath)).upload()))
      .then((statuses) => {
        // emit event that upload complete
        console.log('statuses: ', statuses)
      })
  })
}

uploadMultipleFiles('./images').then(console.log)
