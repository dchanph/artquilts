const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/doreenchan/Desktop/artquilts/.cache/dev-404-page.js"))),
  "component---src-pages-contact-js": hot(preferDefault(require("/Users/doreenchan/Desktop/artquilts/src/pages/contact.js"))),
  "component---src-pages-craft-js": hot(preferDefault(require("/Users/doreenchan/Desktop/artquilts/src/pages/craft.js"))),
  "component---src-pages-donate-js": hot(preferDefault(require("/Users/doreenchan/Desktop/artquilts/src/pages/donate.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/doreenchan/Desktop/artquilts/src/pages/index.js"))),
  "component---src-pages-myaccount-js": hot(preferDefault(require("/Users/doreenchan/Desktop/artquilts/src/pages/myaccount.js")))
}

