var xorshift = require('./xorshift');

module.exports = {
    randomNumber: function (n) {
        if (!n) {
            throw 'n is undefinied';
        }
        if (n < 0) {
            throw 'n is less than 0';
        }
        if (n > 1000000) {
            throw 'n is higher than 1000000';
        }
        return Math.floor(xorshift.random() * n);
    }
}