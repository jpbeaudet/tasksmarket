var loc = false;
var ok = true;
(function($){
	 console.log("jquery start !!!!");	
	// TODO : Here will go all jquery stuff

	 $('#loc_container').hide( "fast", function() {
 	 });
	$( "#loc" ).click(function() {	
		 console.log("jquery click !!!!");
		 if (loc){	
			 console.log("loc!!");
			  $("#loc_container").hide();
			  loc = false;
		 }else{
			 console.log("not loc!!");
			  $("#loc_container").show();
			  loc = true;
		 }
		});

	$( ".btn-primary.btn-xs" ).click(function() {	
		 console.log("collapse messgage click !!!!");
		// var id = $(this).parent('td').attr("id");
		 var id = $(this).closest('table');
		 id = id.children('tbody').children('tr').children('td').children('.container-fluid');
		 //id = id.children('table').closest('.container-fluid');
		 console.log("current id = " + JSON.stringify(id));
		 if (ok){	
			 console.log("ok!!");
			  $(id).hide();
			  ok = false;
		 }else{
			 console.log(" Not ok!!");
			  $(id).show();
			  ok = true;
		 }
		});
	$( ".btn-danger.btn-xs" ).click(function() {	
		 console.log("delete messgage click !!!!");
		// var id = $(this).parent('td').attr("id");
		 var id = $(this).closest('table');
		 id = id.children('tbody').children('tr').children('td').each(function( index ) {
			 console.log("index is " + index); 
			 
	     if (index <= 3){ 
	    	 $( this ).remove();
	    	 console.log("index removed !! " + index);
	    	 //$(id).remove(); }
	     }
		 });
         
		 //id.parent('td').parent('tr').children();
		 //id = id.children('table').closest('.container-fluid');
		 console.log("current id = " + JSON.stringify(id));
		 console.log("ok!!");
		  //$(id).remove();
		});	
})(jQuery);