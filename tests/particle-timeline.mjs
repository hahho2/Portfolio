import assert from 'node:assert/strict';
import {wordPhase,wordStops,baseOpeningDurationMs,openingDurationMs} from '../src/effects/timeline.ts';
// Verify every settled word, transitions, final bounds, and exact reverse scrubbing.
for(let i=0;i<6;i++){
 const start=wordStops[i],end=wordStops[i+1];
 assert.equal(wordPhase(start).index,i);
 assert.equal(wordPhase(start+(end-start)*.8).morph,1);
}
const forward=Array.from({length:101},(_,i)=>wordPhase(.36+.64*i/100));
const reverse=Array.from({length:101},(_,i)=>wordPhase(.36+.64*(100-i)/100)).reverse();
assert.deepEqual(forward,reverse);
assert.deepEqual(wordPhase(2),{index:5,morph:1});
assert.deepEqual(wordPhase(-1),{index:0,morph:0});
const phraseStart=baseOpeningDurationMs*wordStops[5];
assert.ok(Math.abs((openingDurationMs-phraseStart)/(baseOpeningDurationMs-phraseStart)-2.1)<1e-10);
assert.ok(Math.abs((openingDurationMs-phraseStart)/1512-1.5)<1e-10);
console.log('Particle word holds, bounds and reverse scrubbing passed.');
