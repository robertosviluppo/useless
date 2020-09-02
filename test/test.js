'use strict';

var expect = require('chai').expect;
var summer = require('../index');

describe('#summer', function() {
    it('should return 5 as sum', function() {
        var result = summer(3, 2);
        expect(result).to.equal(5);
    })
})