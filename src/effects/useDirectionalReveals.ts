import {useEffect} from 'react';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
export const revealPatterns={
 'from-left':{x:-95},'from-right':{x:95},'from-top':{y:-65},'from-bottom':{y:65},
 'zoom-in':{scale:.6},'zoom-out':{scale:1.16},'rotate-in':{y:45,rotation:7},
 'flip-in':{y:50,rotationX:28,rotationY:-12,transformPerspective:1000},
 'blur-reveal':{y:18,filter:'blur(8px)'},'mask':{clipPath:'inset(0 0 100% 0)',y:15},
 'scatter':{x:-25,y:32,rotation:-9,scale:.85},'stagger-up':{y:35}
} as const;
type Reveal=keyof typeof revealPatterns;
const directions:Reveal[]=['from-left','from-bottom','from-right','from-top','rotate-in','zoom-out'];
export default function useDirectionalReveals(stopped:boolean){
 useEffect(()=>{if(stopped)return;const media=gsap.matchMedia();
 media.add({desktop:'(min-width: 701px)',mobile:'(max-width: 700px)',reduce:'(prefers-reduced-motion: reduce)'},scope=>{
  if(scope.conditions?.reduce)return;const mobile=!!scope.conditions?.mobile;const seen=new WeakSet<Element>();
  const reveal=(selector:string,kind:Reveal|((el:HTMLElement,i:number)=>Reveal),stagger=0)=>{
   gsap.utils.toArray<HTMLElement>(selector).forEach((el,i)=>{if(seen.has(el))return;seen.add(el);
    // Content already reached by a direct link is immediately readable.
    const bounds=el.getBoundingClientRect();if(bounds.top<innerHeight*.12)return;
    const pattern={...revealPatterns[typeof kind==='function'?kind(el,i):kind]} as gsap.TweenVars;
    if(mobile){if(typeof pattern.x==='number')pattern.x*=.4;if(typeof pattern.y==='number')pattern.y*=.65;if(pattern.rotationX)pattern.rotationX=12;if(pattern.rotationY)pattern.rotationY=-5;if(pattern.filter)pattern.filter='blur(3px)'}
    gsap.from(el,{...pattern,opacity:.18,duration:.9,delay:(i%6)*stagger,ease:'power3.out',immediateRender:true,
     scrollTrigger:{trigger:el,start:'top 90%',once:true},
     onComplete:()=>{gsap.set(el,{clearProps:'transform,filter,opacity,clipPath'});el.classList.add('reveal-settled')}
    });
   });
  };
  reveal('#origin .heading-lead','from-left');reveal('#origin .chapter-heading em','from-right');
  reveal('.origin-quote','flip-in');reveal('.origin-quote .japanese','zoom-out');reveal('.quote-word','scatter',.09);
  reveal('.origin-copy h3','from-top');reveal('.origin-copy > p:first-of-type','from-right');reveal('.origin-copy > p:nth-of-type(2)','from-bottom');reveal('.origin-copy dl > div','stagger-up',.13);reveal('.origin-copy > a','zoom-in');
  reveal('#academy .chapter-heading h2','zoom-in');reveal('.academy-board','from-left');reveal('.academy-window','from-top');reveal('.academy-scroll','rotate-in');reveal('.academy-scroll > div',(_,i)=>directions[i%4],.1);
  reveal('#jutsu .chapter-heading h2','rotate-in');reveal('.skill-tree > button',(_,i)=>directions[i%directions.length],.1);
  const skillKind=(el:HTMLElement,i:number):Reveal=>{const name=el.querySelector('.skill-name')?.textContent||'';return name.startsWith('C#')?'zoom-in':name.startsWith('ASP')?'rotate-in':name.startsWith('SQL')?'from-bottom':name.startsWith('React')?'from-right':name.includes('API')?'zoom-out':directions[i%directions.length]};
  const skills=()=>reveal('.skill-row',skillKind,.08);skills();
  const observer=new MutationObserver(()=>scope.add(skills));const list=document.querySelector('.skill-list');if(list)observer.observe(list,{childList:true});
  reveal('#missions .chapter-heading h2','mask');reveal('.mission-art','from-left');reveal('.mission-copy','from-right');reveal('.mission-copy .tags > span','stagger-up',.09);reveal('.mission-copy .inline-link','zoom-in');reveal('.hrms-case-study','from-bottom');
  reveal('.field-mission',(_,i)=>i%2?'from-right':'from-left',.08);reveal('.field-mission .tags','stagger-up');reveal('.field-heading','blur-reveal');
  reveal('#journey .chapter-heading h2','from-left');reveal('.employer','zoom-out');reveal('.timeline article',(_,i)=>i%2?'from-right':'from-left');reveal('.career-date','from-top');reveal('.timeline article > p','from-bottom');
  reveal('#resume .chapter-heading h2','from-top');reveal('.dossier','flip-in');reveal('.dossier-grid > div','stagger-up',.12);reveal('.dossier-bottom','from-right');
  reveal('.contact-heading h2','blur-reveal');reveal('.contact-links > a',(_,i)=>directions[i%4],.12);reveal('.contact-layout form','from-bottom');
  // Only scenic surfaces scrub; reading content uses one-time entrances.
  gsap.to('.mission-art',{yPercent:mobile?-2:-5,ease:'none',scrollTrigger:{trigger:'.mission-board',start:'top bottom',end:'bottom top',scrub:.5}});
  gsap.fromTo('.contact-scenery',{opacity:.5},{opacity:.22,ease:'none',scrollTrigger:{trigger:'#contact',start:'top 80%',end:'top top',scrub:.4}});
  return()=>observer.disconnect();
 });return()=>media.revert();
 },[stopped]);
}
