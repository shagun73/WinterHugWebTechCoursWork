$(document).ready(function(){

  $('#authentication-warning').hide();
  $('#submitButton').click(function(){

        if( !$('#username').val() ) {
          $('#authentication-warning').show();
          $('#authentication-warning').text("Username can't be empty");   
        }else if(!$('#password').val()){
          $('#authentication-warning').show();
          $('#authentication-warning').text("password can't be empty");
        }else{
            $('#authentication-warning').hide();
            
            $.ajax({
                type: 'POST',
                data: 'username=' + $('#username').val() + '&password=' + $('#password').val(),
                contentType: "application/json",
                dataType:'json',
                async:false,
                url: 'http://localhost:8080/authenticate.json',                      
                success: function(response) {
                    var obj = JSON.parse(JSON.stringify(response));
                    if(obj.data == 1){
                      $('#username').val("");
                      $('#password').val("");
                      window.location.href = "http://localhost:8080/dashboard.html";
                    }else{
                        $('#authentication-warning').show();
                        $('#authentication-warning').text("No such account exist.");
                        $('#username').val("");
                        $('#password').val("");
                    }                            
                },
                error: function(error) {
                    console.log("some error in fetching the notifications");
                 }
            });
        }
  });
});