/**
 * Doc model events
 */

'use strict';

import {EventEmitter} from 'events';
var Doc = require('./doc.model');
var DocEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
DocEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  Doc.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    DocEvents.emit(event + ':' + doc._id, doc);
    DocEvents.emit(event, doc);
  }
}

export default DocEvents;
