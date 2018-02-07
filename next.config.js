const path = require('path')
const fs = require('fs')

const getWorksPages = () => {
  const worksFolder = path.resolve(__dirname, 'pages', 'works')
  const works = {}

  fs.readdirSync(worksFolder).forEach((file) => {
    if (!file.endsWith('.js')) return
    const work = `/works/${file.slice(0, -3)}`
    works[work] = { page: work }
  })

  return works
}

module.exports = {
  exportPathMap: () => ({
    '/': { page: '/' },
    ...getWorksPages()
  })
}
