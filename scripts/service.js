
      // make the appoinrment form appear/disappear
$(document).ready(function(){
	$("#appointment").click( function(){
		$("#make-appointment").toggle();
        // clearing data in the name and telephone text area
         $("#form-name").val('');
          $("#txtPhone").val('');
          $("#creditCard").val('');
        
       
	});
});
    // disabling previous dates and sundays
$( function() {
    $("#date").datepicker({
        minDate: new Date(),
        beforeShowDay: function(date) {
            var day = date.getDay();
            return [(day > 0), ''];
        }
    });
} );
    // checking phone number is 10 digits
jQuery(document).ready(function($){
    $tp = $("#txtPhone");
    $tp.blur(function(e){
        phone = $(this).val();
        phone = phone.replace(/[^0-9]/g,'');
        if (phone.length != 10)
        {
            alert('Phone number must be 10 digits.');
            $("#txtPhone").val('');
        }
    });
    $fn = $("#form-name");
    $fn.blur(function(e){
        name = $(this).val();
        if (name.length ==0)
        {
            alert('Please enter your name.');
        }
    });
    $cc = $("#creditCard");
    $cc.blur(function(e){
        name = $(this).val();
        if (name.length !=16)
        {
            alert('Please enter a valid cridit card number.');
            $("#creditCard").val('');
        }
    });
});
    //checking that name isn not empty
jQuery(document).ready(function($){
    
});

$(document).ready(function(){
    $("#hide").click( function(){      
        $("#make-appointment").hide();
        alert('your appointment has been bookd. See you soon!');      
    });
});



        $("#creditCard").on("mouseenter", function(){
        $("#creditCard").addClass("showInput");
    });

    $("#creditCard").on("mouseleave", function(){
        $("#creditCard").removeClass("showInput");
    });
  
    // https://jqueryui.com/tooltip/ 
    // The class "highlight" used here is predefined in JQuery UI
    // the message of the tooltip is encoded in the input (in the HTML file)
    $("#creditCard").tooltip({
        classes: {
          "ui-tooltip": "highlight"
        }
      });


 


