'use strict';

var app = require('../..');
import request from 'supertest';

var newDoc;

describe('Doc API:', function() {

  describe('GET /api/docs', function() {
    var docs;

    beforeEach(function(done) {
      request(app)
        .get('/api/docs')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          docs = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      docs.should.be.instanceOf(Array);
    });

  });

  describe('POST /api/docs', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/docs')
        .send({
          name: 'New Doc',
          info: 'This is the brand new doc!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newDoc = res.body;
          done();
        });
    });

    it('should respond with the newly created doc', function() {
      newDoc.name.should.equal('New Doc');
      newDoc.info.should.equal('This is the brand new doc!!!');
    });

  });

  describe('GET /api/docs/:id', function() {
    var doc;

    beforeEach(function(done) {
      request(app)
        .get('/api/docs/' + newDoc._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          doc = res.body;
          done();
        });
    });

    afterEach(function() {
      doc = {};
    });

    it('should respond with the requested doc', function() {
      doc.name.should.equal('New Doc');
      doc.info.should.equal('This is the brand new doc!!!');
    });

  });

  describe('PUT /api/docs/:id', function() {
    var updatedDoc;

    beforeEach(function(done) {
      request(app)
        .put('/api/docs/' + newDoc._id)
        .send({
          name: 'Updated Doc',
          info: 'This is the updated doc!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedDoc = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedDoc = {};
    });

    it('should respond with the updated doc', function() {
      updatedDoc.name.should.equal('Updated Doc');
      updatedDoc.info.should.equal('This is the updated doc!!!');
    });

  });

  describe('DELETE /api/docs/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/docs/' + newDoc._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when doc does not exist', function(done) {
      request(app)
        .delete('/api/docs/' + newDoc._id)
        .expect(404)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

  });

});
