const fs = require('fs');

let content = fs.readFileSync('src/routes/index.tsx', 'utf8');

const imports = [
  { name: 'exteriorUrl', file: 'exterior.jpg' },
  { name: 'interiorUrl', file: 'interior.jpg' },
  { name: 'interiorLivingUrl', file: 'interior-living.jpg' },
  { name: 'heroTowerUrl', file: 'hero-tower.jpg' },
  { name: 'amenityZenUrl', file: 'amenity-zen.jpg' },
  { name: 'amenitySkyUrl', file: 'amenity-sky.jpg' },
  { name: 'yogaUrl', file: 'yoga.jpg' },
  { name: 'juicebarUrl', file: 'juicebar.jpg' },
  { name: 'gymUrl', file: 'gym.jpg' },
  { name: 'loungeUrl', file: 'lounge.jpg' },
  { name: 'partyUrl', file: 'party.jpg' },
  { name: 'kidsUrl', file: 'kids.jpg' },
  { name: 'brochureUrl', file: 'brochure.pdf' },
  { name: 'floorplan1068Url', file: 'floorplan-1068.jpg' },
  { name: 'floorplan1245Url', file: 'floorplan-1245.jpg' },
  { name: 'floorplanTypicalUrl', file: 'floorplan-typical.jpg' }
];

let importBlock = 'import { createFileRoute, Link } from "@tanstack/react-router";\nimport { useEffect, useRef, useState, useCallback } from "react";\nimport { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";\nimport { submitEnquiry } from "@/lib/submit-enquiry";\n';

for (const imp of imports) {
  importBlock += `import ${imp.name} from "@/assets/${imp.file}";\n`;
}

// Remove all the corrupted "import Url from ... " lines
content = content.replace(/import Url from "@\/assets\/";\n/g, '');
content = content.replace(/import heroTowerUrl from "@\/assets\/hero-tower\.jpg";\n/g, '');
content = content.replace(/import \{ createFileRoute, Link \} from "@tanstack\/react-router";\nimport \{ useEffect, useRef, useState, useCallback \} from "react";\nimport \{ Dialog, DialogContent, DialogTitle \} from "@\/components\/ui\/dialog";\nimport \{ submitEnquiry \} from "@\/lib\/submit-enquiry";\n/, importBlock);

fs.writeFileSync('src/routes/index.tsx', content);
