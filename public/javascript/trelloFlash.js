$(document).ready(function() {

	var TrelloApp;
	var TrelloCards = [];

	(function trelloAuthorize() {
		function getCards() {
			 Trello.get("members/me/boards", function(boards) { 
			    boards.forEach(function (board) {
			        Trello.get("boards/"+ board.id +"/cards", function(cards) {  
			            cards.forEach(function (card) {
			                TrelloCards.push(card);
			            });
			        });
			    });
			 });
		}

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
			getCards();
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
			getCards();
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