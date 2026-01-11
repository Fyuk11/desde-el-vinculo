// .eleventy.js - VERSIÓN FINAL CON gray-matter
const fs = require("fs");
const path = require("path");

// Solo intentar cargar gray-matter si está disponible
let matter;
try {
  matter = require("gray-matter");
  console.log("gray-matter cargado correctamente");
} catch (error) {
  console.log("gray-matter no disponible, usando parser simple");
  matter = null;
}

// Carga Markdown con gray-matter o fallback
function loadMarkdownFile(file) {
  const filepath = path.join(file);
  if (!fs.existsSync(filepath)) {
    console.log("Archivo no encontrado:", filepath);
    return {};
  }
  
  const raw = fs.readFileSync(filepath, "utf8");
  
  // Usar gray-matter si está disponible
  if (matter) {
    try {
      const parsed = matter(raw);
      console.log("Archivo parseado con gray-matter, datos:", Object.keys(parsed.data));
      return {
        ...parsed.data,
        body: parsed.content,
        _file: filepath,
      };
    } catch (error) {
      console.error("Error con gray-matter:", error.message);
    }
  }
  
  // Fallback: parser simple
  console.log("Usando parser simple para:", filepath);
  const frontmatterMatch = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  
  if (frontmatterMatch) {
    const frontmatter = frontmatterMatch[1];
    const content = frontmatterMatch[2];
    
    // Parseo MUY simple - solo valores directos
    const data = {};
    frontmatter.split('\n').forEach(line => {
      const colonIndex = line.indexOf(':');
      if (colonIndex > -1) {
        const key = line.substring(0, colonIndex).trim();
        let value = line.substring(colonIndex + 1).trim();
        
        // Quitar comillas
        if (value.startsWith('"') && value.endsWith('"')) {
          value = value.slice(1, -1);
        } else if (value.startsWith("'") && value.endsWith("'")) {
          value = value.slice(1, -1);
        }
        
        data[key] = value;
      }
    });
    
    return {
      ...data,
      body: content,
      _file: filepath,
    };
  }
  
  return {
    body: raw,
    _file: filepath,
  };
}

module.exports = function(eleventyConfig) {
  // Datos globales - CARGAR landing-demo.md
  eleventyConfig.addGlobalData("landing", () => {
    console.log("Cargando landing-demo.md...");
    const data = loadMarkdownFile("./content/landings/landing-demo.md");
    console.log("Datos cargados. Keys principales:", Object.keys(data).filter(k => k !== 'sections'));
    if (data.sections) {
      console.log("Número de secciones:", Array.isArray(data.sections) ? data.sections.length : "no es array");
    }
    return data;
  });

  // Cargar también datos del sitio desde JSON
  eleventyConfig.addGlobalData("site", () => {
    try {
      const sitePath = path.join(__dirname, "_data/site.json");
      if (fs.existsSync(sitePath)) {
        return JSON.parse(fs.readFileSync(sitePath, "utf8"));
      }
    } catch (error) {
      console.error("Error cargando site.json:", error);
    }
    
    // Datos por defecto
    return {
      name: "Educando desde el Vínculo",
      url: "https://desdeelvinculo.netlify.app",
      verification: "YnLXtKM4-w28fluN7Jt4KjhZyx0626GhNaNaI8vtAmA"
    };
  });

  // Filtro de fecha simple
  eleventyConfig.addFilter("date", () => {
    return new Date().toISOString().split('T')[0];
  });

  // Passthrough de assets
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("admin");

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