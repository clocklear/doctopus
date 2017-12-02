process.env.NODE_ENV = 'test';

var chai = require('chai');
var chaiHttp = require('chai-http');
var path = require('path');
var app = require(path.join('..', 'app.js'));
var should = chai.should();

chai.use(chaiHttp);

var server;

describe('Dummy', function() {
    before(function (done) {
      server = app.listen(3001, done);
    });

    after(function (done) {
      server.close(done);
    });

    it('should equal true', function() {
      true.should.equal(true);
    });
});