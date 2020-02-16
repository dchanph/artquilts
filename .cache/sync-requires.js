const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/doreenchan/Desktop/artquilts-client/.cache/dev-404-page.js"))),
  "component---src-pages-contact-js": hot(preferDefault(require("/Users/doreenchan/Desktop/artquilts-client/src/pages/contact.js"))),
  "component---src-pages-craft-details-js": hot(preferDefault(require("/Users/doreenchan/Desktop/artquilts-client/src/pages/craftDetails.js"))),
  "component---src-pages-crafts-js": hot(preferDefault(require("/Users/doreenchan/Desktop/artquilts-client/src/pages/crafts.js"))),
  "component---src-pages-donate-js": hot(preferDefault(require("/Users/doreenchan/Desktop/artquilts-client/src/pages/donate.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/doreenchan/Desktop/artquilts-client/src/pages/index.js"))),
  "component---src-pages-myaccount-js": hot(preferDefault(require("/Users/doreenchan/Desktop/artquilts-client/src/pages/myaccount.js")))
}

