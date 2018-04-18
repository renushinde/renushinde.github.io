

//apiEventful= "https://accesscontrolalloworiginall.herokuapp.com/http://api.eventful.com/json/events/search?app_key=4vLkZPzTDzRq35rj&q=music"; 

$(document).ready(function(){

function getNewEvent(){

	$.ajax({
      
      url:"https://accesscontrolalloworiginall.herokuapp.com/http://api.eventful.com/json/events/search?app_key=4vLkZPzTDzRq35rj&l=San+Francisco&date=today",
	  success: function(response) {
	  	  events="";
	  	   for (let i=1; i< 7; i++) {

         events = `
         <div class ="col-sm-6 col-md-6">
         <div class ="content">
         <a href=${response.events.event[i].url} target="_blank"><img class="img-responsive thumbnail" src=${response.events.event[i].image.medium.url}></a>
         <h6> ${response.events.event[i].title}</h6> </br>
         <h6> <i>${response.events.event[i].venue_address}</i></h6>
         </div>
         </div>
         `;
	  		
 $("#sectionEventful").append(events);
	  	}
	  	
	  }

	});
}
// getNewEvent();

 $(".events").on("click", function() {
   getNewEvent();

 });

});