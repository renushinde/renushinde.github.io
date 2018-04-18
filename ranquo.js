

$(document).ready(function() {
	function getNewQuote(){
       $.ajax({
         url: 'https://api.forismatic.com/api/1.0/',
         jsonp:'jsonp',
         dataType:'jsonp',

         data: {
         	method:'getQuote',
          lang: 'en',
          format: 'jsonp'
         },
         success:function(response){
         	$(".quote").html(response.quoteText);
    	    $(".author").html(response.quoteAuthor);
       //console.log (response.quoteText);
         //	console.log(response.quoteAuthor);
         }

       });

	}
getNewQuote();

$("#newQuote").on("click", function(){
getNewQuote();
});

/*$('#favQuote').on("click", function(){
 alert("connected!");
});*/

/*$("#showQuote").on("click", function(){
 alert("connected");
});*/
});

var config = {

    apiKey: "AIzaSyCuF_XPBVRzpPSonYK7tMmBBr40V61-U_w",
    authDomain: "quotegenerator-5fb59.firebaseapp.com",
    databaseURL: "https://quotegenerator-5fb59.firebaseio.com",
    projectId: "quotegenerator-5fb59",
    storageBucket: "",
    messagingSenderId: "293822846795"
  };


    firebase.initializeApp(config);
    const messageAppReference = firebase.database(); // created instance in the database. 
    
$(document).ready(function() {
     $("#favQuote").on("click", function(event){

         event.preventDefault()
         const message = $(".quote").text();

         const messagesReference = messageAppReference.ref('savedQuotes'); // created a node 
        
         var data = {
             message: message
             }
  
        messagesReference.push(data);
        console.log(messagesReference);

     });
     
     
 });

    $("#showQuote").on("click", function() {

      messageAppReference.ref('savedQuotes').on('value', function (results) {   // callback function specify parameters for results.
      const $messageBoard = $('.message-board'); 
      //$messageBoard.toggle(); 
      let messages = [];
     
      const allMsgs = results.val(); // giving out results
      // iterate through results coming from database call; messages
      for (let msg in allMsgs) {
        const message = allMsgs[msg].message;  // msg is the key(object)
       
        // create message element
        const $messageListElement = $('<li>');

        // add id as data attribute so we can refer to later for updating
        $messageListElement.attr('data-id', msg);  // looked up from the database. 

        // add message to li
        $messageListElement.html(message); // text of the message.
        // push element to array of messages -- this is pushing to an array, not HTTP push
       messages.push($messageListElement);
      }

      // remove lis to avoid dupes 
      // .empty() is a jQuery method to remove all child nodes
      $messageBoard.empty();
      for (let i in messages){ // array
        $messageBoard.append(messages[i]);
      }
    });
     })

// function getQuote() {
  /*const messagesReference = messageAppReference.ref('savedQuotes');

   $("#showQuote").on("click", function(results) {
    const messagesReference = messageAppReference.ref('savedQuotes');
         const $messageBoard = $('.message-board');  //  selected ul
         let messages = [];

     const allMsgs = $(".quote").text();
     console.log(allMsgs);

     for(let msg in allMsgs ) {
      const message = allMsgs[msg].message;
      const $messageListElement = $('<li>');    // created li
      $messageListElement.attr('message', msg);
      $messageListElement.text(message);
      messages.push($messageListElement);
      $messageListElement.append(allMsgs);  
      $messageBoard.append($messageListElement);
     }

    });

}
getQuote();

    
    */



