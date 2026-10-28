import {Composition,registerRoot} from 'remotion';
import {Film} from './Film';
const Root=()=> <Composition id="ShinobiOpening" component={Film} durationInFrames={450} fps={30} width={1280} height={720} defaultProps={{mode:'intro',title:'Harsh Yadav'}}/>;
registerRoot(Root);
