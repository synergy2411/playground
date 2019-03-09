var EventEmitter = require('events').EventEmitter;
var emitter = new EventEmitter();
var Stream = require('stream').Stream;
var Readable = require("stream").Readable;
var Writable = require("stream").Writable;
var Transofrm = require("stream").Transform;
var Duplex = require("stream").Duplex;

console.log(new Readable() instanceof Stream);
console.log(new Stream() instanceof EventEmitter);
