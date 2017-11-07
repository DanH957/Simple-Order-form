var Accepted = 'False';

$(function(){
 $( "#card" ).keyup(function() {
        var type = $('#card').val();
	if (type.charAt(0) == "4"){
	  $("#type").html("Visa ");
	  if (type.length <= 16 & type.length >= 13){ 
	  $("#type").html("Visa <img src='greentick.png'  class='tick'/>");
        Accepted = 'True';
		}
	  } else if (type.charAt(0) == "5"){
	  $("#type").html("Mastercard");	
		if (type.length == 16){
		$("#type").html("Mastercard <img src='greentick.png'  class='tick'/>");
		Accepted = 'True';
		}
	} else if (type.charAt(0) == "3"){
      $("#type").text("American Express");
      	if (type.charAt(1) == "4" || type.charAt(1) == "7"){
		$("#type").html("American Express");
		    if (type.length == 15){
			$("#type").html("American Express <img src='greentick.png'  class='tick'/>");
			Accepted = 'True';
			}
			} else {
			$("#type").html("????");
			Accectped = 'False';
			}
			
		
     } else if (type.length != 0){
	 $("#type").html("???");	
	 Accecpted = 'False';
	 } else {
	 $("#type").html("");
	 Accecpted = 'False';
	 }
});
$(".btn.btn-primary").click(function(){
if(Accepted == 'True'){
	alert('Card Accepted');
	} else {
	alert('Card Declined');
	}
});

});
	
