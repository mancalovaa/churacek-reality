module.exports = function(eleventyConfig) {
    // Výchozí výstupní složka je: _site
    // Zkopírovat images/ do _site/images
    eleventyConfig.addPassthroughCopy("images");
    // Zkopírovat css/ to _site/css/
    eleventyConfig.addPassthroughCopy("css");

    eleventyConfig.addFilter("randomLimit", (arr, limit, currPage) => {
      // Filters out current page
      const pageArr = arr.filter((page) => page.url !== currPage);
    
      // Randomizes remaining items
      pageArr.sort(() => {
        return 0.5 - Math.random();
      });
    
      // Returns array items up to limit
      return pageArr.slice(0, limit);
    });

    eleventyConfig.addFilter("limit", function (arr, limit) {
      return arr.slice(0, limit);
    });
    // ...necháme, co už v konfiguraci je, a přidáme:
    return {
      // možné formáty šablon
      templateFormats: ["njk", "html", "md"],
      // jako šablonovací jazyk zvolíme Nunjucks`
      markdownTemplateEngine: "njk",
      htmlTemplateEngine: "njk",
      dataTemplateEngine: "njk",
    }

  };
  