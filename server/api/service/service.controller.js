/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/services              ->  index
 * POST    /api/services              ->  create
 * GET     /api/services/:id          ->  show
 * PUT     /api/services/:id          ->  update
 * DELETE  /api/services/:id          ->  destroy
 */

'use strict';

import _ from 'lodash';
var Service = require('./service.model');

function handleError(res, statusCode) {
  statusCode = statusCode || 500;
  return function(err) {
    res.status(statusCode).send(err);
  };
}

function responseWithResult(res, statusCode) {
  statusCode = statusCode || 200;
  return function(entity) {
    if (entity) {
      res.status(statusCode).json(entity);
    }
  };
}

function handleEntityNotFound(res) {
  return function(entity) {
    if (!entity) {
      res.status(404).end();
      return null;
    }
    return entity;
  };
}

function saveUpdates(updates) {
  return function(entity) {
    var updated = _.merge(entity, updates);
    return updated.saveAsync()
      .spread(updated => {
        return updated;
      });
  };
}

function removeEntity(res) {
  return function(entity) {
    if (entity) {
      return entity.removeAsync()
        .then(() => {
          res.status(204).end();
        });
    }
  };
}

// Gets a list of Services
export function index(req, res) {
  if (req.query.code){
      Service.findOneAsync({code:req.query.code})
      .then(handleEntityNotFound(res))
      .then(responseWithResult(res))
      .catch(handleError(res));
  }
  else{
    Service.findAsync()
    .then(responseWithResult(res))
    .catch(handleError(res));
  }
}

// Gets a single Service from the DB
export function show(req, res) {
  Service.findByIdAsync(req.params.id)
    .then(handleEntityNotFound(res))
    .then(responseWithResult(res))
    .catch(handleError(res));
}

// Creates a new Service in the DB
export function create(req, res) {
  Service.createAsync(req.body)
    .then(responseWithResult(res, 201))
    .catch(handleError(res));
}

// Updates an existing Service in the DB
export function update(req, res) {
  if (req.body._id) {
    delete req.body._id;
  }
  Service.findByIdAsync(req.params.id)
    .then(handleEntityNotFound(res))
    .then(saveUpdates(req.body))
    .then(responseWithResult(res))
    .catch(handleError(res));
}

// Deletes a Service from the DB
export function destroy(req, res) {
  Service.findByIdAsync(req.params.id)
    .then(handleEntityNotFound(res))
    .then(removeEntity(res))
    .catch(handleError(res));
}
