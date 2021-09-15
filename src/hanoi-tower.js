import { NotImplementedError } from '../extensions/index.js';

export default function calculateHanoi(disksNumber, turnsSpeed) {
  let obj = {
    turns: Math.pow(2, disksNumber) - 1,
    seconds: Math.floor((Math.pow(2, disksNumber) - 1) / (turnsSpeed / 3600))
  };
  return obj;
}
