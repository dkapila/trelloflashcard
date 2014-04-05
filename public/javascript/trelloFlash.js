$(document).ready(function() {

	var TrelloApp;
	(function trelloAuthorize() {

		function tokenReceived() {
			console.log ('logged in');
		};

		opts = {
			"name" : "trelloFlashCard",
			"expiration" : "30days",
			"persist" : true,
			"interactive" : false,
			"success" : tokenReceived
		};
		Trello.authorize(opts); 

		if (!Trello.authorized()) {
			$("#authorize").show();
		}
		else {
			$("#deauthorize").show();
		}

		$("#authorize").click (function () {
			opts = {
				"name" : "trelloFlashCard",
				"expiration" : "30days",
				"persist" : true,
				"success" : tokenReceived
			};
			Trello.authorize(opts); 
			$(this).hide();
			$("#deauthorize").show();
		});	

		$("#deauthorize").click (function () {
			Trello.deauthorize();
			$(this).hide();
			$("#authorize").show();
		});


	})();


	(function getCards() {
		$("#keywordTextBox").keydown(function(e) {		
		    //if enter key pressed in textbox
    		if (e.keyCode == 13) {	
    			//get textbox value
        		var keyvalue = $("#keywordTextBox").val();
        		Trello.get("members/me/cards", function (cards) {
        			console.json(cards);
        		});
		    }
    	});
	})();
});