import { NotImplementedError } from '../extensions/index.js';

export default function transform(arr) {
  if (!(arr instanceof Array)) {
    throw new Error(`'arr' parameter must be an instance of the Array!`);
  }
  let newarr = [];

  if (Array.isArray(arr)) {
      for(let i = 0; i < arr.length; i++) {
          if(arr[i] === '--discard-next'){
              i++;
          } else if(arr[i] === '--discard-prev'){
              if (newarr.length !== 0 && arr[i - 2] !== '--discard-next'){
                  newarr.pop();
              }
          } else if(arr[i] === '--double-next'){
              newarr.push(arr[i + 1]);
          } else if(arr[i] === '--double-prev'){
              if (i !== 0 && arr[i - 2] !== '--discard-next') {
                  newarr.push(arr[i - 1]);
              }
          } else {
              newarr.push(arr[i]);
          }
      };
}

