const checkSignupForm = () => {
	let email = $("#register-email").val();
	let password = $("#register-password").val();
	let confirm = $("#register-confirm").val();


	if ( password !== confirm ) {
		throw "Passwors don't match";
		return
	} else {
		query({
			type: "insert_user",
			params: [email, password]
		}).then( d =>{
			if(d.error) {
				throw d.error;
			}
			console.log(d);
			sessionStorage.userId = d.id;
			$("#register-form")[0].reset();
			$.mobile.navigate("#register-second-page");
		})
	}
}



const checkSignupSecondForm =() => {
	let username = $("#register-second-username").val();
	let firstname = $("#register-second-firstname").val();
	let lastname = $("#register-second-lastname").val();


	query({
		type: "update_user_initial",
		params: [username, firstname, lastname, sessionStorage.userId]
	}).then( d =>{
		if(d.error) {
			throw d.error;
		}
		console.log(d);
		$("#register-second-form")[0].reset();
		$.mobile.navigate("#recent-page");
	})
}



const checkUserEditForm = () => {
	let email = $("#user-edit-email").val();
	let firstname = $("#user-edit-firstname").val();
	let lastname = $("#user-edit-lastname").val();
	let username = $("#user-edit-username").val();

	query({
		type: "update_user",
		params: [username, firstname, lastname, email, sessionStorage.userId]
	}).then( d =>{
		if(d.error) {
			throw d.error;
		}
		window.location.reload();
	})
}



const checkUserPasswordForm = () => {
	let oldpassword = $("#user-edit-old-password").val();
	let password = $("#user-edit-new-password").val();
	let confirm = $("#user-edit-confirm-password").val();


	if(password !==confirm)
		throw "New passwords don't match";
	query({
		type: "update_user_password",
		params: [password, sessionStorage.userId]
	}).then( d =>{
		if(d.error) {
			throw d.error;
		}
		// window.location.reload();
	})
}



const checkCarAddForm = () => {
	let model = $("#car-add-model").val();
	let make = $("#car-add-make").val();
	let type = $("#car-add-type").val();
	let color = $("#car-add-color").val();
	let description = $("#car-add-description").val();


	query({
		type: "insert_car",
		params: [sessionStorage.userId, model, make, type, color, description]
	}).then( d =>{
		if(d.error) {
			throw d.error;
		}
		console.log(d);
		$("#add-new-form")[0].reset();
		sessionStorage.carId = d.id;
		window.history.go(-1);
		// $.mobile.navigate("#vehicle-profile-page");
	})
}



const checkCarEditForm = () => {
	let model = $("#car-edit-model").val();
	let make = $("#car-edit-make").val();
	let type = $("#car-edit-type").val();
	let color = $("#car-edit-color").val();
	let description = $("#car-edit-description").val();

	console.log(type);

	query({
		type: "update_car",
		params: [model, make, type, color, description, sessionStorage.carId]
	}).then( d => {
		if(d.error) {
			throw d.error;
		}
		window.history.go(-1);
	})
}



const checkLocationAddForm = () => {
   let car_id = $("#location-choose-car").val();
   let lat = +$("#location-lat").val();
   let lng = +$("#location-lng").val();
   let description = $("#location-description").val();

   console.log(car_id, lat, lng, description);

   query({
      type:"insert_location",
      params:[car_id,lat,lng,description]
   }).then(d=>{
      if(d.error) {
         throw d.error;
      }
      window.history.go(+$("#location-redirect").val());
      // console.log($("#location-redirect").val())
   })
}






const checkUserUploadForm = () => {
   let upload = $("#user-upload-image").val();
   if(upload == "") return;

   query({
      type:'update_user_image',
      params:[upload,sessionStorage.userId]
   }).then(d=>{
      if(d.error) {
         throw d.error;
      }
      window.history.go(-1);
   })
}



const checkCarDelete = (id) => {
	query({
		type: 'delete_car',
		params: [id]
	}).then(d=>{
	if(d.error) {
         throw d.error;
      }
      window.history.go(-1);
	})
}

const checkSearchForm = async () => {
	let search = $("#list-search-value").val();
	
	let cars = await query({
		type: "search_cars",
		params: [search, sessionStorage.userId]
	});
	console.log(search);

	makeCarListSet(cars.result, "No results found.");
}

const checkRecentSearchForm = async () => {
	let search = $("#recent-search-value").val();
	console.log(search);
	
	let cars = await query({
		type: "search_recent_cars",
		params: [search, sessionStorage.userId]
	});
	console.log(cars);

	RecentPage(cars);

}

const checkListFilter = async ({field, value}) => {
	let cars = value == "" ?
		await query({
			type: 'cars_by_user_id',
			params: [sessionStorage.userId]
		}) :
		await query({
			type: 'filter_cars',
			params: [field, value, sessionStorage.userId]
		});

	makeCarListSet(cars.result, "No cars found.");
};







































