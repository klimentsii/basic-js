import { NotImplementedError } from '../extensions/index.js';

export default{
            str: '',

            getLength() {
                return this.str.split('.').length;
            },
            addLink(value) {
                if(this.str === '')
                    this.str += value;
                else
                    this.str += '.' + value;
                return this.str;
            },
            removeLink(position) {
                if(this.str != null || this.str != '') {
                    this.str = this.str.split('.');
                    this.str.splice(position, 1);
                    this.str = this.str.join('.');
                }
                return this.str;
            },
            reverseChain() {
                this.str = this.str.split(".").reverse().join(".");
                return this.str;
            },
            finishChain() {
                return '(ss ' + this.str.split('.').join(' )~~( ') + ' )';
            }
};
