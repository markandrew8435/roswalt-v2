const fs = require('fs');

let content = fs.readFileSync('src/routes/index.tsx', 'utf8');

// 1. Replace imports: import xyzAsset from "@/assets/abc.jpg.asset.json"; -> import xyzUrl from "@/assets/abc.jpg";
content = content.replace(/import (\w+)Asset from \"@\/assets\/([\w\.\-]+)\.asset\.json\";/g, 'import $1Url from "@/assets/$2";');

// 2. Replace usages: xyzAsset.url -> xyzUrl
content = content.replace(/(\w+)Asset\.url/g, '$1Url');

// 3. Since heroTowerUrl was already partly replaced manually in one commit, make sure no weird heroTowerAsset.url is left over
// In HEAD~1, heroTowerAsset was still used since the manual fix was overwritten when we did the global replace or something?
// Wait, HEAD~1 was before my very first script.

fs.writeFileSync('src/routes/index.tsx', content);
