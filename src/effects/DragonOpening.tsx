import {lazy,Suspense,useEffect,useRef} from 'react';
import {ArrowUpRight} from 'lucide-react';
const ChakraScene=lazy(()=>import('./ChakraScene'));
export default function DragonOpening({onComplete}:{onComplete:()=>void}){
 const dialog=useRef<HTMLDialogElement>(null);
 useEffect(()=>{dialog.current?.showModal();const previous=document.body.style.overflow;document.body.style.overflow='hidden';const watchdog=window.setTimeout(onComplete,13000);return()=>{clearTimeout(watchdog);document.body.style.overflow=previous}},[onComplete]);
 return <dialog ref={dialog} className="dragon-opening" aria-label="Automatic dragon opening" onCancel={event=>{event.preventDefault();onComplete()}}><div className="dragon-stage"><div className="dragon-caption"><span>THE FIRE WITHIN</span><button autoFocus onClick={onComplete}>Skip animation <ArrowUpRight size={15}/></button></div><div className="opening-loading">A single spark. A new beginning.</div><Suspense fallback={null}><ChakraScene paused={false} opening onFinish={onComplete}/></Suspense><p className="sr-only">A dragon of sparks transforms into Code, Create, Build, Evolve, Never Give Up, and My ninja way is to keep building. The homepage opens automatically after approximately 10.2 seconds.</p><div className="dragon-bottom"><span>ONE SPARK. INFINITE POSSIBILITIES.</span><div className="dragon-progress"><i/></div><button onClick={onComplete}>Enter portfolio <ArrowUpRight size={15}/></button></div></div></dialog>
}
