'use strict';

var axon = require('axon');
var socket = axon.socket('pub');
socket.bind(8001);

/**
 * Send a badge to the publish socket
 */
 exports.send = function(badge) {
 	socket.send(badge);
 };