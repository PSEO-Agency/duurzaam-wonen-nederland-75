
module.exports = {
  source: "dist",
  destination: "dist",
  crawl: true,
  include: ["/"],
  userAgent: "ReactSnap",
  headless: true,
  waitFor: 1000,
  fixWebpackChunksIssue: false,
  removeBlobs: true,
  minifyHtml: {
    collapseBooleanAttributes: true,
    collapseWhitespace: true,
    decodeEntities: true,
    keepClosingSlash: true,
    sortAttributes: true,
    sortClassName: true
  }
};
