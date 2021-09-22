import { NotImplementedError } from '../extensions/index.js';

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(str, options) {
            str += '';

            if(options.addition === false)
                options.addition = 'false';
            if(options.addition === null)
                options.addition = 'null';
            if(options.addition === 0)
                options.addition = '0';

            if(typeof(str) != 'string') 
                str = String(str);
            if(typeof(options.addition) != 'string') 
                options.addition = String(options.addition);
                

            if('separator' in options == false) 
                options.separator = '+'; 
            if('additionSeparator' in options == false) 
                options.additionSeparator = '|';

            if(options.hasOwnProperty('addition') == false) 
                options.addition = '';
            if(options.hasOwnProperty('additionRepeatTimes') == false) 
                options.additionRepeatTimes = 1;

            for(let i = 0; i < options.additionRepeatTimes; i++) {
                if(i == options.additionRepeatTimes - 1) {
                    str += options.addition;
                } else {
                    str += options.addition + options.additionSeparator;
                }
            } 

            let str2 = str;
            for(let i = 0; i < options.repeatTimes - 1 ; i++) {
                if(i == options.repeatTimes - 1) {
                    str += str2;
                } else {
                    str += options.separator + str2;
                }
            }
            return str;
        }
