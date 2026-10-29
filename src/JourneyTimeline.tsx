import {ArrowRight,Braces,Database,GitBranch,Layers,Search,Workflow} from 'lucide-react';
import {experience,milestones} from './data';

const notes=[
 {label:'WORKPLACE MISSION',title:'HRMS, connected.',items:['People','Projects','Time logs'],Icon:Database},
 {label:'BROADBAND ORDER MANAGER',title:'Trace. Fix. Improve.',items:['Investigate','Resolve','Review'],Icon:Search},
 {label:'UNDERSTAND THE SYSTEM',title:'See the whole picture.',items:['Interface','API','Data'],Icon:Layers},
 {label:'BUILD THE FOUNDATION',title:'Turn logic into features.',items:['Requests','Services','Features'],Icon:Braces},
 {label:'CONNECT THE DETAILS',title:'Give every detail a place.',items:['Entities','Relations','Access'],Icon:Workflow},
 {label:'KEEP MOVING FORWARD',title:'Better, one change at a time.',items:['Inspect','Build','Review'],Icon:GitBranch},
];

export default function JourneyTimeline(){
 const entries=[...experience.map(job=>({title:job.company,subtitle:job.role,date:`${job.dates} · ${job.location}`,detail:job.detail})),...milestones.map(([title,detail])=>({title,detail,subtitle:'',date:''}))];
 return <div className="journey-alternating"><p className="journey-intro">Every challenge is a mission. Every solution is a step forward.</p><div className="timeline"><div className="journey-path"/>{entries.map((entry,index)=>{
  const note=notes[index];const Icon=note.Icon;
  return <div className={'journey-step '+(index%2?'entry-right':'entry-left')} key={entry.title}>
   <article className="career-role"><span className="timeline-dot">{String(index+1).padStart(2,'0')}</span>{entry.date&&<span className="career-date">{entry.date}</span>}<h4>{entry.title}</h4>{entry.subtitle&&<h5>{entry.subtitle}</h5>}<p>{entry.detail}</p></article>
   <aside className="journey-note" aria-label={note.label}><div className="journey-note-label"><Icon size={25} aria-hidden="true"/><span>{note.label}</span></div><h4>{note.title}</h4><div className="journey-flow">{note.items.map((item,i)=><span key={item}>{i>0&&<ArrowRight size={15} aria-hidden="true"/>}<b>{item}</b></span>)}</div>{index===0&&<p className="journey-metric"><strong>5 s → 400 ms</strong><span>Resume-reported initial HRMS load for views with approximately 1,000 records.</span></p>}{index===1&&<p className="journey-note-caption">Backend enhancements, bug fixes, and everyday workflow improvements.</p>}</aside>
  </div>;
 })}</div><p className="resume-attribution">Employment dates follow the supplied resume; “Present” is stated there. Visual callouts summarize the work and learning themes.</p></div>;
}
