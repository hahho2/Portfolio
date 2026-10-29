// Deterministic target fields keep every replay consistent.
export const words=['CODE','CREATE','BUILD','EVOLVE','NEVER GIVE UP','MY NINJA WAY IS TO KEEP BUILDING.'];
export function random(seed:number){let n=seed|0;return()=>{n=(Math.imul(n,1664525)+1013904223)|0;return(n>>>0)/4294967296}}
export function shapeTargets(count:number,aspect=1.75){
 const portrait=aspect<1;
 const canvas=document.createElement('canvas');canvas.width=1400;canvas.height=800;
 const c=canvas.getContext('2d',{willReadFrequently:true})!;const rng=random(84);
 function sample(){const pixels=c.getImageData(0,0,1400,800).data;const points=[];for(let y=2;y<798;y+=3)for(let x=2;x<1398;x+=3){if(pixels[(y*1400+x)*4+3]>100)points.push([x,y])}const out=new Float32Array(count*3);for(let i=0;i<count;i++){const p=points[Math.floor(rng()*points.length)]||[700,400];out[i*3]=(p[0]+rng()*3)/700-1;out[i*3+1]=1-(p[1]+rng()*3)/400;out[i*3+2]=rng()}return out}
 c.strokeStyle='white';c.fillStyle='white';c.lineCap='round';c.lineJoin='round';
 // A continuous tapered serpentine body with a clearly attached head.
 const body=new Path2D('M 115 652 C 230 690 370 628 354 557 C 336 472 165 457 191 348 C 212 254 380 245 443 310 C 525 397 375 463 437 540 C 490 607 703 534 683 431 C 666 342 542 288 594 209 C 647 127 813 164 873 259');
 c.lineWidth=72;c.stroke(body);c.lineWidth=16;c.stroke(new Path2D('M115 652 Q74 618 89 578 Q99 649 155 653'));
 const head=new Path2D('M842 263 L849 227 Q817 192 829 165 L881 209 L891 173 L913 226 Q944 214 969 231 L1008 248 L1080 252 L1112 272 L1084 292 L1046 293 L1007 308 L1066 316 L1097 311 L1080 336 L1030 345 L984 324 L951 327 L925 301 L876 307 Z');c.fill(head);
 c.lineWidth=6;for(const path of ['M936 238 Q925 184 951 165 Q930 203 970 223','M974 293 Q1061 214 1143 229 Q1200 251 1151 270','M1014 308 Q1148 360 1191 309','M863 245 L824 216 L828 253 L800 238 L814 278','M925 300 L906 345 L877 355 L897 363 L918 354 L912 380 L931 361 L945 332','M582 368 L620 409 L650 417 L636 431 L607 426 L616 451 L596 431 L578 413','M294 478 L265 511 L224 514 L208 531 L232 524 L249 533 L261 524 L274 541 L282 523 L311 502'])c.stroke(new Path2D(path));
 // Swept crown, flowing whiskers and a ridged mane give the silhouette weight.
 c.lineWidth=10;for(const path of [
  'M863 225 Q821 154 855 92 Q852 158 895 204',
  'M910 224 Q925 159 974 128 Q944 177 944 225',
  'M1048 258 Q1190 170 1268 226 Q1298 270 1239 289',
  'M1036 319 Q1162 407 1261 342',
  'M850 248 L806 188 L809 230 L766 208 L788 253 L754 248 L794 289',
  'M598 198 L632 143 L641 173 L680 128 L681 164 L718 139 L720 169',
  'M195 344 L163 309 L177 357 L144 350 L172 391',
  'M432 539 L409 581 L445 561 L444 597 L478 570',
 ])c.stroke(new Path2D(path));
 // Negative mouth opening and scale cuts preserve anatomy at particle resolution.
 c.globalCompositeOperation='destination-out';c.lineWidth=10;c.stroke(new Path2D('M1008 292 L1085 276'));c.lineWidth=3;for(let i=0;i<13;i++){const x=390+i*30,y=260+Math.sin(i*.65)*55;c.stroke(new Path2D(`M${x} ${y} q-12 18 2 31`))}c.globalCompositeOperation='source-over';c.beginPath();c.ellipse(978,260,13,7,-.2,0,7);c.fill();
 const dragon=sample();
 // Fit a large, centered silhouette without stretching its anatomy.
 // Portrait uses an upright climbing pose; both layouts reserve room for controls.
 const angle=portrait ? .95 : 0,cos=Math.cos(angle),sin=Math.sin(angle);
 let minX=Infinity,maxX=-Infinity,minY=Infinity,maxY=-Infinity;
 for(let i=0;i<count;i++){
  const x=dragon[i*3]*1.75,y=dragon[i*3+1];
  const rotatedX=x*cos-y*sin,rotatedY=x*sin+y*cos;
  dragon[i*3]=rotatedX;dragon[i*3+1]=rotatedY;
  minX=Math.min(minX,rotatedX);maxX=Math.max(maxX,rotatedX);minY=Math.min(minY,rotatedY);maxY=Math.max(maxY,rotatedY);
 }
 const centerX=(minX+maxX)/2,centerY=(minY+maxY)/2;
 const scale=Math.min(.94/((maxX-minX)/2),.74/(((maxY-minY)/2)*aspect));
 for(let i=0;i<count;i++){dragon[i*3]=(dragon[i*3]-centerX)*scale;dragon[i*3+1]=(dragon[i*3+1]-centerY)*scale*aspect}
 const targets=words.map((word,i)=>{c.clearRect(0,0,1400,800);c.textAlign='center';c.textBaseline='middle';c.fillStyle='white';const lines=portrait?(i===5?['MY NINJA WAY','IS TO KEEP','BUILDING.']:i===4?['NEVER','GIVE UP']:[word]):i===5?['MY NINJA WAY','IS TO KEEP BUILDING.']:i===4?['NEVER GIVE UP']:[word];const size=portrait?(i===5?190:i===4?240:300):i===5?108:i===4?150:245;const spacing=portrait?size*1.14:135;c.font=`800 ${size}px "Barlow Condensed",sans-serif`;lines.forEach((line,j)=>c.fillText(line,700,400+(j-(lines.length-1)/2)*spacing,1260));const target=sample();if(portrait){for(let j=0;j<count;j++)target[j*3+1]*=aspect*1.75}return target});
 const scatter=new Float32Array(count*3);for(let i=0;i<count;i++){const a=rng()*Math.PI*2,r=.2+rng()*1.8;scatter[i*3]=Math.cos(a)*r;scatter[i*3+1]=Math.sin(a)*r;scatter[i*3+2]=rng()}
 return{dragon,targets,scatter};
}
