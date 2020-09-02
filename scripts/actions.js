const fs = require('fs');
const path = require('path');


const bumpUpVersion = (versions) => {
  let [major, minor, patch] = versions.map(value => parseInt(value));
	if (minor === 9 && patch === 9) {
		return [ major + 1, 0, 0];
	} else {
		[minor, patch] = patch < 9 ? [minor, patch + 1] : [minor + 1, 0];
		return [major, minor, patch];
	}
};

fs.readFile(path.join('app.json'), 'utf-8', (error, dataString) => {
  if (error) {
    throw new Error(error);
  }
  const data = JSON.parse(dataString);
  console.log('VERSION: ', data.version);
  const versions = data.version.split('.');
  const newVersions = bumpUpVersion(versions);
  console.log('NEW VERSION: ', newVersions.join('.'));
})
