$( document ).ready(function() {

	$("#goBack1").click(function() {
		$("#exploreBody").css("background-image", "url('img/forest2.jpg')");
		$("#goBeach").hide();
		$("#goBack").hide();
		$("#goForest2").show();
		
	});

	$("#goForest2").click(function() {
		$("#exploreBody").css("background-image", "url('img/exploreRight2.jpg')");
		$("#goBack1").show();
		$("#goForest1").show();
	});  

	$("#goForest1").click(function() {
		$("#exploreBody").css("background-image", "url('img/exploreRight3.jpg')");
		$("#goForest2").hide();
		$("#goHouse").show();
		$("#goBack2").show();
		$("#goCave").show();
	});

		$("#goCave").click(function() {
		$("#exploreBody").css("background-image", "url('img/exploreRight3.jpg')");
		$("#goForest1").hide();
		$("#goBack").show();

	$("#goHouse").click(function() {
		$("#exploreBody").css("background-image", "url('img/exploreRight3.jpg')");
		$("#goForest1").hide();
		$("#goLivingroom").show();
		$("#goBack3").show();
		
	});

	$("#goLivingroom").click(function() {
		$("#exploreBody").css("background-image", "url('img/explore2-goBack2.jpg')");
		$("#House").hide(); 
		$("#goKitchen").show();
		$("#goRoom").show();
		$("#goBack4").show();
	});


	$("#goKitchen").click(function() {
		$("#exploreBody").css("background-image", "url('img/exploreLeft1.jpg')");
		$("#goLivingroom").hide();
		$("#goGoback5").show();
	});

	$("#goRoom").click(function() {
		$("#exploreBody").css("background-image", "url('img/exploreLeft2.jpg')");
		$("#goRoom").hide();
		$("#goBack6").show();
	});

	



});