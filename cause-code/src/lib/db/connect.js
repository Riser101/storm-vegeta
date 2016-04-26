'use strict';

var procEnv = (process.env.NODE_ENV && process.env.NODE_ENV != '' ) ? process.env.NODE_ENV : 'development',
	MongoClient = require('mongodb').MongoClient,
	config = require('../../config/'+procEnv+'.json'),
	CONNECTING = false,
	queue = [],
	dbConnObj = {};

exports = module.exports = getDb;

/**
 * create database connect when needed based on dbtoConnect passed
 * @param String dbtoConnect, callback function
 * return
*/
function getDb(dbtoConnect,done) {
	//if already connect to passed dbtoConnect
	if (dbConnObj[dbtoConnect]) {
    	return done(null, dbConnObj[dbtoConnect]);
  	}

	if(CONNECTING === true) {
		return queue.push(done);
  	}

	CONNECTING = true;
	

	var url = config.mongoDb[dbtoConnect];
	var mongoClient = new MongoClient();
	if(url == undefined){
		// debug('Mongo database does not match with config file');
		console.log('Mongo database does not match with config file');
	}else{
		mongoClient.connect(url, function(err, db) {
			if (err) {
				// debug(err);
				console.log(err);
				return done(err);
			}
			dbConnObj[dbtoConnect] = db;
			// debug('Connected to db: '+dbtoConnect);
			console.log('Connected to db: '+dbtoConnect);
			CONNECTING = false;
			done(null, dbConnObj[dbtoConnect]);
		});
	}	
}

function unwrap() {
  queue.forEach(getDb);
}
