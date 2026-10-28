import {Composition,registerRoot} from 'remotion';
import {Film,JourneyFilm,journeyDurationInFrames} from './Film';
const Root=()=> <><Composition id="ShinobiOpening" component={Film} durationInFrames={450} fps={30} width={1280} height={720} defaultProps={{mode:'intro',title:'Harsh Yadav'}}/><Composition id="ChapterJourney" component={JourneyFilm} durationInFrames={journeyDurationInFrames} fps={30} width={1600} height={900}/></>;
registerRoot(Root);
