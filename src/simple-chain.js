const CustomError = require("../extensions/custom-error");

const chainMaker = {
    chain: '',
    getLength() {
        return this.chain.split('(').length - 1;
    },
    addLink(value) {
        if (value === undefined) {
            value = ''
        }
        this.chain += `( ${value} )~~`;
        return this
    },
    removeLink(position) {
        if (typeof position === 'number' && position > 0 && position <= this.getLength() && !(position % 1)) {
            let newChain = this.chain.split('( ');
            newChain.splice(position, 1);
            this.chain = newChain.join('( ');
        } else {
            this.chain = '';
            throw Error
        }
        return this
    },
    reverseChain() {
        let newChain = this.chain.split('( ');
        for (let i = 0; i < newChain.length; i++) {
            if (newChain[i].slice(-4) === ' )~~') {
                newChain[i] = newChain[i].slice(0, newChain[i].length - 4);
            }
            if (newChain[i].slice(-2) === ' )') {
                newChain[i] = newChain[i].slice(0, newChain[i].length - 2);
            }
        }
        newChain.reverse();
        newChain.pop();
        this.chain = '';
        for (let i = 0; i < newChain.length; i++) {
            this.addLink(newChain[i])
        }
        return this
    },
    finishChain() {
        let finishChain = this.chain.slice(0, -2);
        this.chain = '';
        return finishChain
    }
};

module.exports = chainMaker;
