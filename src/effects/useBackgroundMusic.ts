import {useEffect,useRef,useState} from 'react';

export function useBackgroundMusic(){
 const audio=useRef<HTMLAudioElement|null>(null);
 const wanted=useRef(true);
 const activated=useRef(false);
 const [playing,setPlaying]=useState(false);
 useEffect(()=>{
  try{wanted.current=localStorage.getItem('shinobi-music')!=='off'}catch{/* Storage is optional. */}
  const track=new Audio('/media/naruto-flute.mp3');
  audio.current=track;track.loop=true;track.volume=.24;track.preload='auto';
  const start=()=>{if(activated.current&&wanted.current&&!document.hidden&&track.paused)void track.play().catch(()=>{/* Allow a later click to retry if playback was interrupted. */})};
  const onPlaying=()=>{if(!wanted.current||document.hidden)track.pause();else setPlaying(true)};
  const onPause=()=>setPlaying(false);
  const gesture=(event:Event)=>{if(event instanceof KeyboardEvent&&event.key!=='Enter'&&event.key!==' ')return;activated.current=true;if(!(event.target instanceof Element&&event.target.closest('[data-music-toggle]')))start()};
  const visibility=()=>{if(document.hidden)track.pause();else start()};
  track.addEventListener('playing',onPlaying);track.addEventListener('pause',onPause);track.addEventListener('error',onPause);
  document.addEventListener('click',gesture);document.addEventListener('keydown',gesture);document.addEventListener('visibilitychange',visibility);
  return()=>{document.removeEventListener('click',gesture);document.removeEventListener('keydown',gesture);document.removeEventListener('visibilitychange',visibility);track.removeEventListener('playing',onPlaying);track.removeEventListener('pause',onPause);track.removeEventListener('error',onPause);track.pause();track.removeAttribute('src');track.load();audio.current=null};
 },[]);
 function toggle(){
  activated.current=true;wanted.current=!playing;
  try{localStorage.setItem('shinobi-music',wanted.current?'on':'off')}catch{/* Storage is optional. */}
  if(wanted.current)void audio.current?.play().catch(()=>setPlaying(false));else audio.current?.pause();
 }
 return {playing,toggle};
}
