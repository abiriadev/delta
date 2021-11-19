//const axios = require('axios').default;
const axios = require('axios');
const cheerio = require('cheerio')
const fs = require('fs')
const path = require('path')
const url = require('url')
const {
  URL
} = url

// Optionally the request above could also be done as
const id = 3

let c = 0
const port = 52929

const domain = `127.0.0.1:${port}`
const targetPath = 'select'

let currentUrl = url.format({
  protocol: 'http',
  host: domain,
  pathname: path.normalize(targetPath),
})

//process.exit(21)

const target = {
  params: {
    end: id + 4
  },
  isUseId: false,
  toURL() {
    return this.isUseId ? `${currentUrl}/${id}` : currentUrl.toString()
  },
}

axios.get(target.toURL())
  .then(response => {
    //console.log(response.data)

    const $ = cheerio.load(response.data)

    $('.image').each(function(item) {
      const src = $(this).find('.img').attr('src').trim()

      console.log('src:', src);

      let srcPath = ''

      if (src[0] === '/') {
        srcPath = url.format(Object.assign(
          url.parse(currentUrl),
          (obj => {
            for (const key in obj) {
              if (!obj[key]) delete obj[key]
            }
            return obj
          })(url.parse(src))
        ))
        console.log(srcPath);
      }

      axios({
          method: 'get',
          url: srcPath,
          responseType: 'stream',
        })

        .then(response => {
          console.log('\n\n=========\n\n');

          console.log(response.data);
          response.data.pipe(fs.createWriteStream(
            `./box/img${++c}.png`

          ))

        })
        .catch(console.error)
    })
  })
  .catch(error => {
    console.log("ERROR!!!\n\n");
    console.error(error)
  })