const { execSync } = require('child_process');

console.log('Check File');
const gitHist = execSync('git hist');
console.log(gitHist);
const commitIdOnMasterBranch = execSync('git hist | grep origin/main | awk \'{print $2}\'').toString().trim();
console.log(commitIdOnMasterBranch);
const listOfUpdatedFiles = execSync(`git diff --name-only ${commitIdOnMasterBranch}..HEAD`).toString().trim().split('\n');
console.log(listOfUpdatedFiles);
let updatedMetadata = false;
for (let index = 0; index < listOfUpdatedFiles.length && !updatedMetadata; index++) {
    console.log(listOfUpdatedFiles[index]);
    if (listOfUpdatedFiles[index] && listOfUpdatedFiles[index].indexOf('README') !== -1) {
        updatedMetadata = true;
    }
}
console.log('All files reviewed - Done');
if (updatedMetadata) {
    console.log(updatedMetadata);
} else {
    console.log('File not updated');
}

