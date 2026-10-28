import {Player} from '@remotion/player';
import type {PlayerRef} from '@remotion/player';
import {useEffect,useRef,useState} from 'react';
import {Film,JourneyFilm,journeyDurationInFrames} from './remotion/Film';
export type {SceneMode} from './remotion/Film';
import type {SceneMode} from './remotion/Film';
export default function Cinematic({mode='intro',title='Harsh Yadav',onEnd}:{mode?:SceneMode;title?:string;onEnd?:()=>void}){
 const player=useRef<PlayerRef>(null),video=useRef<HTMLVideoElement>(null);const [fallback,setFallback]=useState(false);const [needsPlay,setNeedsPlay]=useState(false);
 useEffect(()=>{if(mode==='intro'&&!fallback)video.current?.play().catch(()=>setNeedsPlay(true))},[mode,fallback]);
 useEffect(()=>{const current=player.current;const ended=()=>onEnd?.();current?.addEventListener('ended',ended);return()=>current?.removeEventListener('ended',ended)},[onEnd,fallback,mode]);
 if(mode==='intro'&&!fallback)return <><video ref={video} autoPlay playsInline muted poster="/assets/village.webp" src="/media/shinobi-opening.mp4" onEnded={onEnd} onError={()=>setFallback(true)} style={{width:'100%',height:'100%',objectFit:'contain'}} aria-label="Fifteen-second chakra awakening opening"/>{needsPlay&&<button className="film-play button primary" onClick={()=>{video.current?.play().then(()=>setNeedsPlay(false)).catch(()=>setFallback(true))}}>Play opening</button>}</>;
 return <Player ref={player} component={mode==='journey'?JourneyFilm:Film} inputProps={{mode,title}} durationInFrames={mode==='journey'?journeyDurationInFrames:mode==='intro'?450:mode==='outro'?210:60} compositionWidth={1600} compositionHeight={900} fps={30} autoPlay controls={false} showVolumeControls={false} style={{width:'100%',height:'100%'}} acknowledgeRemotionLicense/>;
}
