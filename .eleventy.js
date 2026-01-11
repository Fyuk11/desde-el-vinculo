// .eleventy.js - Versión MÍNIMA FUNCIONAL
module.exports = function(eleventyConfig) {
  // Passthrough de assets
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("admin");
  
  // Datos globales básicos
  eleventyConfig.addGlobalData("site", {
    name: "Educando desde el Vínculo",
    url: "https://desdeelvinculo.netlify.app",
    verification: "YnLXtKM4-w28fluN7Jt4KjhZyx0626GhNaNaI8vtAmA"
  });
  
  // Filtro de fecha SIMPLE
  eleventyConfig.addFilter("date", function(dateObj) {
    return new Date().toISOString().split('T')[0];
  });

  return {
    dir: {
      input: ".",
      includes: "includes",
      output: "_site",
    },
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
  };
};