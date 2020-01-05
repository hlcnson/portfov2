// next.config.js
// const withSass = require('@zeit/next-sass')
// module.exports = withSass()

const withSass = require('@zeit/next-sass')
const withCSS = require('@zeit/next-css')

// Lệnh này giúp Nextjs biết được ứng dụng có sử dụng
// SCSS và CSS
module.exports = withCSS(withSass())
