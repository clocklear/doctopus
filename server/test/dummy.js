process.env.NODE_ENV = 'test';

const chai = require('chai');
const chaiHttp = require('chai-http');
const path = require('path');
const app = require(path.join('..', 'app.js'));
const should = chai.should();

chai.use(chaiHttp);

let server;

describe('Dummy', () => {
    before(done => {
      server = app.listen(3001, done);
    });

    after(done => {
      server.close(done);
    });

    it('should equal true', () => {
      true.should.equal(true);
    });
});