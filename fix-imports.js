const fs = require('fs');

let content = fs.readFileSync('src/routes/index.tsx', 'utf8');

const imports = [
  { name: 'exteriorAsset', file: 'exterior.jpg' },
  { name: 'interiorAsset', file: 'interior.jpg' },
  { name: 'interiorLivingAsset', file: 'interior-living.jpg' },
  { name: 'heroTowerUrl', file: 'hero-tower.jpg' },
  { name: 'amenityZenAsset', file: 'amenity-zen.jpg' },
  { name: 'amenitySkyAsset', file: 'amenity-sky.jpg' },
  { name: 'yogaAsset', file: 'yoga.jpg' },
  { name: 'juicebarAsset', file: 'juicebar.jpg' },
  { name: 'gymAsset', file: 'gym.jpg' },
  { name: 'loungeAsset', file: 'lounge.jpg' },
  { name: 'partyAsset', file: 'party.jpg' },
  { name: 'kidsAsset', file: 'kids.jpg' },
  { name: 'brochureAsset', file: 'brochure.pdf' },
  { name: 'floorplan1068Asset', file: 'floorplan-1068.jpg' },
  { name: 'floorplan1245Asset', file: 'floorplan-1245.jpg' },
  { name: 'floorplanTypicalAsset', file: 'floorplan-typical.jpg' }
];

let importBlock = 'import { createFileRoute, Link } from "@tanstack/react-router";\nimport { useEffect, useRef, useState, useCallback } from "react";\nimport { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";\nimport { submitEnquiry } from "@/lib/submit-enquiry";\n';

for (const imp of imports) {
  importBlock += `import ${imp.name} from "@/assets/${imp.file}";\n`;
}

content = content.replace(/^import \{ createFileRoute[\s\S]*?import Url from "@\/assets\/";\n/m, importBlock);

// Also change occurrences of Url to AssetUrl except where it's already heroTowerUrl
// Wait, the previous replacement did: .replace(/(\w+)Asset\.url/g, '$1Url')
// Which means exteriorAsset.url became exteriorUrl. 
// But the imports are named exteriorAsset? Wait, my previous bash command was:
// .replace(/import (\w+)Asset from \"@\/assets\/([\w\.\-]+)\.asset\.json\";/g, 'import $1Url from "@/assets/$2";')
// The first replace broke imports. The second replace `(\w+)Asset\.url` to `$1Url` might have worked.
// Let's just fix the imports block first and match what is actually used in the code.

fs.writeFileSync('src/routes/index.tsx', content);
