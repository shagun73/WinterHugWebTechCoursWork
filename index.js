var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");

var handle = {}
 handle["/"] = requestHandlers.index;
 handle["/index.html"] = requestHandlers.index;
 handle["/whatwedo.html"] = requestHandlers.whatwedo;
 handle["/news.html"] = requestHandlers.news;
 handle["/whoweare.html"] = requestHandlers.whoweare;
 handle["/blogs.html"] = requestHandlers.blog;
 handle["/getinvolved.html"] = requestHandlers.getinvolved;
 handle["/wherewework.html"] = requestHandlers.wherewework;
 handle["/cookiepolicy.html"] = requestHandlers.cookiepolicy;
 handle["/donate.html"] = requestHandlers.donate;
 handle["/donateform.html"] = requestHandlers.donateform;
 handle['/contactus.html'] = requestHandlers.contactus;
 handle["/donateportal.html"] = requestHandlers.donateportal;

 handle["/login.html"] = requestHandlers.login;
 handle["/forgetpassword.html"] = requestHandlers.forgetpassword;
 handle["/dashboard.html"] = requestHandlers.dashboard;
 handle["/blogform.html"] = requestHandlers.blogform;
 handle["/newsform.html"] = requestHandlers.newsform;
 handle["/annualreport.html"] = requestHandlers.annualreport;
 
 handle["/css/style.css"] = requestHandlers.style;

 handle["/authenticate.json"] = requestHandlers.authenticatefunction;

 handle["/js/login.js"] = requestHandlers.scriptLogin;
 handle["/js/blogform.js"] = requestHandlers.scriptblogform
 handle["/js/newsform.js"] = requestHandlers.scriptnewsform;

 handle["/img/main.jpg"] = requestHandlers.headerImage;
 handle["/img/about.jpg"] = requestHandlers.aboutImage;
 handle["/img/whoweare.jpg"] = requestHandlers.whoWeAreHeaderImage;
 handle["/img/getinvolved.jpg"] = requestHandlers.getInvolvedHeaderImage;
 handle["/img/wherewework.jpg"] = requestHandlers.whereWeWorkHeaderImage;
 handle["/img/donate.jpg"] = requestHandlers.donateImage;

 handle["/img/linkimage/fullsize/whoweare.png"] = requestHandlers.whoWeAreImage;
 handle["/img/linkimage/fullsize/whatwedo.png"] = requestHandlers.whatwedoImage;
 handle["/img/linkimage/fullsize/contribute.png"] = requestHandlers.getInvolvedImage;

 handle["/img/defaultprofile.png"] = requestHandlers.defaultprofile;

 handle["/img/news/foxnews1.jpg"] = requestHandlers.newsImage1;
 handle["/img/news/foxnews2.jpg"] = requestHandlers.newsImage2;
 handle["/img/news/foxnews3.jpg"] = requestHandlers.newsImage3;

 handle["/img/socialmediaicon/facebook.png"] = requestHandlers.facebook;
 handle["/img/socialmediaicon/googleplus.png"] = requestHandlers.googleplus;
 handle["/img/socialmediaicon/instagram.png"] = requestHandlers.instagram;
 handle["/img/socialmediaicon/snapchat.png"] = requestHandlers.snapchat;
 handle["/img/socialmediaicon/twitter.png"] = requestHandlers.twitter;

 handle["/img/missionVision.jpg"] = requestHandlers.missionVisionImage;
 handle["/img/shareWarmth.jpg"] = requestHandlers.shareWarmthImage;
 
server.index(router.route, handle);