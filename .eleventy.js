module.exports = function (eleventyConfig) {
    eleventyConfig.addWatchTarget("./_tmp/styles/main.css");
    eleventyConfig.addPassthroughCopy({
      "./_tmp/styles/main.css": "./styles/main.css", 
      "./images": "./images", 
      "./scripts/main.js": "./scripts/main.js",
      "./favicon.png": "./favicon.png",
      "./apple-touch-icon.png": "./apple-touch-icon.png",
      "./opengraph-1200x630.png" : "./opengraph-1200x630.png"
    }, "jpg", "png", "svg");
  };
  