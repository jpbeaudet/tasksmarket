// Author: Jean-Philippe Beaudet @ S3R3NITY Technology
// 
// Here will go all the function linked to the routes. It will transmit refreshed data object to jade templates 

var mongoose = require('mongoose');
//var data = require('../models/data');
//var Data = mongoose.model('data', Data);
var path = require('path');
var mime = require('mime');
var fs = require("fs");


exports.index = function (req, res) {
    var data = {
        title: " Tasks Market !"

    };
    res.render('index/index', data);
};

exports.back = function (req, res) {
	res.redirect(req.get('referer'));
};

exports.employee = function (req, res) {
    var data = {
        title: " Tasks Market !"

    };
    
    res.render('index/login-employee', data);
};

exports.employer = function (req, res) {
    var data = {
        title: " Tasks Market !"

    };
    res.render('index/login-employer', data);
};

exports.profile = function (req, res) {
	// Check if logged in 
    if(!req.user) {
        res.redirect("/");
        return;
    }else{
    	// replace by db check fir hours worked
    	var hourworked = 10;
    	// replace by db check fir avatar link
    	var avatar = "jp.jpg";
    var data = {
        title: " Tasks Market !",
        username: req.user.username,
        jobtitle: " Developper of Tasks Market !",
        hourworked: " Worked " + hourworked + " hours until now.",
        //avatar: '/public/profiles/img/'+ avatar 
        avatar: '/img/'+ avatar 
    };
    res.render('index/profile', data);
    };
};

exports.myjobs = function (req, res) {
	// Check if logged in 
    if(!req.user) {
        res.redirect("/");
        return;
    }else{
    var data = {
        title: " Tasks Market !",
        username: req.user.username

    };
    res.render('index/myjobs', data);
    };
};

exports.homeemployee = function (req, res) {
	// Check if logged in 
    if(!req.user) {
        res.redirect("/");
        return;
    }else{

    var data = {
        title: " Tasks Market !",
        username: req.user.username
    
    };
    res.render('index/home-employee', data);
    }  
};

exports.homeemployer = function (req, res) {
	// Check if logged in 
    if(!req.user) {
        res.redirect("/");
        return;
    }else{

    var data = {
        title: " Tasks Market !",
        username: req.user.username
    
    };
    res.render('index/home-employer', data);
    } 
};
