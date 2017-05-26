$(document).ready(function(){

  $(document).ready(function() {
    $('#topic').on('blur', function() {
        if( $('#topic').val().length < 20){
            $('#blog-title-warning').show();
            $('#blog-title-warning').text("Topic should contain atleast 20 charactrs.");
        }else{
            $('#blog-title-warning').hide();
        }
    });

    $('#blog-text').on('blur', function() {
        if( $('#blog-text').val().length < 200){
            $('#blog-text-warning').show();
            $('#blog-text-warning').text("Content should contain atleast 200 charactrs.");
        }else{
            $('#blog-text-warning').hide();
        }
    });
  });

  $('#blog-form-submit').click(function(){

    var ext = $('#blog-image-warning').val().split('.').pop().toLowerCase();
    if( $('#topic').val().length < 20){
          $('#blog-title-warning').show();
          $('#blog-title-warning').text("Topic should contain atleast 20 charactrs.");
    }else if ($('#blog-text').val().length < 200) {
          $('#blog-text-warning').show();
          $('#blog-text-warning').text("Content should contain atleast 200 charactrs.");
    }else if ($('#pic').get(0).files.length === 0) {
          $('#blog-image-warning').show();
          $('#blog-image-warning').text("No Image selected");
    // }else if($.inArray(ext, ['png','jpg','jpeg']) == -1) {
    //       $('#blog-image-warning').show();
    //       $('#blog-image-warning').text("only images can be uploaded of type png, jpg, jpeg");
    // }
    }else{
          $('#blog-title-warning').hide();
          $('#blog-image-warning').hide();
          $('#blog-text-warning').hide();

          // taking just the name of the file.
          var imageName = $('#pic').val().replace(/C:\\fakepath\\/i, '');
          imageName = imageName.substring(imageName.lastIndexOf('/')+1, imageName.lastIndexOf('.'));

          var blobpicture = $('#pic')[0].files[0];

           $.ajax({
              type: 'POST',
              data: 'topic=' + $('#topic').val() + '&text=' + $('#blog-text').val() + '&imageName='+ imageName +'&image=' + blobpicture,
              contentType: "application/json",
              dataType:'json',
              async:false,
              url: 'http://localhost:8080/blogentry.json',                      
              success: function(response) {
                  var obj = JSON.parse(JSON.stringify(response));
                  if(obj.data == 0){
                      alert("blog submitted");
                      $('#topic').val("");
                      $('#blog-text').val("");
                      $('#pic').val("");
                   }                       
              },
              error: function(error) {
                  console.log("some error in fetching the notifications");
               }
          });
      }
  });

});