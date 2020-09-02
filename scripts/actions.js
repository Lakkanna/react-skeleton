console.log('action called')
const fs = require('fs');
const path = require('path');


const bumpUpVersion = (versions, majorRelease = false) => {
	let [major, minor, patch] = versions;
	if (majorRelease) {
		return [parseInt(major) + 1, 0, 0];
	} else {
		[minor, patch] = parseInt(patch) < 9 ? [minor, parseInt(patch) + 1] : [parseInt(minor) + 1, 0];
		return [major, minor, patch];
	}
};

fs.readFile(path.join('app.json'), 'utf-8', (error, dataString) => {
  if (error) {
    console.error(error);
    throw new Error(error);
  }
  const data = JSON.parse(dataString);
  console.log('VERSION: ', data.version);
  const versions = data.version.split('.');
  const newVersions = bumpUpVersion(versions, false);
  console.log('NEW VERSION: ', newVersions.join('.'));
})
