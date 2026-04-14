import fs from 'fs';
import path from 'path';

function resolveConflictsInFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  let originalContent = content;

  const regex = /<<<<<<< HEAD\r?\n([\s\S]*?)=======\r?\n([\s\S]*?)>>>>>>>[^\n]*\n?/g;

  content = content.replace(regex, (match, headContent, incomingContent) => {
    return incomingContent;
  });

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log('Resolved conflicts in:', filePath);
  }
}

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    if (file === 'node_modules' || file === '.git' || file === 'dist') continue;
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walkDir(fullPath);
    } else if (fullPath.endsWith('.js') || fullPath.endsWith('.jsx') || fullPath.endsWith('.css') || fullPath.endsWith('.html')) {
      resolveConflictsInFile(fullPath);
    }
  }
}

walkDir('c:/Users/ssmad/OneDrive/Desktop/Sunbeam_student_portal/frontend/app1/src');
console.log("Done");
