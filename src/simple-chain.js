import { NotImplementedError } from '../extensions/index.js';

export default {
            str: [],

            getLength() {
                return this.str.length;
            },
            addLink(value) {
                this.str.push(value);
                return this;
            },
            removeLink(position) {
                if(typeof(position) != 'number' || position < 1 || position > this.str.length ) {
                    this.str = [];
                    throw new Error("You can't remove incorrect link!");
                } else {
                    this.str.splice(position - 1, 1);
                }
                return this;
            },
            reverseChain() {
                if (this.str.length > 1) {
                    this.str = this.str.reverse();
                }
                return this;
            },
            finishChain() {
                return (`( ${ this.str.join(' )~~( ') } )`);
            }
};
