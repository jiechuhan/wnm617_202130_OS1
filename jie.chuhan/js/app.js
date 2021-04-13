// Document Ready
$(()=> {

	checkUserId();

	// Test-driven development
	// console.log("honk");

	$(document)

	.on("pagecontainerbeforeshow", function(event, ui) {
		console.log(ui.toPage[0].id);

		// PAGE ROUTING
		switch(ui.toPage[0].id) {
			case "recent-page": RecentPage(); break;
			case "list-page": ListPage(); break;
			case "user-profile-page": UserProfilePage(); break;
			case "vehicle-profile-page": VehicleProfilePage(); break;
		}
	})

	// FORM SUBMITS
	.on("submit", "#signin-form", function(e){
		e.preventDefault();
		// console.log(e);
		checkSigninForm();
	})


	// ANCHOR CLICKS
	.on("click", ".js-logout", function(e){
		sessionStorage.removeItem('userId');
		checkUserId();
	})
	.on("click", ".car-jump", function(e){
		sessionStorage.carId = $(this).data('id');
		$.mobile.navigate("#vehicle-profile-page");
	})


	// DATA ACTIVATE METHODS
	.on("click", "[data-activate]", function(e){
		let target = $(this).data("activate");
		$(target).addClass("active");
	})
	.on("click", "[data-deactivate]", function(e){
		let target = $(this).data("deactivate");
		$(target).removeClass("active");
	})
	.on("click", "[data-toggle]", function(e){
		let target = $(this).data("toggle");
		$(target).toggleClass("active");
	})






	$("[data-template]").each(function() {
		let id = $(this).data("template");
		let template = $(id).html();
		$(this).html(template);
	})




});
