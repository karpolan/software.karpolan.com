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
async function makeAllJsonInRootAndIndexHtmlInFolders() {
  try {
    const matchingPattern = `${__dirname}/**/schema.json`;
    // console.log(`matchingPattern: ${matchingPattern}`);
    const matchingFiles = await glob(matchingPattern);

    const allObjects = [];
    for (const systemFileName of matchingFiles) {
      const fileName = systemFileName.replace(/\\/g, '/'); // Windows '\' => '/' fix

      const fileData = fs.readFileSync(fileName);
      const schema = JSON.parse(fileData);
      // console.log(index, fileName, schema);

      let id = fileName.substring(0, fileName.indexOf('/schema.json'));
      id = id.substring(id.lastIndexOf('/') + 1);
      console.log('Making "index.html" file in "%s" folder', id);

      allObjects.push({ id, schema });

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
      try {
        fs.writeFileSync(indexFileName, htmlContent);
      } catch (error) {
        console.error('Writing File error:', error);
      }
    } // for (const systemFileName of matchingFiles)

    // Write combined "all.json" to root folder
    console.log('Making "all.json" file');
    try {
      fs.writeFileSync(`${__dirname}/all.json`, JSON.stringify(allObjects));
    } catch (error) {
      console.error('Writing File error:', error);
    }
    console.log('All "schema.json" files successfully combined into "all.json" file');
  } catch (error) {
    console.error('Enumerating Files error:', error);
  }
}

/**
 * Build index.html and sitemap.xml files with links to all "/abc-xyz/" folders
 */
async function makeIndexAndSitemap() {
  try {
    const matchingPattern = `${__dirname}/**/index.html`;
    // console.log(`matchingPattern: ${matchingPattern}`);
    const matchingFiles = await glob(matchingPattern);

    const htmlDataItems = []; // for '/data/index.html'
    const xmlDataItems = []; // for '/data/sitempa.xml'
    const xmlRootItems = []; // for '/sitempa.xml'
    for (const systemFileName of matchingFiles) {
      const fileName = systemFileName.replace(/\\/g, '/'); // Windows '\' => '/' fix

      let id = fileName.substring(0, fileName.indexOf('/index.html'));
      id = id.substring(id.lastIndexOf('/') + 1);
      if (id !== '' && id !== 'data') {
        console.log('Creating links for "%s"', id);

        const text = capitalizeString(id.replace(/-/g, ' '));
        htmlDataItems.push(`<li><a href="/${id}/index.html">${text}</a></li>`);
        xmlDataItems.push(
          `<url><loc>https://software.karpolan.com/data/${id}/index.html</loc><priority>0.7</priority></url>`
        );
        xmlRootItems.push(
          `<url><loc>https://software.karpolan.com/${id}/index.html</loc><priority>0.9</priority></url>`
        );
      }
    }

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
    try {
      fs.writeFileSync(`${__dirname}/index.html`, htmlContent);
    } catch (error) {
      console.error('Writing File error:', error);
    }
    console.log('HTML links to all sub-folders added into "/data/index.html" file');

    // Create Data Sitemap "/data/sitemap.xml"
    const xmlContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
<url><loc>https://software.karpolan.com/data/index.html</loc><priority>0.6</priority></url>
${xmlDataItems.join('\n')}
</urlset>`;
    try {
      fs.writeFileSync(`${__dirname}/sitemap.xml`, xmlContent);
    } catch (error) {
      console.error('Writing File error:', error);
    }
    console.log('URLs of all sub-folders added into "/data/sitemap.xml" file');
  } catch (error) {
    console.error('Enumerating Files error:', error);
  }
}

/**
 * Script execution
 */
async function main() {
  await makeAllJsonInRootAndIndexHtmlInFolders();
  await makeIndexAndSitemap();
}
main();
