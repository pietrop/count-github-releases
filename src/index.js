// https://www.chartjs.org/

const fetch = require('node-fetch');

const makeUrl = ({ userName, repoName }) => {
  return `https://api.github.com/repos/${userName}/${repoName}/releases`;
};

// across
const totalAssetDownloadCount = (versions) => {
  return versions
    .map((d) => {
      return d.download_count;
    })
    .reduce((acc, el) => {
      return acc + el;
    });
};

const parseAssets = (assets) => {
  return assets.map(({ name, download_count }) => {
    return { name, download_count, os: whichOs(name) };
  });
};

const whichOs = (name) => {
  if (name.includes('app.zip')) {
    return 'mac zip';
  } else if (name.includes('mac.zip')) {
    return 'mac zip';
  } else if (name.includes('dmg')) {
    return 'mac dmg';
  } else if (name.includes('AppImage')) {
    return 'Linux AppImage';
  } else if (name.includes('.exe')) {
    return 'Windows exe';
  } else if (name.includes('.zxp')) {
    return 'Adobe CEP';
  } else {
    return 'NA';
  }
};

const parseReleaseEntries = (releaseData) => {
  return releaseData.map(({ name, published_at, assets }) => {
    const assetsData = assets.length === 0 ? [] : parseAssets(assets);
    const total = assets.length === 0 ? 0 : totalAssetDownloadCount(assetsData);
    return {
      name,
      published_at,
      assets: assetsData,
      total,
    };
  });
};

const overallTotalDownloadCount = (versions) => {
  return versions
    .map((d) => {
      return d.total;
    })
    .reduce((acc, el) => {
      return acc + el;
    });
};

const overallTotalDownloadCountList = (versions) => {
  return versions.map((d) => {
    return d.total;
  });
  // .reduce((acc, el) => {
  //   return acc + el;
  // });
};

const getGithubReleaseData = ({ userName, repoName }) => {
  const URL = makeUrl({ userName, repoName });
  return fetch(URL)
    .then((res) => res.json())
    .then((json) => {
      const releases = parseReleaseEntries(json);
      return {
        total: overallTotalDownloadCount(releases),
        // the total for each release, across OS as a list
        totalList: overallTotalDownloadCountList(releases),
        releases,
      };
    });
};

module.exports = getGithubReleaseData;
