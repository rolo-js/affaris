'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));

var ServiceSchema = new mongoose.Schema({
  name: String,
  info: String,
  code: String,
  hourlyPrice: Number,
  hourlyCost:Number,
  active: Boolean
});

export default mongoose.model('Service', ServiceSchema);
