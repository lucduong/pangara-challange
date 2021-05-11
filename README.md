# pangara-challange

Quite nice challenge from Pangara's client

> Refactor this short code following principles S.O.L.I.D.
> Note:
>
> - Code purpose is to upload an image
> - URI: http://example.com/upload

## Original code

```js
fs.readdir(fileSource, function (err, files) {
  if (err) {
    console.log('Error finding files: ' + err)
  } else {
    files.forEach(function (filename, fileIndex) {
      console.log(filename)
      gm(fileSource + filename).size(function (err, values) {
        if (err) {
          console.log('Error file size: ' + err)
        } else {
          console.log(filename + ' : ' + values)
          aspect = values.width / values.height
          widths.forEach(
            function (width, widthIndex) {
              height = Math.round(width / aspect)
              console.log('resizing ' + filename + 'to ' + height + 'x' + height)
              this.resize(width, height).write(dest + 'w' + width + '_' + filename, function (err) {
                if (err) console.log('Error writing file: ' + err)
              })
            }.bind(this)
          )
        }
      })
    })
  }
})
```

## Code structure

```bash
├── index.js
├── libs
│   ├── __tests__
│   │   ├── fs-util.spec.js
│   │   └── image-util.spec.js
│   ├── fs.util.js
│   └── image.util.js
├── package.json
└── yarn.lock
```

## Flow

--> index.js -> image.util.js -> fs.util.js

## Caveat

- This is only pseudo code based on the code provided by client
- Not tested yet
- The Unit test is not fully tested, just basic case.
