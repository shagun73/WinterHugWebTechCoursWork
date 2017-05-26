var database = require("../WinterHugWebTechCW/database");
var fs = require("fs");
var OK = 200;

var querystring = require("querystring");

// ******************************************************************************* html *************************************************************************
function index(response, postData, pathname, type) {
 	console.log("index request is handled");
	 var file = "./public" + pathname;
     fs.readFile(file, ready);
     function ready(err, content) { deliver(response, type, err, content); }
 }

function whatwedo(response, postData, pathname, type) {
 	 console.log("whatwedo request is handled");
	 var file = "./public" + pathname;
     fs.readFile(file, ready);
     function ready(err, content) { deliver(response, type, err, content); }
 }

 function blog(response, postData, pathname, type) {
 	 console.log("blog request is handled");
	 var file = "./public" + pathname;
     fs.readFile(file, ready);
     function ready(err, content) { deliver(response, type, err, content); }
 }

 function defaultprofile(response, postData, pathname, type) {
 	 console.log("default profile picture request is handled");
	 var file = "./public" + pathname;
     fs.readFile(file, ready);
     function ready(err, content) { deliver(response, type, err, content); }
 }
 
 function whoweare(response, postData, pathname, type) {
 	 console.log("who we are html is handled");
	 var file = "./public" + pathname;
     fs.readFile(file, ready);
     function ready(err, content) { deliver(response, type, err, content); }
 }

 function news(response, postData, pathname, type) {
 	 console.log("news html is handled");
	 var file = "./public" + pathname;
     fs.readFile(file, ready);
     function ready(err, content) { deliver(response, type, err, content); }
 }

 function getinvolved(response, postData, pathname, type) {
 	 console.log("get involved html page is handled");
	 var file = "./public" + pathname;
     fs.readFile(file, ready);
     function ready(err, content) { deliver(response, type, err, content); }
 }

 function wherewework(response, postData, pathname, type) {
 	 console.log("where we work html page is handled");
	 var file = "./public" + pathname;
     fs.readFile(file, ready);
     function ready(err, content) { deliver(response, type, err, content); }
 }

 function cookiepolicy(response, postData, pathname, type) {
 	console.log("cookiepolicy html page is handled");
	 var file = "./public" + pathname;
     fs.readFile(file, ready);
     function ready(err, content) { deliver(response, type, err, content); }
 }

  function donate(response, postData, pathname, type) {
 	console.log("donate html page is handled");
	 var file = "./public" + pathname;
     fs.readFile(file, ready);
     function ready(err, content) { deliver(response, type, err, content); }
 }

 function donateform(response, postData, pathname, type) {
 	console.log("donate-form html page is handled");
	 var file = "./public" + pathname;
     fs.readFile(file, ready);
     function ready(err, content) { deliver(response, type, err, content); }
 }
 
 function donateportal(response, postData, pathname, type) {
 	console.log("donateportal html page is handled");
	 var file = "./public" + pathname;
     fs.readFile(file, ready);
     function ready(err, content) { deliver(response, type, err, content); }
 }
 function annualreport(response, postData, pathname, type) {
 	console.log("donateportal html page is handled");
	 var file = "./public" + pathname;
     fs.readFile(file, ready);
     function ready(err, content) { deliver(response, type, err, content); }
 }
 function contactus(response, postData, pathname, type) {
 	console.log(" contactus html page is handled");
	 var file = "./public" + pathname;
     fs.readFile(file, ready);
     function ready(err, content) { deliver(response, type, err, content); }
 }

  function login(response, postData, pathname, type) {
 	 console.log("login html page is handled");
	 var file = "./public/admin" + pathname;
     fs.readFile(file, ready);
     function ready(err, content) { deliver(response, type, err, content); }
 }

 function forgetpassword(response, postData, pathname, type) {
 	 console.log("forgot password html page is handled");
	 var file = "./public/admin" + pathname;
     fs.readFile(file, ready);
     function ready(err, content) { deliver(response, type, err, content); }
 }

 function dashboard(response, postData, pathname, type){
	console.log("dashboard html request is handled");

	var formData = querystring.parse(postData);
	database.authentication(formData.username, formData.password, function(result){
		console.log(result);
		if(result == 1){
			content = '{data:'+result.toString() +'}';
			var json = JSON.stringify(eval("(" + content + ")"));
			type = "application/json";
			var err;
			deliver(response, type, err, json);
			// var file = "./public/admin" + pathname;
			// fs.readFile(file, ready);
			// function ready(err, content) { deliver(response, type, err, content);}
		}else{
			content = '{data:'+result.toString() +'}';
			var json = JSON.stringify(eval("(" + content + ")"));
			type = "application/json";
			var err;
			deliver(response, type, err, json);
		}
	});
}

function blogform(response, postData, pathname, type) {
 	 console.log("blog form html page is handled");
	 var file = "./public/admin" + pathname;
     fs.readFile(file, ready);
     function ready(err, content) { deliver(response, type, err, content); }
 }

 function newsform(response, postData, pathname, type) {
 	 console.log("news form html page is handled");
	 var file = "./public/admin" + pathname;
     fs.readFile(file, ready);
     function ready(err, content) { deliver(response, type, err, content); }
 }

// ************************************************************************************* css *********************************************************************

function style(response, postData, pathname, type){
	console.log("style.css request is handled");	
	var file = "./public" + pathname;
	fs.readFile(file, ready);
	function ready(err, content) { deliver(response, type, err, content);}
}

// ***************************************************************************************javascript******************************************************************

function scriptLogin(response, postData, pathname, type){
	console.log("login script request is handled");	
	var file = "./public" + pathname;
	fs.readFile(file, ready);
	function ready(err, content) { deliver(response, type, err, content);}
}

function scriptblogform(response, postData, pathname, type){
	console.log("login script request is handled");	
	var file = "./public" + pathname;
	fs.readFile(file, ready);
	function ready(err, content) { deliver(response, type, err, content);}
}

function scriptnewsform(response, postData, pathname, type){
	console.log("scriptnewsform script request is handled");	
	var file = "./public" + pathname;
	fs.readFile(file, ready);
	function ready(err, content) { deliver(response, type, err, content);}
}

// *****************************************************************************images*****************************************************************************

function headerImage(response, postData, pathname, type){
	console.log("main page headerImage request is handled");	
	var file = "./public" + pathname;
	fs.readFile(file, ready);
	function ready(err, content) { deliver(response, type, err, content);}
}
function whoWeAreHeaderImage(response, postData, pathname, type){
	console.log("who we are headerImage request is handled");	
	var file = "./public" + pathname;
	fs.readFile(file, ready);
	function ready(err, content) { deliver(response, type, err, content);}
}
function getInvolvedHeaderImage(response, postData, pathname, type){
	console.log("get involved headerImage request is handled");	
	var file = "./public" + pathname;
	fs.readFile(file, ready);
	function ready(err, content) { deliver(response, type, err, content);}
}
function whereWeWorkHeaderImage(response, postData, pathname, type){
	console.log("where we work headerImage request is handled");	
	var file = "./public" + pathname;
	fs.readFile(file, ready);
	function ready(err, content) { deliver(response, type, err, content);}
}
function whoWeAreImage(response, postData, pathname, type){
	console.log("whoWeAre Image request is handled");	
	var file = "./public" + pathname;
	fs.readFile(file, ready);
	function ready(err, content) { deliver(response, type, err, content);}
}

function whatwedoImage(response, postData, pathname, type){
	console.log("whatwedo Image request is handled");	
	var file = "./public" + pathname;
	fs.readFile(file, ready);
	function ready(err, content) { deliver(response, type, err, content);}
}

function donateImage(response, postData, pathname, type){
	console.log("donate Image request is handled");	
	var file = "./public" + pathname;
	fs.readFile(file, ready);
	function ready(err, content) { deliver(response, type, err, content);}
}

function getInvolvedImage(response, postData, pathname, type){
	console.log("Get Involved Image request is handled");	
	var file = "./public" + pathname;
	fs.readFile(file, ready);
	function ready(err, content) { deliver(response, type, err, content);}
}

function newsImage1(response, postData, pathname, type){
	console.log("newsImage1 Image request is handled");	
	var file = "./public" + pathname;
	fs.readFile(file, ready);
	function ready(err, content) { deliver(response, type, err, content);}
}
function newsImage2(response, postData, pathname, type){
	console.log("newsImage2 Image request is handled");	
	var file = "./public" + pathname;
	fs.readFile(file, ready);
	function ready(err, content) { deliver(response, type, err, content);}
}
function newsImage3(response, postData, pathname, type){
	console.log("newsImage3 Image request is handled");	
	var file = "./public" + pathname;
	fs.readFile(file, ready);
	function ready(err, content) { deliver(response, type, err, content);}
}
function facebook(response, postData, pathname, type){
	console.log("facebook Image request is handled");	
	var file = "./public" + pathname;
	fs.readFile(file, ready);
	function ready(err, content) { deliver(response, type, err, content);}
}
function googleplus(response, postData, pathname, type){
	console.log("googleplus Image request is handled");	
	var file = "./public" + pathname;
	fs.readFile(file, ready);
	function ready(err, content) { deliver(response, type, err, content);}
}
function instagram(response, postData, pathname, type){
	console.log("instagram Image request is handled");	
	var file = "./public" + pathname;
	fs.readFile(file, ready);
	function ready(err, content) { deliver(response, type, err, content);}
}
function snapchat(response, postData, pathname, type){
	console.log("snapchat Image request is handled");	
	var file = "./public" + pathname;
	fs.readFile(file, ready);
	function ready(err, content) { deliver(response, type, err, content);}
}
function twitter(response, postData, pathname, type){
	console.log("twitter Image request is handled");	
	var file = "./public" + pathname;
	fs.readFile(file, ready);
	function ready(err, content) { deliver(response, type, err, content);}
}

function aboutImage(response, postData, pathname, type){
	console.log("headerImage request is handled");	
	var file = "./public" + pathname;
	fs.readFile(file, ready);
	function ready(err, content) { deliver(response, type, err, content);}
}
function missionVisionImage(response, postData, pathname, type){
	console.log("headerImage request is handled");	
	var file = "./public" + pathname;
	fs.readFile(file, ready);
	function ready(err, content) { deliver(response, type, err, content);}
}
function shareWarmthImage(response, postData, pathname, type){
	console.log("headerImage request is handled");	
	var file = "./public" + pathname;
	fs.readFile(file, ready);
	function ready(err, content) { deliver(response, type, err, content);}
}

 exports.index = index;
 exports.whatwedo = whatwedo;
 exports.blog = blog;
 exports.whoweare = whoweare;
 exports.news = news;
 exports.getinvolved = getinvolved;
 exports.wherewework = wherewework;
 exports.cookiepolicy = cookiepolicy;
 exports.donate = donate;
 exports.donateform = donateform;
 exports.contactus = contactus;
 exports.donateportal = donateportal;

 exports.login = login;
 exports.forgetpassword = forgetpassword;
 exports.dashboard = dashboard;
 exports.blogform = blogform;
 exports.newsform = newsform;
 exports.annualreport = annualreport;

 exports.style = style;
 exports.scriptblogform = scriptblogform;
 exports.scriptnewsform = scriptnewsform;

 exports.scriptLogin = scriptLogin;

 exports.headerImage = headerImage;
 exports.whoWeAreHeaderImage = whoWeAreHeaderImage;
 exports.getInvolvedHeaderImage =  getInvolvedHeaderImage;
 exports.whereWeWorkHeaderImage = whereWeWorkHeaderImage;
 exports.whoWeAreImage = whoWeAreImage;
 exports.whatwedoImage = whatwedoImage;
 exports.getInvolvedImage = getInvolvedImage;
 exports.donateImage = donateImage;

 exports.defaultprofile = defaultprofile;
 exports.newsImage1 = newsImage1;
 exports.newsImage2 = newsImage2;
 exports.newsImage3 = newsImage3;

 exports.facebook = facebook;
 exports.googleplus = googleplus;
 exports.instagram = instagram;
 exports.snapchat = snapchat;
 exports.twitter = twitter;

 exports.aboutImage = aboutImage;
 exports.shareWarmthImage = shareWarmthImage;
 exports.missionVisionImage = missionVisionImage;


// Deliver the file that has been read in to the browser.
function deliver(response, type, err, content) {
    if (err) {
    	return fail(response, NotFound, "File not found");
    }
    var typeHeader = { "Content-Type": type };
    response.writeHead(OK, typeHeader);
    response.write(content);
    response.end();
}