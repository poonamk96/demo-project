var assert = require('assert');

var calc = require('../calc');

describe('Calculator Tests', function () {
    describe('Addition Tests', function () {
        it('returns 1 + 1 = 2', function (done) {
            assert.equal(calc.add(1, 1), 2);
            done();
        });
    });

    describe('Subtraction Tests', function () {
        it('returns 5 - 3  = 2', function (done) {
            assert.equal(calc.sub(5, 3), 2);
            done();
        });
    });

    describe('Multiplication Tests', function () {
        it('returns 2 * 2 = 4', function (done) {
            assert.equal(calc.mul(2, 2), 4);
            done();
        });
    });

    describe('Division Tests', function () {
        it('returns 10 / 2 = 5', function (done) {
            assert.equal(calc.div(10, 2), 5);
            done();
        });
    });

});