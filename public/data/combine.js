/**
 * Combines "schema.json" files from all subfolders into singe "all.json" files as array of objects
 */
const glob = require('glob');
const fs = require('fs');

/**
 * Returns capitalized version (Upper first char for every word) of the given string
 * @param {String} s - String To Capitalize
 */
const capitalizeString = (s) => {
  // return s.replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); });
  return s.replace(/(?:^|\s)\S/g, (a) => a.toUpperCase());
};

/**
 * Build "all.json" file with array of all "/abc-xyz/schema.json" files
 */
glob(`${__dirname}/**/schema.json`, {}, (error, files) => {
  const allObjects = [];

  if (error) {
    console.error('glob error: ', error);
    return false;
  }

  files.map((fileName, index) => {
    console.log('Processing "%s" file...', fileName);
    const fileData = fs.readFileSync(fileName);
    const schema = JSON.parse(fileData);
    // console.log(index, fileName, schema);

    let id = fileName.substring(0, fileName.indexOf('/schema.json'));
    id = id.substring(id.lastIndexOf('/') + 1, Number.MAX_VALUE);
    // console.log(`id: ${id}`);

    allObjects.push({
      id,
      schema,
    });

    // Write generic "index.html" to product folder
    const indexFileName = fileName.replace('schema.json', 'index.html');
    const htmlContent = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>${schema.name}</title>
    <meta
      name="description"
      content="${schema.name} software product is created by Anton Karpenko (aka KARPOLAN)"
    />
  </head>
  <body>
    <h1 id="name">${schema.name}</h1>
    <div>
      <p id="desc">${schema.slogan}</p>
      <a id="link" href="${schema.url}">More about ${schema.name} software</a>
      <p id="text">${schema.description}</p>
    </div>
    <script type="application/ld+json">
${JSON.stringify(schema)}
    </script>
  </body>
<html>`;
    fs.writeFile(indexFileName, htmlContent, (err) => {
      if (err) {
        console.error('fs.writeFile error: ', err);
        return false;
      }
      return true;
    });
  }); // files.map()

  // Write generic "all.json" to root folder
  fs.writeFile(`${__dirname}/all.json`, JSON.stringify(allObjects), (err) => {
    if (err) {
      console.error('fs.writeFile error: ', err);
      return false;
    }
    return true;
  }); // fs.writeFile()

  console.log('All "schema.json" files successfully combined into "all.json" file');
  return true;
}); // glob('**/schema.json')

/**
 * Build index.html and sitemap.xml files with links to all "/abc-xyz/" folders
 */
glob(`${__dirname}/**/index.html`, {}, (error, files) => {
  const htmlDataItems = []; // for '/data/index.html'
  const xmlDataItems = []; // for '/data/sitempa.xml'
  const xmlRootItems = []; // for '/sitempa.xml'

  if (error) {
    console.error('glob error: ', error);
    return false;
  }

  files.map((fileName, index) => {
    console.log('Linking "%s" file...', fileName);
    let id = fileName.substring(0, fileName.indexOf('/index.html'));
    id = id.substring(id.lastIndexOf('/') + 1, Number.MAX_VALUE);
    if (id !== 'data') {
      // Skipping root folder
      const text = capitalizeString(id.replace(/-/g, ' '));
      htmlDataItems.push(`<li><a href="${id}/index.html">${text}</a></li>`);
      xmlDataItems.push(
        `<url><loc>https://software.karpolan.com/data/${id}/index.html</loc><priority>0.7</priority></url>`
      );
      xmlRootItems.push(`<url><loc>https://software.karpolan.com/${id}/index.html</loc><priority>0.9</priority></url>`);
    }
  }); // files.map()

  // Write "index.html"
  const htmlContent = `<!DOCTYPE html>
<html lang="en">
  <head>
    <title>List of Products with Structured Data</title>
    <meta charset="utf-8">
  </head>
  <body>
    <h1 id="name">All Products</h1>
    <ul>
${htmlDataItems.join('\n')}
    </ul>
  </body>
</html>`;
  fs.writeFile(`${__dirname}/index.html`, htmlContent, (err) => {
    if (err) {
      console.error('fs.writeFile error: ', err);
      return false;
    }
    return true;
  });
  console.log('HTML links to all sub-folders added to "index.html" file');

  // Create Data Sitemap "/data/sitemap.xml"
  const xmlContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
<url><loc>https://software.karpolan.com/data/index.html</loc><priority>0.6</priority></url>
${xmlDataItems.join('\n')}
</urlset>`;
  fs.writeFile(`${__dirname}/sitemap.xml`, xmlContent, (err) => {
    if (err) {
      console.error('fs.writeFile error: ', err);
      return false;
    }
    return true;
  });
  console.log('URL of all sub-folders added to "/data/sitemap.xml" file');

  // Create Root sitemap "/sitemap.xml"
  const xmpRootSitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
<url><loc>https://software.karpolan.com</loc><priority>1.0</priority></url>
<url><loc>https://software.karpolan.com/index.html</loc><priority>1.0</priority></url>
<url><loc>https://software.karpolan.com/contact/index.html</loc><priority>0.3</priority></url>
<url><loc>https://software.karpolan.com/about/index.html</loc><priority>0.4</priority></url>
${xmlRootItems.join('\n')}
</urlset>`;
  fs.writeFile(`${__dirname}/../sitemap.xml`, xmpRootSitemap, (err) => {
    if (err) {
      console.error('fs.writeFile error: ', err);
      return false;
    }
    return true;
  });
  console.log('URL of all products added to "/sitemap.xml" file');

  return true;
}); // glob('**/index.html')
