import {useEffect,useState} from 'react';
import {AbsoluteFill,Sequence,interpolate,useCurrentFrame,useVideoConfig,staticFile,delayRender,continueRender} from 'remotion';
export type SceneMode='intro'|'activation'|'chapter'|'outro'|'journey';
const clamp={extrapolateLeft:'clamp',extrapolateRight:'clamp'} as const;
export function Film({mode='intro',title='Harsh Yadav'}:{mode?:SceneMode;title?:string}){
 const frame=useCurrentFrame();const {fps,width,height}=useVideoConfig();const t=frame/fps;const intro=mode==='intro';const [fontHandle]=useState(()=>delayRender('Loading cinematic lettering'));
 useEffect(()=>{document.fonts.load('800 100px CinematicDisplay').then(()=>continueRender(fontHandle)).catch(()=>continueRender(fontHandle))},[fontHandle]);
 const reveal=intro?interpolate(t,[3,6],[0,1],clamp):interpolate(t,[0,.6],[0,1],clamp);const name=intro?interpolate(t,[6,8.7],[0,1],clamp):interpolate(t,[0,.5],[0,1],clamp);const ring=intro?Math.min(t/3,1):Math.min(t/.6,1);
 return <AbsoluteFill style={{background:'#060b13',overflow:'hidden',color:'#f8f5ef',fontFamily:'CinematicDisplay,Barlow Condensed,sans-serif'}}>
 <style>{`@font-face{font-family:CinematicDisplay;src:url('${staticFile('fonts/barlow-condensed-latin-800-normal.woff2')}') format('woff2');font-weight:800}`}</style>
 <AbsoluteFill style={{backgroundImage:`linear-gradient(90deg,rgba(8,13,21,.84),rgba(8,13,21,.12)),url(${staticFile('assets/village.webp')})`,backgroundSize:'cover',backgroundPosition:'center',opacity:reveal,scale:interpolate(t,[0,intro?15:5],[1.16,1.02],clamp)}}/>
 <AbsoluteFill style={{background:'radial-gradient(ellipse at 65% 45%,#c4d6df15,transparent 45%)',translate:`${Math.sin(t*.4)*60}px ${Math.cos(t*.3)*10}px`,opacity:reveal}}/>
 <svg viewBox="0 0 1600 900" style={{position:'absolute',inset:0,width:'100%',height:'100%'}} aria-hidden="true"><defs><radialGradient id="ignition"><stop stopColor="#ffda81"/><stop offset=".2" stopColor="#f97316" stopOpacity=".8"/><stop offset="1" stopColor="#f97316" stopOpacity="0"/></radialGradient><linearGradient id="sweep"><stop stopColor="#f97316" stopOpacity="0"/><stop offset=".7" stopColor="#fc6b13" stopOpacity=".2"/><stop offset="1" stopColor="#ffcc65"/></linearGradient></defs>
 {intro&&t<3.7&&<g opacity={interpolate(t,[0,.3,2.8,3.7],[0,1,1,0],clamp)}><circle cx="800" cy="450" r={12+ring*130} fill="url(#ignition)"/>{[0,1,2].map(i=><circle key={i} cx="800" cy="450" r={10+Math.max(0,ring-i*.15)*220} stroke="#f78d39" fill="none" strokeWidth={i===1?2:1} strokeDasharray={i===1?'2 16':'60 12'} transform={`rotate(${t*22*(i%2?-1:1)} 800 450)`}/>)}</g>}
 {intro&&t>=3&&t<6&&<g opacity={interpolate(t,[3,3.3,5.4,6],[0,1,1,0],clamp)} transform={`translate(${interpolate(t,[3,6],[-700,2050],clamp)} 0)`}><path d={`M-500 900 L-500 0 L0 0 Q${Math.sin(t*9)*90} 180 130 280 Q-80 440 110 530 Q${Math.cos(t*13)*90} 700 70 900Z`} fill="url(#sweep)"/><path d={`M0 0 Q${Math.sin(t*9)*90} 180 130 280 Q-80 440 110 530 Q${Math.cos(t*13)*90} 700 70 900`} fill="none" stroke="#ffc873" strokeWidth="6"/></g>}
 </svg>
 {Array.from({length:55},(_,i)=>{const age=(t+(i*.371))%4.5;return <div key={i} style={{position:'absolute',width:2+i%4,height:2+i%4,borderRadius:'50%',background:i%8?'#f9832b':'#ffd99a',left:`${(i*37.7)%100}%`,top:`${100-age*26}%`,translate:`${Math.sin(age+i)*30}px 0`,opacity:Math.sin(age/4.5*Math.PI)*.75,boxShadow:i%5===0?'0 0 10px #f97316':undefined}}/>})}
 {mode==='activation'&&<div style={{position:'absolute',width:600,height:600,border:'7px double #f97316',borderRadius:'50%',left:'50%',top:'50%',transform:`translate(-50%,-50%) rotate(${frame*2}deg) scale(${.2+t*1.5})`,opacity:Math.max(0,1-t/2)}}/>}
 <AbsoluteFill style={{justifyContent:'center',padding:width*.085,background:'linear-gradient(0deg,rgba(8,13,21,.6),transparent 60%)'}}><div style={{opacity:name,translate:`0 ${interpolate(name,[0,1],[30,0])}px`,maxWidth:width*.75}}><div style={{fontFamily:'sans-serif',color:'#eda161',fontSize:width*.011,letterSpacing:5,marginBottom:25,opacity:intro?interpolate(t,[5.5,6.5],[0,1],clamp):1}}>MY CODE. MY JOURNEY. MY NINJA WAY.</div><h2 style={{fontSize:width*.105,lineHeight:.88,margin:0,textTransform:'uppercase',clipPath:`inset(0 ${(1-name)*100}% 0 0)`,textShadow:'0 5px 35px #0006'}}>{intro?<>HARSH<br/><span style={{color:'#f97316'}}>YADAV</span></>:title}</h2><p style={{fontSize:width*.018,letterSpacing:6,marginTop:28,opacity:intro?interpolate(t,[9,10.5],[0,1],clamp):1}}>THE SHINOBI DEVELOPER</p><p style={{fontFamily:'sans-serif',fontSize:width*.013,color:'#c4ceda',letterSpacing:1,marginTop:30,opacity:intro?interpolate(t,[11,12.5],[0,1],clamp):1}}>Every great story begins with a single spark.</p></div></AbsoluteFill>
 <div style={{position:'absolute',height:height*.045,background:'#060b13',top:0,width:'100%'}}/><div style={{position:'absolute',height:height*.045,background:'#060b13',bottom:0,width:'100%'}}/>
 </AbsoluteFill>
}

// Reuse the exact chapter openings on one uninterrupted playback timeline.
export const chapterOpeningTitles=[
 'Every shinobi begins somewhere.',
 'The academy days.',
 'Mastering my jutsu.',
 'Built with purpose. Mission by mission.',
 'The path so far.',
 'The official shinobi dossier.',
];
const chapterFrames=60;
export const journeyDurationInFrames=chapterOpeningTitles.length*chapterFrames;
export function JourneyFilm(){
 return <AbsoluteFill style={{background:'#060b13'}}>{chapterOpeningTitles.map((title,index)=><Sequence key={title} from={index*chapterFrames} durationInFrames={chapterFrames} premountFor={15}><Film mode="chapter" title={title}/></Sequence>)}</AbsoluteFill>;
}
