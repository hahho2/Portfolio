import {lazy,Suspense,useEffect,useState} from 'react';
import {useReducedMotion} from 'motion/react';
import {Pause,Play,MousePointer2} from 'lucide-react';
import useDirectionalReveals from './useDirectionalReveals';

const ChakraScene=lazy(()=>import('./ChakraScene'));

export default function WorldMotion(){
 const reduced=useReducedMotion();const [paused,setPaused]=useState(()=>{try{return localStorage.getItem('shinobi-effects')==='paused'}catch{return false}});const [pointer,setPointer]=useState(false);const [ready,setReady]=useState(false);
 const stopped=!!reduced||paused;
 useEffect(()=>{const id=window.setTimeout(()=>setReady(true),200);return()=>clearTimeout(id)},[]);
 useEffect(()=>{document.documentElement.classList.toggle('effects-paused',stopped);try{localStorage.setItem('shinobi-effects',paused?'paused':'running')}catch{}return()=>document.documentElement.classList.remove('effects-paused')},[stopped,paused]);
 useDirectionalReveals(stopped);
 useEffect(()=>{if(!pointer||stopped||!matchMedia('(pointer:fine)').matches)return;let previous=0;const move=(e:PointerEvent)=>{if(performance.now()-previous<65||document.querySelector('.cinematic-overlay[open]')||(e.target as HTMLElement).closest('form'))return;previous=performance.now();const node=document.createElement('i');node.className='pointer-ember';node.style.left=e.clientX+'px';node.style.top=e.clientY+'px';document.body.append(node);node.addEventListener('animationend',()=>node.remove(),{once:true})};window.addEventListener('pointermove',move,{passive:true});return()=>{window.removeEventListener('pointermove',move);document.querySelectorAll('.pointer-ember').forEach(n=>n.remove())}},[pointer,stopped]);
 return <>{ready&&!stopped&&<Suspense fallback={null}><ChakraScene paused={stopped}/></Suspense>}<div className="effect-controls" aria-label="Animation preferences"><button onClick={()=>setPaused(!paused)} aria-pressed={stopped} disabled={!!reduced} title={reduced?'Reduced motion follows your device setting':paused?'Resume ambient effects':'Pause ambient effects'}>{stopped?<Play size={13}/>:<Pause size={13}/>}<span>{reduced?'Reduced motion':paused?'Effects paused':'Pause effects'}</span></button><button className="pointer-toggle" onClick={()=>setPointer(!pointer)} aria-pressed={pointer} disabled={stopped} title={pointer?'Disable pointer embers':'Enable optional pointer embers'}><MousePointer2 size={13}/><span>Embers {pointer?'on':'off'}</span></button></div></>;
}
