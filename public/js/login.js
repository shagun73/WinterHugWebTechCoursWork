$(document).ready(function(){

  $('#submitButton').click(function(){
        $.ajax({
        type: 'POST',
        data: 'username=' + $('#username').val() + '&password=' + $('#password').val(),
        contentType: "application/json",
        dataType:'json',
        async:false,
        url: 'http://localhost:8080/dashboard.html',                      
        success: function(response) {
            alert(response);
            // console.log(response);
            // console.log(JSON.stringify(data));                               
        },
        error: function(error) {
            console.log("some error in fetching the notifications");
         }

    });
  });

});