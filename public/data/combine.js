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
//	return s.replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); });
	return s.replace(/(?:^|\s)\S/g, (a) => a.toUpperCase() );
};

/**
 * Build "all.json" file with array of all "/abc-xyz/schema.json" files
 */
glob('**/schema.json', {}, function (err, files) {
	let allObjects = [];

	if (err) {
		console.error('glob error: ', err);
		return false;
	}

	files.map((fileName, index) => {
		console.log('Processing "%s" file...', fileName);
		const fileData = fs.readFileSync(fileName); 
		const newObject = JSON.parse(fileData);
		//console.log(index, fileName, newObject);

		allObjects.push({
			id: fileName.substring(0, fileName.indexOf("/")),
			schema: newObject
		});
	}); // files.map()

	fs.writeFile('all.json', JSON.stringify(allObjects), function(err) {
		if (err) {
				console.error('fs.writeFile error: ', err);
				return false;
		}
	}); // fs.writeFile()

	console.log('All "schema.json" files sucessfuly combined into "all.json" file');
 	return true;
}); // glob('**/schema.json')


/**
 * Build index.html and sitemap.xml files with links to all "/abc-xyz/" folders 
 */
glob('**/index.html', {}, function (err, files) {
	const htmlItems = [];
	const xmlItems = [];

	if (err) {
		console.error('glob error: ', err);
		return false;
	}

	files.map((fileName, index) => {
		console.log('Linking "%s" file...', fileName);
		const link = fileName.substring(0, fileName.indexOf("/"));
		if (link !== '') { // Skipping root folder
			const text = capitalizeString( link.replace(/-/g, ' ') );
			htmlItems.push(`<li><a href="${link}/">${text}</a></li>`);
			xmlItems.push(`<url><loc>https://software.karpolan.com/data/${link}/</loc><priority>0.4</priority></url>`);
		}
	}); // files.map()

	// Write "index.html"
	const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
</head>
<body>
	<h1 id="name">All Products</h1>
	<ul>
${htmlItems.join('\n')}
	</ul>
</body>
</html>`;
	fs.writeFile('index.html', htmlContent, function(err) {
		if (err) {
				console.error('fs.writeFile error: ', err);
				return false;
		}
	});
	console.log('HTML links to all sub-folders added to "index.html" file');

	// Write "sitemap.xml"
	const xmlContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
<url><loc>https://software.karpolan.com/data/</loc><priority>0.6</priority></url>
${xmlItems.join('\n')}
</urlset>`
	fs.writeFile('sitemap.xml', xmlContent, function(err) {
		if (err) {
				console.error('fs.writeFile error: ', err);
				return false;
		}
	});
	console.log('URL of all sub-folders added to "sitemap.xml" file');

	return true;
}); // glob('**/index.html')

