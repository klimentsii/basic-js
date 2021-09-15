import { NotImplementedError } from '../extensions/index.js';

export default function getSeason(date) {
  if(date == null || date == "")
    return 'Unable to determine the time of year!';
  if ((date instanceof Date === false || Object.getOwnPropertyNames(date).length > 0) && arguments.length > 0) 
    throw new Error('Invalid date!');
 
  if(date.getMonth() == 11 || date.getMonth() == 0 || date.getMonth() == 1)
    return "winter";
  if(date.getMonth() == 2 || date.getMonth() == 3 || date.getMonth() == 4)
    return "spring";
  if(date.getMonth() == 5 || date.getMonth() == 6 || date.getMonth() == 7)
    return "summer";   
  if(date.getMonth() == 8 || date.getMonth() == 9 || date.getMonth() == 10)
    return "autumn";
}
