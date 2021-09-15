import { NotImplementedError } from '../extensions/index.js';

export default function countCats(arr) {
  throw new NotImplementedError('Not implemented');
  let catCount = 0;
  for(let i = 0;i < arr.length; i++) {
    for(let j = 0; j < arr.length; J++) {
      if(arr[i][j] == "^^")
        catCount++;
    }
  }
  return catCount;
}
