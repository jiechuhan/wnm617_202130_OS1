// Document Ready
$(()=> {

	checkUserId();

	// Test-driven development
	// console.log("honk");

	$(document)

	.on("pagecontainerbeforeshow", function(event, ui) {
		console.log(ui.toPage[0].id);

		$(".active").removeClass("active");

		// PAGE ROUTING
		switch(ui.toPage[0].id) {
			case "recent-page": RecentPage(); break;
			case "list-page": ListPage(); break;
			case "user-profile-page": UserProfilePage(); break;
			case "user-upload-page": UserUploadPage(); break;
			case "vehicle-profile-page": VehicleProfilePage(); break;
			case "vehicle-edit-page": VehicleEditPage(); break;
			case "add-new-page": VehicleAddPage(); break;
			case "choose-car-page": ChooseCarPage(); break;
			case "choose-location-page": ChooseLocationPage(); break;
		}
	})


	// FORM SUBMITS
	.on("submit", "#signin-form", function(e){
		e.preventDefault();
		// console.log(e);
		checkSigninForm();
	})

	.on("submit","#register-form",function(e){
    	e.preventDefault();
    	checkSignupForm();
    	$.mobile.navigate("#register-second-page");
   })

    .on("submit","#register-second-form",function(e){
    	e.preventDefault();
    	checkSignupSecondForm();
    	$.mobile.navigate("#recent-page");
    })
    .on("submit","#add-new-form",function(e){
    	e.preventDefault();
    	checkCarAddForm();
    })
    .on("submit","#car-edit-form",function(e){
    	e.preventDefault();
    	checkCarEditForm();
    })
    .on("submit","#profile-form",function(e){
    	e.preventDefault();
    	checkUserEditForm();
    })
    .on("submit","#password-form",function(e){
    	e.preventDefault();
    	checkUserPasswordForm();
    })
    .on("change",".image-uploader input",function(e){
	    checkUpload(this.files[0])
	    .then(d=>{
	        console.log(d)
	        $("#user-upload-image").val('uploads/' + d.result);
			$(".image-uploader").css({
				"background-image":
				`url(uploads/${ d.result})`
			});
	    })
	})
	.on("submit", "#list-search", function(e){
		e.preventDefault();
    	checkSearchForm();
	})
	.on("submit", "#recent-search", function(e){
		e.preventDefault();
    	checkRecentSearchForm();
	})
	.on("change","#car-update-image-input",function(e){
	    checkUpload(this.files[0])
	    .then(d=>{
	        console.log(d)
	        if(d.error)
	    		throw "Uploading failed: " + d.error;

	        let image_location = 'uploads/' + d.result;
	         query({
			      type:'update_car_image',
			      params:[image_location, sessionStorage.carId]
			   }).then(d=>{
			      if(d.error) {
			         throw d.error;
			      }
			      $(".header .car-image").css({"background-image":`url(${image_location})`})
			   })
	    })
	})
	.on("change","#car-edit-image-input",function(e){
	    checkUpload(this.files[0])
	    .then(d=>{
	        console.log(d)
	        if(d.error)
	    		throw "Uploading failed: " + d.error;

	        let image_location = 'uploads/' + d.result;
	         query({
			      type:'update_car_image',
			      params:[image_location, sessionStorage.carId]
			   }).then(d=>{
			      if(d.error) {
			         throw d.error;
			      }
			      $(".head-image .car-image").css({"background-image":`url(${image_location})`})
			   })
	    })
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
	.on("click",".js-choose-car",function(e){
      $("#location-choose-car")
         .html(FormSelectOptions([{id:sessionStorage.carId,name:"chosen"}]))
      $("#location-redirect").val(-2);
   })
	.on("click",".js-add-from-recent",function(e){
      $("#location-redirect").val(-3);
   })
	.on("click",".location-add-submit",function(e){
    	checkLocationAddForm();
    })
    .on("click",".user-upload-submit",function(e){
    	checkUserUploadForm();
    })
    .on("click", ".car-delete", function(e){
    	console.log("123");
    	checkCarDelete($(this).data('id'));
    })
    .on("click", ".filter", function(e){
    	checkListFilter($(this).data());
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


	// MAKE TEMPLATE
	$("[data-template]").each(function() {
		let id = $(this).data("template");
		let template = $(id).html();
		$(this).html(template);
	})




});
