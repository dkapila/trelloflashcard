$(document).ready(function() {


	(function trelloAuthorize() {
		$("#authorize").click (function () {
			opts = {
				"name" : "trelloFlashCard",
				"expiration" : "30days",
				"persist" : true
			};
			Trello.authorize(opts) 
		});	
	})();

	(function getCards() {
		$("#keywordTextBox").keydown(function(e) {		
		    //if enter key pressed in textbox
    		if (e.keyCode == 13) {	
    			//get textbox value
        		var keyvalue = $("#keywordTextBox").val();

		      	//get request
		        $.ajax({
		            url: 'list',
		            type: 'GET',
		            data: {
		                key: keyvalue
		            },
		            complete: function() {
		            },
		            success: function(data) {
		                console.log (data);
		            }
    			});
		    }
    	});
	})();
});