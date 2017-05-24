$(document).ready(function(){

  $('#authentication-form').submit(function(){
          success: function(){
            alert("for submitted");
            // console.log('form submitted.');
          }
      // return false;
  });
  // $('#authentication-form').submit({
  //       // url : '/login.html', // or whatever
  //       // dataType : 'json',
  //       success : function (response) {
  //           console.log("to check if we get here");
  //           window.location("http://localhost:8080/login.html");
  //           // alert("The server says: " + response);
  //       }
  //   });

});