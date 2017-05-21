//https://api.instagram.com/oauth/authorize/?client_id=CLIENT-ID&redirect_uri=REDIRECT-URI&response_type=code&lobovuh.ru899df836c39f460aa37afc8e77b79671htttokenhttp://

var client = '899df836c39f460aa37afc8e77b79671';
var token = '4345763765.899df83.4a448d44c2874bb6b3ab9658e5382de6';

$(function(){
  $.ajax({
    url:'https://api.instagram.com/v1/users/self/media/recent/?access_token='+token,
    dataType:'jsonp',
    success: function(result){
      var data = result.data;
      data.forEach(function(e,i){
        $('.insta').append('<a href="'+e.link+'"><img src="'+e.images.thumbnail.url+'" /></a>');
      });
    }
  });
});
