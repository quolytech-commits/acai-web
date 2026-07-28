const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

function getFiles(dir, files = []) {
  if (!fs.existsSync(dir)) return files;
  const list = fs.readdirSync(dir);
  for (const file of list) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      getFiles(fullPath, files);
    } else {
      files.push(fullPath);
    }
  }
  return files;
}

const publicDir = path.join(process.cwd(), 'public');
const allPublicFiles = getFiles(publicDir);

const usedFiles = [];
const unusedFiles = [];

for (const file of allPublicFiles) {
  const relPath = path.relative(publicDir, file).replace(/\\/g, '/');
  if (!relPath.match(/\.(png|jpg|jpeg|svg|mp4|mov|heic)$/i)) continue;
  
  const searchName = path.basename(relPath);
  try {
    execSync(`findstr /S /M /C:"${searchName}" src\\*.*`);
    usedFiles.push(relPath);
  } catch (e) {
    unusedFiles.push(relPath);
  }
}

console.log('UNUSED:');
console.log(unusedFiles.join('\n'));
console.log('\nUSED:');
console.log(usedFiles.join('\n'));
