// Author: Jean-Philippe Beaudet @ S3R3NITY Technology
// 
//

var index = require('../routes/index');
var express = require('express');
var mongoose = require('mongoose');
var passport = require('passport');
var Account = require('../models/account');
var data = require('../models/data');
var Data = mongoose.model('data', Data);

module.exports = function (app) {
	
	//Main routes
	///////////////////////////
	app.get('/', index.index);
	app.get('/contact', index.contact);
	app.get('/pricing', index.pricing);
	app.get('/home-employee', index.homeemployee);
	app.get('/home-employer', index.homeemployer);
	app.get('/myjobs', index.myjobs);
	app.get('/login-employee', index.employee);
	app.get('/login-employer', index.employer);
	app.get('/profile', index.profile);	
	// auth routes
	/////////////////////////////
	app.get('/register-employee', function(req, res) {
	    res.render('index/register-employee', {title:" Register" });
	});
	app.get('/register-employer', function(req, res) {
	    res.render('index/register-employer', {title:" Register" });
	});
	app.post('/register-employee', function(req, res, next) {
      Account.register(new Account({ username : req.body.username }), req.body.password, function(err, account) {
        if (err) {
          return res.render("index/register-employee", {info: "Sorry. That username already exists. Try again."});
        }

        passport.authenticate('local')(req, res, function () {
            req.session.save(function (err) {
               if (err) {
                    return next(err);
                }
                var instance = new Data();
                instance.username = req.body.username;
                instance.clientType = "employee";
                instance.isAdmin = false;
                instance.save(function (err) {          	   
          	    });
                res.redirect('/home-employee');
           });
        });
   });
   });

	app.post('/register-employer', function(req, res, next) {
	      Account.register(new Account({ username : req.body.username }), req.body.password, function(err, account) {
	        if (err) {
	          return res.render("index/register-employer", {info: "Sorry. That username already exists. Try again."});
	        }

	        passport.authenticate('local')(req, res, function () {
	            req.session.save(function (err) {
	               if (err) {
	                    return next(err);
	                }
	                var instance = new Data();
	                instance.username = req.body.username;
	                instance.clientType = "employer";
	                instance.isAdmin = false;
	                instance.save(function (err) {          	   
	          	    });
	                res.redirect('/home-employer');
	           });
	        });
	   });
	   });	
	
	app.post('/login-employee', passport.authenticate('local'), function(req, res, next) {
	    req.session.save(function (err) {
	        if (err) {
	        	return res.redirect('/home-employee', {info: "Sorry. Password and username does not match. Try again."});
	        	
	        }
	        res.redirect('/home-employee');
	    });
	});

	app.post('/login-employer', passport.authenticate('local'), function(req, res, next) {
	    req.session.save(function (err) {
	        if (err) {
	        	return res.redirect('/home-employee', {info: "Sorry. Password and username does not match. Try again."});
	        }
	        res.redirect('/home-employer');
	    });
	});	
	
	app.get('/logout', function(req, res, next) {
      req.logout();
      req.session.save(function (err) {
        if (err) {
            return next(err);
        }
        res.redirect('/');
    });
    });	

	
	// error handlers
	/////////////////////////////////
	
	// development error handler
	// will print stacktrace
	if (app.get('env') === 'development') {
	    app.use(function(err, req, res, next) {
	        res.status(err.status || 500);
	        res.render('index/error', {
	            message: err.message,
	            error: err
	        });
	    });
	}

	// production error handler
	// no stacktraces leaked to user
	app.use(function(err, req, res, next) {
	    res.status(err.status || 500);
	    res.render('index/error', {
	        message: err.message,
	        error: {}
	    });
	});
};
