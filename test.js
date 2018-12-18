var expect = require('chai').expect;
var app = require('./app');

describe('randomNumber()', function () {
    it('should return 0 when n is 1', function () {
        var n = 1;
        var result = app.randomNumber(n);
        expect(result).to.be.equal(0);
    });
});

describe('randomNumber()', function () {
    it('should return less than n (1)', function () {
        var n = 500;
        var result = app.randomNumber(n);
        expect(result).to.be.lessThan(n);
    });
});

describe('randomNumber()', function () {
    it('should return less than n (2)', function () {
        var n = 50000;
        var result = app.randomNumber(n);
        expect(result).to.be.lessThan(n);
    });
});

describe('randomNumber()', function () {
    it('should throw error when n is higher than 1000000', function () {
        var n = 1000001;        
        expect(function(){
            app.randomNumber(n)
        }).to.throw('n is higher than 1000000');
    });
});