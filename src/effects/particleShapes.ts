// Deterministic target fields: scroll reversal traverses the same particles.
export const words=['CODE','CREATE','BUILD','EVOLVE','NEVER GIVE UP','MY NINJA WAY IS TO KEEP BUILDING.'];
export function random(seed:number){let n=seed|0;return()=>{n=(Math.imul(n,1664525)+1013904223)|0;return(n>>>0)/4294967296}}
export function shapeTargets(count:number){
 const canvas=document.createElement('canvas');canvas.width=1400;canvas.height=800;
 const c=canvas.getContext('2d',{willReadFrequently:true})!;const rng=random(84);
 function sample(){const pixels=c.getImageData(0,0,1400,800).data;const points=[];for(let y=2;y<798;y+=3)for(let x=2;x<1398;x+=3){if(pixels[(y*1400+x)*4+3]>100)points.push([x,y])}const out=new Float32Array(count*3);for(let i=0;i<count;i++){const p=points[Math.floor(rng()*points.length)]||[700,400];out[i*3]=(p[0]+rng()*3)/700-1;out[i*3+1]=1-(p[1]+rng()*3)/400;out[i*3+2]=rng()}return out}
 c.strokeStyle='white';c.fillStyle='white';c.lineCap='round';c.lineJoin='round';
 // A continuous tapered serpentine body with a clearly attached head.
 const body=new Path2D('M 115 652 C 230 690 370 628 354 557 C 336 472 165 457 191 348 C 212 254 380 245 443 310 C 525 397 375 463 437 540 C 490 607 703 534 683 431 C 666 342 542 288 594 209 C 647 127 813 164 873 259');
 c.lineWidth=55;c.stroke(body);c.lineWidth=16;c.stroke(new Path2D('M115 652 Q74 618 89 578 Q99 649 155 653'));
 const head=new Path2D('M842 263 L849 227 Q817 192 829 165 L881 209 L891 173 L913 226 Q944 214 969 231 L1008 248 L1080 252 L1112 272 L1084 292 L1046 293 L1007 308 L1066 316 L1097 311 L1080 336 L1030 345 L984 324 L951 327 L925 301 L876 307 Z');c.fill(head);
 c.lineWidth=6;for(const path of ['M936 238 Q925 184 951 165 Q930 203 970 223','M974 293 Q1061 214 1143 229 Q1200 251 1151 270','M1014 308 Q1148 360 1191 309','M863 245 L824 216 L828 253 L800 238 L814 278','M925 300 L906 345 L877 355 L897 363 L918 354 L912 380 L931 361 L945 332','M582 368 L620 409 L650 417 L636 431 L607 426 L616 451 L596 431 L578 413','M294 478 L265 511 L224 514 L208 531 L232 524 L249 533 L261 524 L274 541 L282 523 L311 502'])c.stroke(new Path2D(path));
 // Negative mouth opening and scale cuts preserve anatomy at particle resolution.
 c.globalCompositeOperation='destination-out';c.lineWidth=10;c.stroke(new Path2D('M1008 292 L1085 276'));c.lineWidth=3;for(let i=0;i<13;i++){const x=390+i*30,y=260+Math.sin(i*.65)*55;c.stroke(new Path2D(`M${x} ${y} q-12 18 2 31`))}c.globalCompositeOperation='source-over';c.beginPath();c.ellipse(978,260,13,7,-.2,0,7);c.fill();
 const dragon=sample();const targets=words.map((word,i)=>{c.clearRect(0,0,1400,800);c.textAlign='center';c.textBaseline='middle';c.fillStyle='white';let lines=i===5?['MY NINJA WAY','IS TO KEEP BUILDING.']:i===4?['NEVER GIVE UP']:[word];let size=i===5?108:i===4?150:245;c.font=`800 ${size}px "Barlow Condensed",sans-serif`;lines.forEach((line,j)=>c.fillText(line,700,400+(j-(lines.length-1)/2)*135,1260));return sample()});
 const scatter=new Float32Array(count*3);for(let i=0;i<count;i++){const a=rng()*Math.PI*2,r=.2+rng()*1.8;scatter[i*3]=Math.cos(a)*r;scatter[i*3+1]=Math.sin(a)*r;scatter[i*3+2]=rng()}
 return{dragon,targets,scatter};
}
