export const wordStops=[.36,.46,.56,.66,.76,.88,1] as const;
export const baseOpeningDurationMs=9000;
// Preserve earlier beats: the previously extended final stage now stays another 50% longer.
export const finalPhraseExtraMs=baseOpeningDurationMs*(1-wordStops[5])*(1.4*1.5-1);
export const openingDurationMs=baseOpeningDurationMs+finalPhraseExtraMs;
export function wordPhase(progress:number){
 const p=Math.max(.36,Math.min(1,progress));let index=0;
 while(index<5&&p>=wordStops[index+1])index++;
 return {index,morph:Math.min(1,(p-wordStops[index])/(wordStops[index+1]-wordStops[index])/.48)};
}
