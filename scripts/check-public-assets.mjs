import {readFileSync,statSync} from 'node:fs';
import {fileURLToPath} from 'node:url';

// Fail deployment early if a binary asset wasn't included in the repository.
const assets=[
 'assets/village.webp',
 'fonts/barlow-condensed-latin-800-normal.woff2',
 'media/shinobi-opening.mp4',
 'media/naruto-flute.mp3',
 'harsh-yadav-resume.pdf',
];
for(const asset of assets){
 const path=fileURLToPath(new URL(`../public/${asset}`,import.meta.url));
 try{
  if(!statSync(path).isFile()||statSync(path).size===0)throw Error('empty or not a file');
  if(readFileSync(path).subarray(0,128).toString().startsWith('version https://git-lfs.github.com/spec/'))throw Error('Git LFS pointer instead of binary');
 }catch(error){throw Error(`Missing deployment asset public/${asset}. Commit the actual file before deploying. ${error.message}`)}
}
console.log(`Deployment assets verified (${assets.length} files).`);
