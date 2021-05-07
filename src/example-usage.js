const fs = require('fs');
const getGithubRelease = require('./index.js');

const main = async () => {
  const res = await getGithubRelease({
    // userName: 'OpenNewsLabs',
    // repoName: 'autoEdit_2',
    userName: 'pietrop',
    repoName: 'digital-paper-edit-electron',
    // userName: 'bbc',
    // repoName: 'digital-paper-edit-electron',
  });
  console.log('res', JSON.stringify(res, null, 2));
  fs.writeFileSync('./bbc-digital-paper-edit-electron.json', JSON.stringify(res, null, 2));
};

main();
