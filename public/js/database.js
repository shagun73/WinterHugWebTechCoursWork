function helloworld(pathname) {
 	// console.log("index request is handled");
	 // var file = "./public" + pathname;
  //    fs.readFile(file, ready);
  //    function ready(err, content) { deliver(response, type, err, content); }
  	return("hello world reply for path:" + pathname);
 }

 exports.helloworld = helloworld;