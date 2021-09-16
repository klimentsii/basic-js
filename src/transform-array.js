import { NotImplementedError } from '../extensions/index.js';

export default function transform(arr) {
  if (!(arr instanceof Array)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  if(arr[0] == "--discard-prev" || arr[0] == "--double-prev" || arr[arr.length - 1] == "--discard-next" || arr[arr.length - 1] == "--double-next") {
    throw new Error('\'arr\' parameter must be an instance of the Array!');
  }

  let newarr = [];

  for(let i = 0; i < arr.length; i++) {
    if(typeof(arr[i]) == "string" ) {
      if(arr[i] == "--discard-next")
        newarr[i] = "", newarr[i + 1] = "", arr[i+1] = "";
      if(arr[i] == "--discard-prev") 
        newarr[i] = "", newarr[i - 1]  = "";
      if(arr[i] == "--double-next") {
        newarr[i] = arr[i+1], newarr[i+1] = arr[i+1];
      }
      if(arr[i] == "--double-prev") {
        newarr[i] = arr[i-1];
      }
    } else {
      if(typeof(arr[i]) == "number") {
        newarr[i] = arr[i];
      }
    }
  } 
  return (newarr.filter(n => typeof(n) == "number"));
}
