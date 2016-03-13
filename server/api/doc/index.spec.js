'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var docCtrlStub = {
  index: 'docCtrl.index',
  show: 'docCtrl.show',
  create: 'docCtrl.create',
  update: 'docCtrl.update',
  destroy: 'docCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var docIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './doc.controller': docCtrlStub
});

describe('Doc API Router:', function() {

  it('should return an express router instance', function() {
    docIndex.should.equal(routerStub);
  });

  describe('GET /api/docs', function() {

    it('should route to doc.controller.index', function() {
      routerStub.get
        .withArgs('/', 'docCtrl.index')
        .should.have.been.calledOnce;
    });

  });

  describe('GET /api/docs/:id', function() {

    it('should route to doc.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'docCtrl.show')
        .should.have.been.calledOnce;
    });

  });

  describe('POST /api/docs', function() {

    it('should route to doc.controller.create', function() {
      routerStub.post
        .withArgs('/', 'docCtrl.create')
        .should.have.been.calledOnce;
    });

  });

  describe('PUT /api/docs/:id', function() {

    it('should route to doc.controller.update', function() {
      routerStub.put
        .withArgs('/:id', 'docCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('PATCH /api/docs/:id', function() {

    it('should route to doc.controller.update', function() {
      routerStub.patch
        .withArgs('/:id', 'docCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('DELETE /api/docs/:id', function() {

    it('should route to doc.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'docCtrl.destroy')
        .should.have.been.calledOnce;
    });

  });

});
