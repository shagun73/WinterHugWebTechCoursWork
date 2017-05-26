

	function setCookie(usrname,usrvalue,expireindays) {
	    var d = new Date();
	    d.setTime(d.getTime() + (expireindays*24*60*60*31));
	    var expires = "expires=" + d.toGMTString();
	    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
	}

	function getCookie(usrname) {
	    var name = usrname + "=";
	    var decodedCookie = decodeURIComponent(document.cookie);
	    var cookies = decodedCookie.split(';');
	    var i = 0;
	    for(i; i < cookies.length; i++) 
	    {
	        var u = cookies[i];
	        while (u.charAt(0) == ' ') {
	            u = u.substring(1);
	        }
	        if (u.indexOf(name) == 0) {
	            return u.substring(name.length, u.length);
	        }
	    }
	    return "";
	}

	function checkCookie() {
	    var user=getCookie("username");
	    if (user != "") {
	        alert("Thanks for visiting again " + user);
	    } else {
	       user = prompt("Please enter your name:","");
	       if (user != "" && user != null) {
	           setCookie("username", user, 30);
	       }
	    }
	}

