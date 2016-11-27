'use strict';

var _ = require('underscore');
var model = require('../models/badges');

/**
 * Send badges to the model to be saved
 */ 
exports.save = function(req, res, next) {
	console.log("controllers.save()\n");
	var badges = _.clone(req.body);
	model.save(badges, function(err) {
		if (err) return res.json(503, {error: true});
	});

};


/**
 * Send badges to pub/sub socket in the model
 */ 
exports.send = function(req, res, next) {
	console.log("controllers.send()\n");
	next();
};
