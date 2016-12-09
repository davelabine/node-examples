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
		console.log("model.save() returned successfully!\n");
		next();
		model.trim();
	});
};


/**
 * Send badges to pub/sub socket in the model
 */ 
exports.send = function(req, res, next) {
	console.log("controllers.send()\n");
	var badges = _.clone(req.body);
	model.send(badges, function(err) {
		if (err) return res.json(503, {error: true});
		res.json(200, { error: null});
		console.log("controllers.send() success\n");
	});
	next();
};

/**
 * Get the last 10 badges from the model
 */ 
exports.get = function(req, res) {
	model.get(function(err, data) {
		if (err) return res.json(503, { error: true} );
		res.json(200, data);
		console.log("controllers.get() success\n");
	});
};