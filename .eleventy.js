// .eleventy.js - Versión SIMPLIFICADA sin dependencias externas
const fs = require("fs");
const path = require("path");

// Detectar producción
const isProduction = process.env.NODE_ENV === 'production' || 
                     process.env.CONTEXT === 'production' ||
                     process.env.NODE_ENV === 'production';

// Carga Markdown SIMPLIFICADA (sin gray-matter, sin markdown-it)
function loadMarkdownFile(file) {
  const filepath = path.join(file);
  if (!fs.existsSync(filepath)) return {};
  
  const raw = fs.readFileSync(filepath, "utf8");
  
  // Parseo básico de frontmatter (sin gray-matter)
  const frontmatterMatch = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  
  if (frontmatterMatch) {
    const frontmatter = frontmatterMatch[1];
    const content = frontmatterMatch[2];
    
    // Parseo simple de YAML
    const data = {};
    frontmatter.split('\n').forEach(line => {
      const colonIndex = line.indexOf(':');
      if (colonIndex > -1) {
        const key = line.substring(0, colonIndex).trim();
        const value = line.substring(colonIndex + 1).trim();
        data[key] = value;
      }
    });
    
    return {
      ...data,
      body: content, // Devolvemos el contenido como está
      _file: filepath,
    };
  }
  
  return {
    body: raw,
    _file: filepath,
  };
}

module.exports = function(eleventyConfig) {
  // Datos globales
  eleventyConfig.addGlobalData("landing", () =>
    loadMarkdownFile("./content/landings/landing-demo.md")
  );

  // Filtro de fecha SIMPLIFICADO (sin Luxon)
  eleventyConfig.addFilter("date", (dateObj, format = "yyyy-MM-dd") => {
    const date = new Date(dateObj);
    if (format === "yyyy-MM-dd") {
      return date.toISOString().split('T')[0];
    }
    return date.toLocaleDateString();
  });

  // Passthrough de assets y CMS
  eleventyConfig.addPassthroughCopy({ "assets": "assets" });
  eleventyConfig.addPassthroughCopy({ "admin": "admin" });

  // Minificación HTML SOLO en producción (opcional)
  if (isProduction) {
    try {
      const htmlmin = require("html-minifier-terser");
      eleventyConfig.addTransform("htmlmin", async (content, outputPath) => {
        if (outputPath && outputPath.endsWith(".html")) {
          return await htmlmin.minify(content, {
            collapseWhitespace: true,
            removeComments: true,
            minifyJS: true,
            minifyCSS: true,
          });
        }
        return content;
      });
    } catch (e) {
      console.log("HTML minifier no disponible, continuando sin minificación");
    }
  }

  // Datos globales adicionales
  eleventyConfig.addGlobalData("version", Date.now());
  eleventyConfig.addGlobalData("build", { year: new Date().getFullYear() });
  eleventyConfig.addGlobalData("site", {
    name: "Landing Demo",
    url: "https://landing-demo.netlify.app",
    robots: "index,follow",
    og_image: "/assets/images/default-og.png",
    twitter_image: "/assets/images/default-twitter.png",
    twitter_site: "@miusuario",
    verification: "ApWt3O30nl49iN-AGMI1hcr91sNwY0BtyH2wvV0xJQs",
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