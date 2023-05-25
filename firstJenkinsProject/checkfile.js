const { execSync } = require('child_process');

const commitIdOnMasterBranch = execSync(' git hist | grep origin/main | awk \'{print $2}\'').toString().trim();
const listOfUpdatedFiles = execSync(`git diff --name-only ${commitIdOnMasterBranch}..HEAD`).toString().trim().split('\n');
let updatedMetadata = false;
for (let index = 0; index < listOfUpdatedFiles.length && !updatedMetadata; index++) {
    console.log('TTES');
    if (listOfUpdatedFiles[index] && listOfUpdatedFiles[index].indexOf('README') !== -1) {
        updatedMetadata = true;
    }
}

console.log(updatedMetadata);

