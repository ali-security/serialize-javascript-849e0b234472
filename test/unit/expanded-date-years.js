/* global describe, it */
'use strict';

var serialize = require('../../'),
    expect    = require('chai').expect;

describe('Dates with expanded ISO years', function () {
    [-8640000000000000, -62198755200000, 253402300800000, 8640000000000000].forEach(function (timestamp) {
        it('round trips timestamp ' + timestamp, function () {
            var date = new Date(timestamp);
            var decoded = eval('(' + serialize(date) + ')');
            expect(decoded.getTime()).to.equal(date.getTime());
            expect(decoded.toISOString()).to.equal(date.toISOString());
        });
    });
});
