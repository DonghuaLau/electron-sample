const Imap = require('imap')

function emfs (config) {

	if (!(this instanceof emfs))
		return new emfs(config);

	config || (config = {});
	this._config = config;

	this._index_dir = "EINDEX";
	this._data_dir = "EDATA";
	
	this._imap = null;

	console.dir(config);

	this.init();
}

emfs.prototype.init = function() {
	console.log("emfs init");

	this._imap = new Imap(this._config);
	
	this._imap.once('ready', function(){
		console.log("imap ready");
	});

	this._imap.once('error', function(){
		console.log("imap error");
	});

	this._imap.once('end', function(){
		console.log("imap end");
	});
	
	this._imap.connect();

}

emfs.prototype.open_box = function() {
	console.log("emfs open_box");
}

module.exports = emfs;
