var product = require('../../lib/db/models/product');

/**
 * add new users to users collection
 * @params 
 * @returns
*/
exports.addUser = function(req, res, next) {
	var params = req.body;
	
	product.save(params, function(err, result){
		if(err){
			// return next(new Unauthorized(errMsg['1006'], 1006));
			console.log('something went wrong');
		}
	});
	console.log('added');
	res.end('added successfully');
};

exports.getProducts = function(req, res, next) {
	var data = {};
	
	product.findAllProducts(data, function(err, result) {
		if(err) {
			// return next(new Unauthorized(errMsg['1008'], 1008));
			console.log('went wrong at get products api');
		}
		res.end(JSON.stringify(result));
	});
}