"use strict"
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('C:/Users/user/Documents/GitHub/WinterHugWebTechCW/public/database/WinterHug.db');

function authentication(un, pass) {

	var flag = 0;
	db.serialize(function () {
  		db.all("SELECT COUNT(userID) AS population FROM user WHERE username = '" + un + "' OR password = '" + pass + "'", function (err, row) {
  			if (err){
  				throw err;
  			}else{
  				if(row[0].population == 1){
  				flag = 1; 
  				}
  			}	
  		});
  		db.all("SELECT COUNT(userID) AS population FROM user WHERE username = '" + un + "' AND password = '" + pass + "'", function (err, row) {
  			if (err){
  				throw err;
  			}else{
  				if(row[0].population == 1){
  				flag = 2; 
  				}
  			}
  		});
	});
  	return(flag);
 }

 exports.authentication = authentication;