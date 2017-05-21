var database = require("./public/js/database");
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

 function whoweare(response, postData, pathname, type) {
 	 console.log("who we are html is handled");
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

  function login(response, postData, pathname, type) {
 	 console.log("login html page is handled");
	 var file = "./public/admin" + pathname;
     fs.readFile(file, ready);
     function ready(err, content) { deliver(response, type, err, content); }
 }

 function dashboard(response, postData, pathname, type){
	console.log("dashboard html request is handled");

	var formData = querystring.parse(postData);
	database.authentication(formData.username, formData.password, function(result){
		if(result == 1){
			var file = "./public/admin" + pathname;
			fs.readFile(file, ready);
			function ready(err, content) { deliver(response, type, err, content);}
		}
	});
}

// ************************************************************************************* css *********************************************************************

function style(response, postData, pathname, type){
	console.log("style.css request is handled");	
	var file = "./public" + pathname;
	fs.readFile(file, ready);
	function ready(err, content) { deliver(response, type, err, content);}
}

// ***************************************************************************************javascript******************************************************************



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
 exports.whoweare = whoweare;
 exports.getinvolved = getinvolved;
 exports.wherewework = wherewework;
 exports.cookiepolicy = cookiepolicy;
 exports.donate = donate;

 exports.login = login;
 exports.dashboard = dashboard;

 exports.style = style;

 exports.headerImage = headerImage;
 exports.whoWeAreHeaderImage = whoWeAreHeaderImage;
 exports.getInvolvedHeaderImage =  getInvolvedHeaderImage;
 exports.whereWeWorkHeaderImage = whereWeWorkHeaderImage;
 exports.whoWeAreImage = whoWeAreImage;
 exports.whatwedoImage = whatwedoImage;
 exports.getInvolvedImage = getInvolvedImage;
 exports.donateImage = donateImage;

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