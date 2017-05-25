$(document).ready(function(){

  $(document).ready(function() {
    $('#news-topic').on('blur', function() {
        if( $('#news-topic').val().length < 20){
            $('#news-title-warning').show();
            $('#news-title-warning').text("Headline should contain atleast 20 charactrs.");
        }else{
            $('#news-title-warning').hide();
        }
    });

    $('#news-text').on('blur', function() {
        if( $('#news-text').val().length < 200){
            $('#news-text-warning').show();
            $('#news-text-warning').text("Content should contain atleast 200 charactrs.");
        }else{
            $('#news-text-warning').hide();
        }
    });
  });

  $('#news-form-submit').click(function(){
    var ext = $('#news-image-warning').val().split('.').pop().toLowerCase();
    if( $('#news-topic').val().length < 20){
          $('#news-title-warning').show();
          $('#news-title-warning').text("Headline should contain atleast 20 charactrs.");
    }else if ($('#news-text').val().length < 200) {
          $('#news-text-warning').show();
          $('#news-text-warning').text("Content should contain atleast 200 charactrs.");
    }else if ($('#pic').get(0).files.length === 0) {
          $('#news-image-warning').show();
          $('#news-image-warning').text("No Image selected");
    }else if($.inArray(ext, ['png','jpg','jpeg']) == -1) {
          $('#news-image-warning').show();
          $('#news-image-warning').text("only images can be uploaded of type png, jpg, jpeg");
    }else{
          $('#news-title-warning').hide();
          $('#news-image-warning').hide();
          $('#news-text-warning').hide();
      }
  });
  
  // $('#submitButton').click(function(){

  //       if( !$('#username').val() ) { //if it is blank. 
  //         $('#authentication-warning').show();
  //         $('#authentication-warning').text("Username can't be empty");   
  //       }else if(!$('#password').val()){
  //         $('#authentication-warning').show();
  //         $('#authentication-warning').text("password can't be empty");
  //       }else{
  //           $('#authentication-warning').hide();
            
  //           $.ajax({
  //               type: 'POST',
  //               data: 'username=' + $('#username').val() + '&password=' + $('#password').val(),
  //               contentType: "application/json",
  //               dataType:'json',
  //               async:false,
  //               url: 'http://localhost:8080/dashboard.html',                      
  //               success: function(response) {
  //                   alert(response);
  //                   // console.log(response);
  //                   // console.log(JSON.stringify(data));                               
  //               },
  //               error: function(error) {
  //                   console.log("some error in fetching the notifications");
  //                }
  //           });
  //       }
  // });
});