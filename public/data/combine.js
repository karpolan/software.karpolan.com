/**
 * Combines "schema.json" files from all subfolders into singe "all.json" files as array of objects
 */
const glob = require('glob');
const fs = require('fs');

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
}); // glob()

