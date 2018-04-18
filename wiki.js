
//var apiUrl ="https://en.wikipedia.org/w/api.php?action=opensearch&search="+searchTerm+"&format=json&callback=?";

$(document).ready(function(){

$('#search').on('click', function(){

var searchTerm = $('#searchTerm').val();
var apiUrl ="https://en.wikipedia.org/w/api.php?action=opensearch&search="+ searchTerm +"&format=json&callback=?";


$.ajax({
	  //  action: 'query',
	   // data:queryData,
	    type:'GET',
        dataType: 'json',
        async:false,
        url:apiUrl,
        
  success:function(response){

  	//console.log(response);
     $('#output').html('');
     for (let i=0; i<response[1].length; i++){

  	$('#output').append("<li><a href= "+response[3][i]+">"+response[1][i]+"</a><p>"+response[2][i]+"</p></li>");

  }
  },
  error:function(errorMessage){

  	alert('oops, something went wrong!');
  }


});

});

});

