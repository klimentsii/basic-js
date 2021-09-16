import { NotImplementedError } from '../extensions/index.js';

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

export default function dateSample(sampleActivity) {
  let number = parseFloat(sampleActivity);
  const k = 0.693 / HALF_LIFE_PERIOD;
  if(Number.isNaN(number) || typeof sampleActivity != 'string' || (number <= 0 || number > 15) ){
    return false
  } else
    return Math.ceil((Math.log(MODERN_ACTIVITY / number)) / k);
}
