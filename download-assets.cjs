const fs = require('fs');
const path = require('path');
const https = require('https');

const dir = path.join(__dirname, 'src/assets');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.asset.json'));

async function download(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode !== 200) {
        reject(new Error(`Failed to get '${url}' (${res.statusCode})`));
        return;
      }
      const file = fs.createWriteStream(dest);
      res.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => reject(err));
    });
  });
}

async function run() {
  for (const file of files) {
    const jsonPath = path.join(dir, file);
    const content = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
    
    if (content.url) {
      const realExt = path.extname(content.original_filename);
      const baseName = file.replace('.asset.json', '');
      const downloadPath = path.join(dir, baseName);
      
      if (fs.existsSync(downloadPath)) {
        console.log(`Skipping ${baseName}, already exists`);
        continue;
      }

      const fullUrl = 'https://ryla-ambiance.lovable.app' + content.url;
      console.log(`Downloading ${fullUrl} to ${downloadPath}`);
      try {
        await download(fullUrl, downloadPath);
        console.log(`Downloaded ${baseName}`);
      } catch (err) {
        console.error(`Error downloading ${baseName}:`, err.message);
      }
    }
  }
}

run();
