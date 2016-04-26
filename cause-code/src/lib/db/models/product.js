//CRUD on config collection inside MongoDb

var procEnv = (process.env.NODE_ENV && process.env.NODE_ENV != '') ? process.env.NODE_ENV : 'development',
    getDb = require('../connect'),
    config = require('../../../config/'+procEnv+'.json');
    


function product(data) {
  var d = new Date();
  this.active = true;
  this.enabled = true;
  this.random = Math.random();
  this.created = d.getTime();
  this.createdISO = d.toISOString();
  this.updated = d.getTime();
  this.updatedISO = d.toISOString();
}

//add new user
product.save = function(data, done) {

  // var data = this;
  getDb('ccDb',function(err, db) {
    if (err) {
      return done(err);
    }
    db.collection('products-coll').insert(data, function(err, results) {
      if (err) {
        return done(err);
      }
      done(null, results);
    });
  });
};

//find a user
product.findUser = function(query, done) {

  getDb('ccDb', function(err, db) {
    if (err) {
      return done(err);
    }

    db.collection('products-coll').findOne(query, function(err, results) {
      if (err) {
        return done(err);
      }
      done(null, results);
    });
  });
};

//find all product
product.findAllProducts = function(query, done) {
  getDb('ccDb', function(err, db) {
    if (err) {
      return done(err);
    }

    db.collection('products-coll').find(query, function(err, results) {
      if (err) {
        return done(err);
      }
      results.toArray(function(err, items){
        if (err) {
          return done(err);
        }
        done(null, items);
      });
    });
  });
};

//update user details
product.update = function(query, option, done) {

  getDb('ccDb', function(err, db) {
    if (err) {
      return done(err);
    }

    db.collection('products-coll').update(query, option, function(err, results) {
      if (err) {
        return done(err);
      }

      done(null, results);
    });
  });
};

exports = module.exports = product;
