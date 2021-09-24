export default class VigenereCipheringMachine {
            abc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

            constructor(bool) {
                this.bool = bool;
            }

            encrypt (s, k) {
                if (!s || !k) {
                    throw new Error('Incorrect arguments!')
                }

                // MAKE A _kN_(KEY NUMBER)
                let kN = [];
                for(let i = 0; i < k.length; i++) {
                    kN[i] = this.abc.indexOf(k.toUpperCase()[i]); 
                }
                while(kN.length < s.length)  
                    kN += ',' + kN;
                kN += ',' + kN;
                k = kN.split(',');
                k = k.map( k => +k );

                // MAKE A _sN_(STRING NUMBER)
                let sN = [];
                for(let i = 0; i < s.length; i++) {
                    if(s[i].toUpperCase() == this.abc[this.abc.indexOf(s.toUpperCase()[i])]) {
                        sN[i] = this.abc.indexOf(s[i].toUpperCase());
                    } else {
                        sN[i] = s[i];
                    }
                }

                // ENCRYPT STARTING
                let enC = []; let c = 0;
                for(let i = 0; i < sN.length; i++) {
                    if(typeof(sN[i]) == 'number') {
                        enC[i] = this.abc[(sN[i] + k[i - c]) % 26];
                    } else {
                        c++;
                        enC[i] = sN[i];
                    }
                }

                if(this.bool == false) {
                    return(enC.reverse().join(''));
                } else {
                    return(enC.join(''));
                }
            }

            decrypt(s, k) {
                if (!s || !k) {
                    throw new Error('Incorrect arguments!')
                }

                // MAKE A _kN_(KEY NUMBER)
                let kN = [];
                for(let i = 0; i < k.length; i++) {
                    kN[i] = this.abc.indexOf(k.toUpperCase()[i]); 
                }
                while(kN.length < s.length)  
                    kN += ',' + kN;
                kN += ',' + kN;
                k = kN.split(',');
                k = k.map( k => +k );
                
                // MAKE A _sN_(STRING NUMBER)
                let sN = [];
                for(let i = 0; i < s.length; i++) {
                    if(s[i].toUpperCase() == this.abc[this.abc.indexOf(s.toUpperCase()[i])]) {
                        sN[i] = this.abc.indexOf(s[i].toUpperCase());
                    } else {
                        sN[i] = s[i];
                    }
                }

                // ENCRYPT STARTING
                let enC = []; let c = 0;
                for(let i = 0; i < sN.length; i++) {
                    if(typeof(sN[i]) == 'number') {
                        if(sN[i] - k[i - c] < 0) {
                            enC[i] = this.abc[26 + ((sN[i] - k[i - c]) % 26)];
                        } else {
                            enC[i] = this.abc[(sN[i] - k[i - c]) % 26];
                        }
                    } else {
                        c++;
                        enC[i] = sN[i];
                    }
                }

                if(this.bool == false) {
                    return(enC.reverse().join(''));
                } else {
                    return(enC.join(''));
                }
            }
        }  
