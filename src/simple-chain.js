import { NotImplementedError } from '../extensions/index.js';

export default {
            str: '',

            getLength() {
                return this.str.split('.').length;
            },
            addLink(value) {
                if(this.str === '')
                    this.str += value;
                else
                    this.str += '.' + value;
                return this;
            },
            removeLink(position) {
                if(typeof(position) != 'number' || isInteger(position) != true || position < 1 || position > this.str.split('.').length ) {
                    this.str = '';
                    throw new Error("You can't remove incorrect link!");
                } else {
                    this.str = this.str.split('.');
                    this.str.splice(position - 1, 1);
                    this.str = this.str.join('.');
                }
                return this;
            },
            reverseChain() {
                if (this.str.split('.').length > 1) {
                    this.str = this.str.split(".").reverse().join(".");
                }
                return this;
            },
            finishChain() {
                return (`( ${ this.str.split('.').join(' )~~( ') } )`);
            }
};
