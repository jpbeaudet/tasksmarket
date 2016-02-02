var loc = false;
var ok = true;

(function($){
	var loc = false;
	var ok = true;
	 console.log("jquery start !!!!");	
	// TODO : Here will go all jquery stuff

	 $('#loc_container').hide( "fast", function() {
 	 });
	$( "#loc" ).click(function() {	
		 if (loc){	
			  $("#loc_container").hide();
			  loc = false;
		 }else{
			  $("#loc_container").show();
			  loc = true;
		 }
		});

	$( ".btn-primary.btn-xs" ).click(function() {	

		 var id = $(this).closest('table');
		 id = id.children('tbody').children('tr').children('td').children('.container-fluid');

		 if (ok){	
			  $(id).hide();
			  ok = false;
		 }else{
			  $(id).show();
			  ok = true;
		 }
		});
	$( ".btn-danger.btn-xs" ).click(function() {	

		 var id = $(this).closest('table');
		 id = id.children('tbody').children('tr').children('td').each(function( index ) {
			 
	     if (index <= 3){ 
	    	 $( this ).remove();

	     }
		 });

		});	
})(jQuery);